import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
import Home from '@/views/Home.vue'
import { auth } from '@/firebase'

const isAuthenticated = () => {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                resolve(user);
            } 
            else {
                localStorage.removeItem('user');
                reject({ name: 'login' }); 
            }
        });
    });
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        isAuthenticated()
            .then(() => {
                next();
            })
            .catch(error => {
                next(error);
            });
    } else next();

})

export default router

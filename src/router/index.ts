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
                transition: 'slide-left'
            },
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                transition: 'slide-left'
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                transition: 'slide-left'
            },
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

<template>
    <main class="w-full bg-slate-100 h-screen flex flex-col items-center justify-center ">
        <div class="mb-5 space-y-5 text-center">
            <!-- <font-awesome-icon class="text-[5rem]" icon="cat" /> -->
            <transition-group tag="div" name="fade">
                <!-- <h3 class="text-gray-800 text-[2rem] font-semibold" key="header">Hi {{ auth.currentUser?.email }}</h3> -->
                <h3 class="text-gray-800 text-[1.5rem] font-semibold" key="header">Welcome to Catto's Toolkit!</h3>
                <p class="text-gray-500 text-[1rem] font-regular" key="muted-text">Select and enjoy this small demos.</p>
            </transition-group>
        </div>
        <transition-group tag="div" name="fade" class="grid grid-cols-3 gap-4">
            <router-link key="todo-list" to="/" class="w-[10rem] h-[10rem] transition-all duration-300 bg-indigo-500 hover:bg-indigo-700 flex flex-col items-center justify-center space-y-2 shadow-md rounded-md">
                <font-awesome-icon class="text-slate-100 text-3xl" icon="list" />
                <p class="text-slate-50 text-base tracking-wider">Todo List</p>
            </router-link>
            <router-link key="calculator" to="/" class="w-[10rem] h-[10rem] transition-all duration-300 bg-green-500 hover:bg-green-700 flex flex-col items-center justify-center space-y-2 shadow-md rounded-md">
                <font-awesome-icon class="text-slate-100 text-3xl" icon="calculator" />
                <p class="text-slate-50 text-base tracking-wider">Calculator</p>
            </router-link>
            <router-link key="chat" to="/" class="w-[10rem] h-[10rem] transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 flex flex-col items-center justify-center space-y-2 shadow-md rounded-md">
                <font-awesome-icon class="text-slate-100 text-3xl" icon="comment" />
                <p class="text-slate-50 text-base tracking-wider">Chat</p>
            </router-link>
            <router-link key="chat" to="/" class="w-[10rem] h-[10rem] transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 flex flex-col items-center justify-center space-y-2 shadow-md rounded-md">
                <font-awesome-icon class="text-slate-100 text-3xl" icon="comment" />
                <p class="text-slate-50 text-base tracking-wider">Dream App</p>
            </router-link>
            <router-link key="chat" to="/" class="w-[10rem] h-[10rem] transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 flex flex-col items-center justify-center space-y-2 shadow-md rounded-md">
                <font-awesome-icon class="text-slate-100 text-3xl" icon="comment" />
                <p class="text-slate-50 text-base tracking-wider">Thesis Generator</p>
            </router-link>
            <div v-on:click="signOut" key="signout" role="button" class="w-[10rem] h-[10rem] transition-all duration-300 bg-gray-800 hover:bg-gray-900 flex flex-col items-center justify-center space-y-2 shadow-md rounded-md">
                <font-awesome-icon class="text-slate-100 text-3xl" icon="sign-out" />
                <p class="text-slate-50 text-base tracking-wider">Sign out</p>
            </div>
        </transition-group>
    </main>
</template>
<script lang="ts">
import { auth } from '@/firebase'
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
    setup() {

        const router = useRouter();
        const shown = ref<boolean>(false);

        const signOut = () => {
            auth.signOut();
            router.push({ name: 'login' })
        }

        const toggle = () => {
            shown.value = !shown.value
        }

        return {
            signOut,
            toggle,
            shown,
            auth
        }
    }
}
</script>
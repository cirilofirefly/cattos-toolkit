<template>
    <div class="w-full h-screen flex flex-row items-center justify-center">
        <img class="object-cover w-3/4 h-full" src="@/assets/images/bg-register.svg" alt="">
        <form-layout @submit.prevent="login" class="w-1/4 h-full bg-slate-50 flex flex-col justify-center space-y-4">
            <template v-slot:title>
                <div class="text-center px-10 space-y-2">
                    <h1 class="text-green-700 text-3xl font-bold tracking-wider uppercase">Login</h1>
                    <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                        quod.</p>
                </div>
            </template>
            <template v-slot:fields>
                <div class="px-10 space-y-4">
                    <InputLabel for="email" value="Email" />
                    <TextInput id="email" type="email" class="mt-1 block text-base w-full py-1 px-2 border-2 border-green-600" v-model="form.email" required
                        autocomplete="email" autofocus />
                    <InputError class="mt-2" :message="form.errors.email" />
                    <InputLabel for="password" value="Password" />
                    <TextInput id="password" type="password" class="mt-1 block text-base w-full py-1 px-2 border-2 border-green-600" v-model="form.password"
                        autocomplete="password" required />
                    <InputError class="mt-2" :message="form.errors.password" />
                </div>
            </template>
            <template v-slot:buttons>
                <PrimaryButton class="ml-10 bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-700" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    {{ form.processing ? 'Processing...' : 'Login' }}
                </PrimaryButton>
            </template>
        </form-layout>
    </div>
</template>
<script lang="ts">

import FormLayout from '@/layouts/Form.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';
import InputLabel from '@/components/InputLabel.vue';
import InputError from '@/components/InputError.vue';
import { auth } from '@/firebase'

import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { ILogin } from '@/interfaces/auth'

export default {
    name: 'Login',
    components: {
        FormLayout,
        PrimaryButton,
        TextInput,
        InputLabel,
        InputError
    },
    setup() {

        const router = useRouter();

        const form = ref<ILogin>({
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            },
            processing: false
        });

        const login = () => {
            form.value.processing = true
            signInWithEmailAndPassword(auth, form.value.email, form.value.password)
                .then((userCredential: any) => {
                    localStorage.setItem('user', JSON.stringify(userCredential.user))
                    router.push('/')
                    form.value.processing = false
                })
                .catch((error: any) => {
                    form.value.processing = false
                    error.errors.forEach((error: any) => {
                        console.log(error)
                    });
                })
        }

        return {
            login,
            form
        }
    }
}
</script>
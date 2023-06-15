<template>
    <div class="w-full h-screen flex flex-row items-center justify-center">
        <div class="flex-grow">
            <img src="" alt="">
        </div>
        <form-layout @submit.prevent="login" class="w-full h-full bg-green-500">
            <template v-slot:title>
                <h1>Login</h1>
            </template>
            <template v-slot:buttons>
                <PrimaryButton type="submit" :title="'Login'" class="w-full" />
            </template>
        </form-layout>
    </div>
</template>
<script lang="ts">
import FormLayout from '@/layouts/Form.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
export default {
    name: 'Login',
    components: {
        FormLayout,
        PrimaryButton
    },
    methods: {
        login() {
            console.log('test')
        }
    }
}
</script>
<template>
    <form-layout @submit.prevent="register">
        <template v-slot:title>
            <h1>Register</h1> 
        </template>
        <template v-slot:buttons>
            <button type="submit">Register</button>
        </template>
    </form-layout>
</template>
<script lang="ts">
import FormLayout from '@/layouts/Form.vue';
export default {
    name: 'Register',
    components: {
        FormLayout
    },
    methods: {
        register() {
            console.log('test')
        }
    }
}
</script>
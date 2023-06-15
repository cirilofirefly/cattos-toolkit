<template>
    <button class="bg-green-400">{{ title }}</button>
</template>
<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: 'Primary Button'
        }
    }
}
</script>
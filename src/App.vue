<script  lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, ref } from 'vue';
export default {
    setup() {
        const route = useRoute();
        const path = computed(() => route.path)
        const footerHidePath = ref<string[]>(['/login', '/register']);

        return {
            route,
            path,
            footerHidePath
        }
    }

}

</script>

<template>
    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
    <footer class="fixed right-[10px] bottom-[10px]" v-show="!footerHidePath.includes(path)">
        <p>Catto's Toolkit v1 created by
            <a href="https://github.com/cirilofirefly" target="_black"
                class="text-green-700 hover:text-green-900 underline">Catto</a>
        </p>
    </footer>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer class="fixed right-[10px] bottom-[10px]">
    <p>Catto's Toolkit v1 created by 
        <a href="https://github.com/cirilofirefly" target="_black" class="text-green-700 hover:text-green-900 underline">Catto</a>
    </p>
  </footer>
</template>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{ exploreStore.products }}
  </div>
</template>

<script setup lang="ts">
import { useExploreStore } from '@/store/products/state';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { onBeforeMount } from 'vue';

const exploreStore = useExploreStore();

onBeforeMount(() => {
  exploreStore.fetchProducts();
})

</script>

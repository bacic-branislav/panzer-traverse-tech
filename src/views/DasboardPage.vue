<template>
  <main class="p-dashboard">
    <HeaderElement/>

    <div class="container">
      {{ exploreStore.products }}

      <BaseButton>View All Projects</BaseButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderElement from '@/components/HeaderElement.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { useExploreStore } from '@/store/products/state';
import { onBeforeMount } from 'vue';

const exploreStore = useExploreStore();

onBeforeMount(() => {
  exploreStore.fetchProducts();
})

</script>

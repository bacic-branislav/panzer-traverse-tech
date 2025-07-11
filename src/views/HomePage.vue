<template>
  <main class="p-dashboard">

    <div class="container">
      <h1>Welcome to Panzer Controls</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut libero nemo possimus qui repellat reprehenderit sequi ut velit veniam? Eum fugiat hic illum nihil nobis quae ratione totam. Ab accusantium consequatur culpa distinctio doloremque harum hic maiores nihil nostrum perspiciatis quos rem repellat, vero! Beatae dignissimos dolorem, doloribus excepturi fugiat labore non odio praesentium quis, recusandae sed ut. Ab animi autem beatae consequatur cumque debitis doloremque esse excepturi fugiat in incidunt ipsam laboriosam maxime nihil non nulla, perferendis placeat provident quidem ratione recusandae repellat sit tenetur ullam unde, vel voluptas! Aperiam blanditiis eius excepturi expedita obcaecati odit, quibusdam tempore.</p>

      <RouterLink to="/downloads" class="base-button">
        See Downloads
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import HeroElement from '@/components/elements/HeroElement.vue';
import BreadcrumbsElement from "@/components/elements/BreadcrumbsElement.vue";
import { useProductsStore } from "@/store/products/state";
import { onBeforeMount } from 'vue';

const productsStore = useProductsStore();

onBeforeMount(() => {
  productsStore.fetchProducts();
})

</script>

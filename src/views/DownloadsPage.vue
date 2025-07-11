<template>
  <main class="p-downloads">
    <div class="container">
      <h1>Downloads</h1>

      <div class="downloads-wrapper">
        <RouterLink
          v-for="product in products"
          :key="product.name"
          :to="`/downloads/${product.slug}`"
          class="download-item"
        >
          <img :src="require(`@/assets/images/products/${product.slug}.jpg`)" :alt="product.name">
          <div class="download-item-details">
            <p>{{ product.name }}</p>
            <span class="badge">{{ product.parts.length }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import HeroElement from "@/components/elements/HeroElement.vue";
import BreadcrumbsElement from "@/components/elements/BreadcrumbsElement.vue";
import { useProductsStore } from "@/store/products/state";
import { computed, onMounted } from "vue";

const productsStore = useProductsStore();
const products = computed(() => productsStore.products);

onMounted(() => {
  productsStore.fetchProducts();
})
</script>

<script setup lang="ts">
import CardElement from "@/components/elements/CardElement.vue";
import JumbotronElement from "@/components/elements/JumbotronElement.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import { useProductsStore } from "@/store/products/state";
import { computed, onBeforeMount } from "vue";
import { NAVIGATION } from "@/utilities/routes";

const productsStore = useProductsStore();
const products = computed(() => productsStore.products);
const loading = computed(() => productsStore.loading);

onBeforeMount(() => {
  if (!products.value.length){
    productsStore.fetchProducts();
  }
})
</script>

<template>
  <div class="p-downloads">
    <JumbotronElement/>

    <main>
      <section class="filter-section">
        <div class="container">
          <div class="filter-section-header">
            <BaseButton>All (6)</BaseButton>
            <BaseButton>German (2)</BaseButton>
            <BaseButton>American (1)</BaseButton>
            <BaseButton>Soviet (1)</BaseButton>

            <BaseInput
              placeholder="Search Controllers..."
            />
          </div>
        </div>
      </section>

      <div class="container">
        <div class="downloads-wrapper">
          <template v-if="loading.products">
            <div v-for="(item, i) in 5" :key="i" class="download-item-skeleton"></div>
          </template>

          <template v-else>
            <CardElement
              v-for="product in products"
              :key="product.name"
              :product="product"
            />
          </template>
        </div>
      </div>
    </main>
  </div>
</template>

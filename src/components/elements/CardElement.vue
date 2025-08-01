<script setup lang="ts">
import { defineProps } from "vue";
import { NAVIGATION } from "@/utilities/routes";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="card">
    <div class="card-header">
      <img :src="require(`@/assets/images/products/${product.slug}.jpg`)" :alt="product.name">
    </div>

    <div class="card-body">
      <div class="header">
        <h3>{{ product.name }} Controller</h3>
        <span class="base-badge">
          {{ product.nationality }}
        </span>
      </div>
      <div class="rating">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
      </div>
      <p class="description">
        {{ product.description }}
      </p>
    </div>

    <div class="card-footer">
      <span>
        <i class="ri-download-2-line"></i>
        {{ product.downloads }} downloads
      </span>

      <RouterLink :to="`${NAVIGATION.downloads}/${product.slug}`" class="base-button btn-secondary">
        View Details
        <i class="ri-arrow-right-long-line"></i>
      </RouterLink>
    </div>
  </article>
</template>
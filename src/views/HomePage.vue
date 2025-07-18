<script setup lang="ts">
import CardElement from "@/components/elements/CardElement.vue";
import HeroElement from "@/components/elements/HeroElement.vue";
import { useProductsStore } from "@/store/products/state";
import { computed, onBeforeMount } from 'vue';
import { NAVIGATION } from "@/utilities/routes";

const productsStore = useProductsStore();
const preview = computed(() => productsStore.preview);

onBeforeMount(() => {
  if (!preview.value.length) {
    productsStore.fetchProductsPreview();
  }
})

</script>

<template>
  <div class="p-home">
    <HeroElement/>

    <main>
      <div class="container">
        <section>
          <h2 class="section-title">Featured Controllers</h2>
          <p class="section-subtitle">Check out our most popular tank-inspired designs</p>

          <div class="grid-wrapper">
            <CardElement
              v-for="product in preview"
              :key="product.name"
              :product="product"
            />
          </div>

          <RouterLink :to="NAVIGATION.downloads" class="base-button" style="margin-top: 50px;">
            View All Controllers
            <i class="ri-arrow-right-line"></i>
          </RouterLink>
        </section>
      </div>


      <section class="gray-bg">
        <div class="container">
          <h2 class="section-title">Why choose our models</h2>
          <p class="section-subtitle">Unique controllers that combine historical accuracy with gaming experience</p>

          <div class="our-models-wrapper">
            <article class="our-model-item">
              <div class="icon">
                <i class="ri-download-2-line"></i>
              </div>
              <h3>Free Downloads</h3>
              <p>All our 3D models are completely free to download for personal use.</p>
            </article>

            <article class="our-model-item">
              <div class="icon">
                <i class="ri-shield-line"></i>
              </div>
              <h3>High Quality</h3>
              <p>Each model is meticulously designed to be both historically accurate and 3D printable.</p>
            </article>

            <article class="our-model-item">
              <div class="icon">
                <i class="ri-gemini-line"></i>
              </div>
              <h3>Unique Designs</h3>
              <p>Our controllers blend gaming functionality with authentic WW2 tank aesthetics.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

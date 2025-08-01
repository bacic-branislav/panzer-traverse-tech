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
      <section>
        <div class="container">
          <p class="pre-title">
            Explore controllers
          </p>
          <h2 class="section-title">
            Experience the thrill of tank warfare with Panzer Controls
          </h2>
          <p class="section-subtitle">
            At Panzer Controls, we are dedicated to bringing immersive gaming experiences to life. Our mission is to provide gamers with innovative, 3D printable game controllers that replicate the authentic feel of tank gunner controls. Join us in revolutionizing the way you play and feel the power of precision at your fingertips.
          </p>
          <RouterLink :to="NAVIGATION.about" class="base-button btn-secondary">
            Learn More
          </RouterLink>
        </div>
      </section>

      <section class="gray-bg">
        <div class="container">
          <p class="pre-title">Explore controllers</p>
          <h2 class="section-title">
            Featured Controllers
          </h2>
          <p class="section-subtitle">
            Check out our most popular tank-inspired designs
          </p>

          <div class="grid-wrapper">
            <CardElement
              v-for="product in preview"
              :key="product.name"
              :product="product"
            />
          </div>

          <RouterLink :to="NAVIGATION.downloads" class="base-button" style="margin-top: 50px;">
            View All Controllers
            <i class="ri-arrow-right-long-line"></i>
          </RouterLink>
        </div>
      </section>


      <section>
        <div class="container">
          <p class="pre-title">
            Download & Assembly
          </p>
          <h2 class="section-title">
            Your Guide to Assembling the Game Controller
          </h2>
          <p class="section-subtitle">
            Follow our simple steps to download, print, and assemble your very own 3D printable game controller.
            This guide ensures you have everything you need to create a functional and fun gaming accessory.
            Let's get started on bringing your tank gunner controls to life!
          </p>


          <div class="our-models-wrapper">
            <article class="our-model-item">
              <div class="icon">
                <i class="ri-download-2-line"></i>
              </div>
              <h3>Step 1: Download the Files</h3>
              <p>Log in to access the downloadable files.</p>
            </article>

            <article class="our-model-item">
              <div class="icon">
                <i class="ri-box-3-line"></i>
              </div>
              <h3>Step 2: Print the Components</h3>
              <p>Use a 3D printer to create each part.</p>
            </article>

            <article class="our-model-item">
              <div class="icon">
                <i class="ri-tools-fill"></i>
              </div>
              <h3>Step 3: Assemble Your Controller</h3>
              <p>Follow our assembly instructions for best results.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

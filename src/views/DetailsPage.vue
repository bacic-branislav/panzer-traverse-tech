<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import { useProductsStore } from "@/store/products/state";
import { useRoute } from 'vue-router';
import { useAuthStore } from "@/store/auth/user";
import { NAVIGATION} from "@/utilities/routes";
import { computed, onMounted } from 'vue';

const authStore = useAuthStore();
const route = useRoute();
const productsStore = useProductsStore();
const product = computed(() => productsStore.getDetails);

const user = computed(() => authStore.user);

onMounted(() => {
  productsStore.fetchDetails(route.params.product);
})

</script>

<template>
  <main class="p-details">
    <div class="container">
      <RouterLink :to="NAVIGATION.downloads">
        <i class="ri-arrow-left-line"></i>
        Back to Downloads
      </RouterLink>

      <section class="details-wrapper">
        <article class="details-wrapper-section instructions">

        </article>

        <article class="details-wrapper-section details">
          <div class="header">
            <h2>{{ product.name }} Controller</h2>
            <span class="base-badge">{{ product.nationality }}</span>
          </div>

          <div class="rating">
            <span style="margin-right: 4px">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-line"></i>
            </span>
            <span>{{ product.rating || 0 }} (1 review)</span>
          </div>

          <div class="info-bar">
            <span>
              <i class="ri-download-2-line"></i>
              {{ product.downloads || 0 }} downloads
            </span>

            <span>
              <i class="ri-instance-line"></i>
              {{ product.parts?.length || 0 }}
              Parts
            </span>

            <span>
              <i class="ri-calendar-line"></i>
              Added 12/04/2025
            </span>
          </div>

          <p class="description">{{ product.description }}</p>



          <div class="tabs-element">
            <div class="tabs-header">
              <BaseButton>Details</BaseButton>
              <BaseButton>Features</BaseButton>
              <BaseButton>Inspiration</BaseButton>
            </div>
            <div class="tabs-content">
              <p>
                <strong>File Format:</strong>
                STL (3D Printable)
              </p>
              <p>
                <strong>Dimensions:</strong>
                Compatible with standard 3D printer
              </p>
              <p>
                <strong>Print Recommendation:</strong>
                PLA 0.2mm layer height, 20% infill
              </p>
              <p>
                <strong>Hardware Required:</strong>
                Standard controller buttons, joystick, and electronics (not included)
              </p>
            </div>
          </div>

          <Base-Button class="cta-btn">
            <i class="ri-download-2-line"></i>
            Download 3D Files
          </Base-Button>

          <div style="text-align: center; font-size: 14px">
            Please
            <RouterLink :to="NAVIGATION.login">login</RouterLink> or
            <RouterLink :to="NAVIGATION.register">register</RouterLink>
            to download this model.
          </div>
        </article>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import { useProductsStore } from "@/store/products/state";
import { useRoute } from 'vue-router';
import { useAuthStore } from "@/store/auth/user";
import { NAVIGATION} from "@/utilities/routes";
import { computed, onMounted } from 'vue';
import BaseBack from "@/components/base/BaseBack.vue";
import TabsElement from "@/components/elements/TabsElement.vue";

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
      <BaseBack text="Back to downloads"/>

      <div class="details-wrapper">
        <div class="details-wrapper-section instructions">

        </div>

        <div class="details-wrapper-section details">
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


          <TabsElement/>


          <Base-Button class="cta-btn">
            <i class="ri-download-2-line"></i>
            Download 3D Files
          </Base-Button>

          <p style="text-align: center; font-size: 14px">
            Please
            <RouterLink :to="NAVIGATION.login" class="strong">login</RouterLink> or
            <RouterLink :to="NAVIGATION.register" class="strong">create account</RouterLink>
            to download this model.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
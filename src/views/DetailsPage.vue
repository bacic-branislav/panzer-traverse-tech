<template>
  <main class="p-details">
    <div class="container">
      <RouterLink to="/downloads">
        <i class="ri-arrow-left-s-line"></i>
        Back
      </RouterLink>

      <div class="download-section">
        <img :src="require(`@/assets/images/products/${route.params.product}.jpg`)" alt="">

        <div class="content">
          <div class="header">
            <h2 class="title">{{ product.name }}</h2>

            <div class="rating">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-line"></i>

              (12)
            </div>
          </div>
          <p class="info-item">
            <i class="ri-calendar-fill"></i>
            July 4, 2025
          </p>
          <p class="info-item">
            <i class="ri-download-cloud-2-fill"></i>
            {{ product.downloads }} Downloads
          </p>
          <p class="info-item">
            <i class="ri-chat-1-fill"></i>
            2 Comments
          </p>
        </div>

        <BaseButton>
          <i class="ri-download-cloud-fill"></i>
          Download
        </BaseButton>
      </div>

      {{details}}


      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos facere hic iure modi optio suscipit? Alias architecto cupiditate dicta dolore et eum expedita itaque iure odio perspiciatis porro quia quisquam quos rerum saepe temporibus, velit! Assumenda culpa debitis, dolor esse minima molestias. Aliquid animi aut blanditiis delectus dolor ducimus exercitationem, fuga inventore ipsum laboriosam libero nobis nostrum numquam quod sapiente sunt tempora. Accusantium consectetur dignissimos dolor earum, est eum facere id, inventore laudantium molestiae nulla officia provident quo quos, sequi? Aspernatur assumenda deserunt distinctio doloremque, ducimus earum est expedita facere ipsa natus omnis, quasi quia ratione sunt ullam, voluptates!</p>

      <div class="wrapper">
        <RouterLink to="/downloads/panzer-3/traverse" class="details-item">

          <div class="details-item-details">
            <p>Traverse Box</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </main> 
  
  
</template>

<script setup lang="ts">
import BreadcrumbsElement from "@/components/elements/BreadcrumbsElement.vue";
import HeroElement from "@/components/elements/HeroElement.vue";
import BaseButton from '@/components/base/BaseButton.vue';
import { useProductsStore } from "@/store/products/state";
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';

const route = useRoute();
const productsStore = useProductsStore();
const product = computed(() => productsStore.getDetails);

onMounted(() => {
  productsStore.fetchDetails(route.params.product);
})

</script>
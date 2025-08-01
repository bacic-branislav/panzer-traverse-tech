<script setup lang="ts">
import {computed, ref} from 'vue'
import BaseButton from "@/components/base/BaseButton.vue";
import { useProductsStore } from "@/store/products/state";

const tabs = ["Details", "Features", "Inspiration"];
const activeTab = ref("Details");

const toggleTab = (name: string) => {
  activeTab.value = name;
}

const productsStore = useProductsStore();
const product = computed(() => productsStore.getDetails);
</script>

<template>
  <article class="tabs-element">
    <div class="tabs-header">
      <BaseButton
        v-for="tab in tabs"
        :key="tab.name"
        @click="toggleTab(tab)"
        :class="{ 'btn-secondary': activeTab !== tab }"
      >
        {{ tab }}
      </BaseButton>
    </div>

    <div class="tabs-content">
      <template v-if="activeTab === 'Details'">
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
      </template>

      <template v-if="activeTab === 'Features'">
        <ul>
          <li v-for="(feature,i) in product.features" :key="i">
            <i class="ri-checkbox-circle-fill"></i>
            {{ feature }}
          </li>
        </ul>
      </template>

      <template v-if="activeTab === 'Inspiration'">
        <p>{{ product.inspiration }}</p>
      </template>
    </div>
  </article>
</template>
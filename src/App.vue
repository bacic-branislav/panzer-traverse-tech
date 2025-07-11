<script setup lang="ts">
import NavigationElement from '@/components/elements/NavigationElement.vue';
import HeroElement from "@/components/elements/HeroElement.vue";
import BreadcrumbsElement from "@/components/elements/BreadcrumbsElement.vue";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <template v-if="route.path === '/login' || route.path === '/register'">
    <HeroElement/>
  </template>

  <template v-else>
    <NavigationElement/>
    <HeroElement style="margin-top: 60px"/>
    <BreadcrumbsElement/>
  </template>

  <RouterView/>
</template>

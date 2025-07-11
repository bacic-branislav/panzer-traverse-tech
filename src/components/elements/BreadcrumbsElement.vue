<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const breadcrumbs = computed(() => {
  return route.path.split('/').filter(Boolean);
})


</script>

<template>
  <section class="breadcrumbs-element">
    <div class="container">
      <RouterLink :class="['breadcrumb-item', { 'chevron' : breadcrumbs.length }]" to="/">
        Home
      </RouterLink>

      <template
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index">

        <RouterLink
          v-if="index === breadcrumbs.length -2"
          :to="`/${breadcrumb}`"
          class="breadcrumb-item chevron"
        >
          {{ breadcrumb }}
        </RouterLink>

        <p v-else class="breadcrumb-item">{{ breadcrumb }}</p>
      </template>



<!--      <RouterLink to="/downloads">Downloads</RouterLink>-->

    </div>
  </section>
</template>
<template>
  <main>
    <HeaderElement/>

    <div class="container">
       {{ route.params }}
    </div>
  </main> 
  
  
</template>

<script setup lang="ts">
import HeaderElement from '@/components/HeaderElement.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
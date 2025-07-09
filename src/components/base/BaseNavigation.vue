<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';

</script>

<template>
  <nav class="base-navigation">
    <div class="container">
      <img src="@/assets//images/panzer-controls-logo.png" alt="logo" class="logo">

      <div class="links">
        <router-link to="/">Dashboard</router-link> |
        <router-link to="/downloads">Downloads</router-link>
      </div>
      
      <BaseButton small>Contact Us</BaseButton>
    </div>
    
  </nav>
</template>
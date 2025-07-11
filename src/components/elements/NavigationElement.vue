<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';

</script>

<template>
  <nav class="navigation-element">
    <div class="container">
      <RouterLink to="/">
        <img src="@/assets/images/panzer-controls-logo.png" alt="Panzer Controls logo" class="logo">
      </RouterLink>

      <div class="links">
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/downloads">Downloads</RouterLink>
      </div>

      <div>
        <RouterLink to="/login">Login</RouterLink> |
        <RouterLink to="/register">Register</RouterLink>
      </div>
    </div>
  </nav>
</template>
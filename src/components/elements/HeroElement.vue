<script setup lang="ts">
import { NAVIGATION } from "@/utilities/routes";
</script>

<template>
  <header class="hero-element">
    <div class="container">
      <div class="content">
        <h1>Game controllers <br> with tank power</h1>
        <p class="subtitle">
          Our focus is designing controllers inspired by iconic World War II tanks. <br>
          Engineered for gaming enthusiasts and history buffs. <br>
          Free for personal use.
        </p>

        <div class="action-elements">
          <RouterLink :to="NAVIGATION.downloads" class="base-button">
            Browse Controllers
            <i class="ri-arrow-right-line"></i>
          </RouterLink>

          <RouterLink :to="NAVIGATION.about" class="base-button">
            Learn More
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { NAVIGATION } from "@/utilities/routes";
</script>

<template>
  <header class="hero-element">
    <div class="container">
      <div class="content">
        <p class="pre-title">UI Kit by the makers of Tailwind CSS</p>
        <h1 class="hero-title">Game controllers <br> with tank power</h1>
        <p class="hero-subtitle">
          Our focus is designing controllers inspired by iconic World War II tanks. <br>
          Engineered for gaming enthusiasts and history buffs. <br>
          Free for personal use.
        </p>

        <div class="action-elements">
          <RouterLink :to="NAVIGATION.downloads" class="base-button btn-lg">
            Browse Controllers
            <i class="ri-arrow-right-long-line"></i>
          </RouterLink>

          <RouterLink :to="NAVIGATION.about" class="base-button btn-lg">
            Learn More
          </RouterLink>
        </div>

        <i class="ri-scroll-to-bottom-line scroll-icon"></i>
      </div>
    </div>
  </header>
</template>
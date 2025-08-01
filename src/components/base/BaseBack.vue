<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: "Back"
  }
})
</script>

<template>
  <p class="base-back" @click="$router.go(-1)">
    <i class="ri-arrow-left-long-line"></i>
    {{ props.text }}
  </p>
</template>
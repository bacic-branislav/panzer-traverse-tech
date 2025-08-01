<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  disabled: Boolean,
  loading: Boolean,
  small: Boolean,
  large: Boolean,
  plain: Boolean,
  secondary: Boolean,
  type: {
    type: String,
    default: "button",
    validator: (val:string) => {
      return ["button", "submit"].includes(val);
    }
  }
})

const getClass = computed(() => {
  return {
    "btn-sm": props.small,
    "btn-lg": props.large,
    "btn-plain": props.plain,
    "btn-secondary": props.secondary
  }
})
</script>

<template>
  <button
    :class="['base-button', getClass]"
    :disabled="disabled"
    :type="type"
  >
    <slot/>

    <i v-if="loading" class="ri-loader-4-line loader-icon"></i>
  </button>
</template>
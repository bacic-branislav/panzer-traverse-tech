<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  disabled: Boolean,
  loading: Boolean,
  small: Boolean,
  large: Boolean,
  type: {
    type: String,
    default: "button",
    validator: (val:string) => {
      return ["button", "submit"].includes(val);
    }
  }
})

const getSize = computed(() => {
  return {
    "btn-sm": props.small,
    "btn-lg": props.large
  }
})
</script>

<template>
  <button
    :class="['base-button', getSize]"
    :disabled="disabled"
    :type="type"
  >
    <slot/>
  </button>
</template>
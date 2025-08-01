<script setup lang="ts">
import { toRef, defineProps } from 'vue';
import { useField } from 'vee-validate';
import { EMAIL_ERROR_MSG } from "@/utilities/constants";

const props = defineProps({
  fieldName: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false
  },
  successMessage: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator: (val:string) => {
      return ["text", "email", "password",].includes(val);
    }
  },
});

const name = toRef(props, 'fieldName');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <div class="base-input" :class="{ 'has-error': !!errorMessage, 'has-success': meta.valid }">

    <div class="base-input-label-wrapper">
      <label v-if="label" :for="name" class="label">
        {{ label }}
      </label>
    </div>

    <div :class="['base-input-wrapper', { 'has-error': errorMessage, 'is-valid': meta.valid }]">
      <input
        :name="name"
        :id="name"
        :type="type"
        :value="inputValue"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
      >

      <i v-if="errorMessage || meta.valid"
        :class="['input-icon', meta.valid ? 'ri-checkbox-circle-fill' : 'ri-error-warning-fill']">
      </i>
    </div>

    <p v-if="errorMessage || meta.valid" class="message" aria-label="input message">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>
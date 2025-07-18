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
  hint: {
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

      <span v-if="hint" class="hint">
        <i class="ri-information-line"></i>
        {{ hint }}
      </span>

      <span
        v-if="type === 'email' && errorMessage === EMAIL_ERROR_MSG"
        class="hint email-hint"
      >
        <i class="ri-information-line"></i>
        Use format: john@example.com
      </span>
    </div>

    <div class="base-input-wrapper">
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
        :class="meta.valid ? 'ri-check-fill' : 'ri-error-warning-fill'">
      </i>
    </div>

    <span v-if="errorMessage || meta.valid" class="message">
      <i v-if="errorMessage || successMessage"
         :class="meta.valid ? 'ri-checkbox-circle-fill' : 'ri-error-warning-fill'">
      </i>

      {{ errorMessage || successMessage }}
    </span>
  </div>
</template>
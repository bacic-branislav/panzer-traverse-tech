<script setup lang="ts">
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { NAVIGATION } from "@/utilities/routes";
import { Form } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth/user";
import { onBeforeMount } from "vue";
import * as yup from 'yup';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const onSubmit = async (values, { resetForm }) => {
  const success = await authStore.login(values);
  if(success) {
    if(route.query.return) await router.push(route.query.return);
    else await router.push(NAVIGATION.downloads);
  } else {
    showError();
    resetForm();
  }
}

onBeforeMount(() => {
  authStore.checkUser();
})

const showError = () => {
  const element = document.querySelector('.error-msg');
  element.classList.toggle('visible');
  setTimeout(() => { element.classList.toggle('visible') }, 5000);
}
</script>

<template>
  <main class="p-auth">
    <section>
      <div class="container">
        <div class="header">
          <h2>Login</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        <BaseButton @click="router.go(-1)">
          <i class="ri-arrow-left-line"></i>
          Back
        </BaseButton>

        <div class="form-wrapper">
          <Form
            @submit="onSubmit"
            v-slot="{ meta }"
            :validation-schema="schema"
          >
            <BaseInput
              field-name="email"
              type="email"
              label="Email address"
            />

            <BaseInput
              field-name="password"
              type="password"
              label="Password"
            />

            <BaseButton
              :disabled="!meta.valid"
              type="submit"
            >
              Sign In
            </BaseButton>
          </Form>

          <p class="error-msg"> User email or password is not correct. Please try again. </p>
        </div>
      </div>
    </section>
  </main>
</template>
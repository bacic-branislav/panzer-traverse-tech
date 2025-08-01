<script setup lang="ts">
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { NAVIGATION } from "@/utilities/routes";
import { Form } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth/user";
import { onBeforeMount, computed } from "vue";
import * as yup from 'yup';
import BaseBack from "@/components/base/BaseBack.vue";

const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const loading = computed(() => authStore.loading);

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

        <BaseBack/>

        <div class="form-wrapper">
          <Form
            @submit="onSubmit"
            v-slot="{ meta }"
            :validation-schema="schema"
          >
            <BaseInput
              field-name="email"
              type="email"
              label="Email"
            />

            <BaseInput
              field-name="password"
              type="password"
              label="Password"
            />

            <BaseButton
              :disabled="!meta.valid"
              type="submit"
              :loading="loading.login"
            >
              Sign in to account
            </BaseButton>
          </Form>

          <p class="error-msg"> User email or password is not correct. Please try again. </p>

          <p>
            Don't have an account?
            <RouterLink :to="NAVIGATION.register" class="strong">
              Get access
              <i class="ri-arrow-right-long-line"></i>
            </RouterLink>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { NAVIGATION } from "@/utilities/routes";
import { Form } from "vee-validate";
import { useAuthStore } from "@/store/auth/user";
import {computed, onBeforeMount} from "vue";
import { useRouter } from "vue-router";
import * as yup from "yup";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseBack from "@/components/base/BaseBack.vue";

const authStore = useAuthStore();
const router = useRouter();

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const onSubmit = async (values, { resetForm }) => {
  console.log(values);
  const success = await authStore.register(values);
  if(success) {
    await router.push(NAVIGATION.downloads);
  } else {
    resetForm();
  }
}

const loading = computed(() => authStore.loading);

onBeforeMount(() => {
  authStore.checkUser();
})
</script>

<template>
  <main class="p-auth">
    <section>
      <div class="container">
        <div class="header">
          <h2>Create an account</h2>
          <p>Join Panzer Controls to download tank-inspired controller models</p>
        </div>

        <BaseBack/>

        <div class="form-wrapper">
          <Form
            @submit="onSubmit"
            v-slot="{ meta }"
            :validation-schema="schema"
          >
            <BaseInput
              field-name="username"
              label="User name"
            />

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
              :loading="loading.register"
            >
              Create account
            </BaseButton>
          </Form>

          <p class="error-msg"> User email or password is not correct. Please try again. </p>

          <p>
            Already have an account?
            <RouterLink :to="NAVIGATION.login" class="strong">
              Sign in
              <i class="ri-arrow-right-long-line"></i>
            </RouterLink>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
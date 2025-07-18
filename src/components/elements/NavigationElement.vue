<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
import { useAuthStore } from "@/store/auth/user";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { NAVIGATION } from "@/utilities/routes";

const authStore = useAuthStore();
const router = useRouter();
const user = computed(() => authStore.user);

const submitLogout = async () => {
  await authStore.logout();
  await router.push(NAVIGATION.home);
}

</script>

<template>
  <nav class="navigation-element">
    <div class="container">
      <RouterLink to="/">
        <img src="@/assets/images/panzer-controls-logo.png" alt="Panzer Controls logo" class="logo">
      </RouterLink>

      <div class="links">
        <RouterLink :to="NAVIGATION.home">Home</RouterLink> |
        <RouterLink :to="NAVIGATION.downloads">Downloads</RouterLink> |
        <RouterLink :to="NAVIGATION.about">About</RouterLink>
      </div>

      <div>
        <template v-if="!user">
          <RouterLink :to="NAVIGATION.login">Login</RouterLink> |
          <RouterLink :to="NAVIGATION.register">Register</RouterLink>
        </template>

        <BaseButton v-else @click="submitLogout">Logout</BaseButton>
      </div>
    </div>
    {{authStore.user}}
  </nav>
</template>
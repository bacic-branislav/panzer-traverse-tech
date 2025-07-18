<script setup lang="ts">
import NavigationElement from '@/components/elements/NavigationElement.vue';
import JumbotronElement from "@/components/elements/JumbotronElement.vue";
import FooterElement from "@/components/elements/FooterElement.vue";
import { useRoute } from 'vue-router';
import { useAuthStore } from "@/store/auth/user";
import { onBeforeMount } from "vue";

const route = useRoute();
const authStore = useAuthStore();

onBeforeMount(() => {
  authStore.checkUser();
})
</script>

<template>
  <NavigationElement/>

  <RouterView/>

  <FooterElement/>
</template>

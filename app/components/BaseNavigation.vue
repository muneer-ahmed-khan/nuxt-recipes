<script setup lang="ts">
import { onMounted, ref } from "vue";

const colorMode = useColorMode();
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true; // Set a flag when mounted on the client
});

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <header
    class="py-4 border-b bg-white dark:bg-slate-800 dark:text-white dark:border-b-slate-800"
  >
    <nav class="flex container items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" src="/icon-green.png" alt="" />
        <span class="text-3xl font-bold">Nuxt Recipes</span>
      </NuxtLink>

      <!-- Navigation Links -->
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>

        <!-- Dark Mode Toggle Button -->
        <li v-if="isMounted && colorMode.preference" class="">
          <button @click="toggleTheme" class="mt-0.5 text-2xl">
            <Icon
              :name="
                colorMode.preference === 'dark'
                  ? 'mdi:white-balance-sunny'
                  : 'fa-regular:moon'
              "
            />
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
button {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
button:hover {
  transform: scale(1.1);
}
</style>

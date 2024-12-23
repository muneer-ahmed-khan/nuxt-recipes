<script setup lang="ts">
import { type RecipeResponse } from "~~/types/types";
const { data, error } = await useFetch<RecipeResponse>(
  "https://dummyjson.com/recipes?limit=12"
);

useSeoMeta({
  title: "Nuxt Recipes",
  description: "Recipes for you to cook!",
  ogTitle: "Nuxt Recipes",
  ogDescription: "Recipes for you to cook!",
  ogImage: "/nuxt-course-hero.png",
  ogUrl: `http:localhost:3000`,
  twitterTitle: "Nuxt Recipes",
  twitterDescription: "Recipes for you to cook!",
  twitterImage: "/nuxt-course-hero.png",
  twitterCard: "summary",
});
</script>

<template>
  <main class="bg-[#f1f1f1] dark:bg-slate-800 dark:text-white">
    <section class="bg-[#f1f1f1] dark:bg-slate-700 dark:text-white">
      <div
        class="container flex flex-col lg:flex-row items-center py-20 gap-10"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>

          <BaseBtn :to="`#browse-recipes`" label="Browse Recipes" />
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            src="/nuxt-course-hero.png"
            densities="1x"
            sizes="xs:100vw  sm:667px"
            format="webp"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="py-20 container" id="browse-recipes">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
      <div
        v-if="!error"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
      >
        <RecipeCard v-for="recipe in data?.recipes" :recipe="recipe" />
      </div>
      <p v-else class="text-xl">
        Oops, something went wrong. Please try again later
      </p>
    </section>
  </main>
</template>

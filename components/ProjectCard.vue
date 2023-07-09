<script setup>
const { project } = defineProps(['project'])
</script>

<template>
  <div>
    <div class="block group">
      <figure
        class="w-full p-4 border-2 border-gray-900 h-48 grid place-content-center rounded-lg bg-white transition ease-[cubic-bezier(0.4, 0, 0.25, 1)] group-hover:bg-stone-100">
        <img :src="project.logo" alt=""
             class="group-hover:transform group-hover:scale-105 transition ease-[cubic-bezier(0.4, 0, 0.25, 1)]">
      </figure>
      <div class="mt-3">
        <h3 class="font-medium">{{ project.name }}</h3>
        <a href="" target="_blank"
           class="mt-1.5 block truncate text-sm text-gray-600 hover:underline">{{ project.url }}</a>
        <p class="mt-3 text-base leading-relaxed">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
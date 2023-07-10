<script setup>
const { project } = defineProps(['project'])
</script>

<template>
  <div>
    <nuxt-link :to="`/projects/${project.id}/${project.slug}`" class="block group">
      <figure
        class="w-full p-4 border-2 border-gray-900 h-48 grid place-content-center rounded-lg bg-white transition ease-[cubic-bezier(0.4, 0, 0.25, 1)] group-hover:bg-stone-100">
        <img :src="project.logo" alt=""
             class="group-hover:transform group-hover:scale-105 transition ease-[cubic-bezier(0.4, 0, 0.25, 1)]">
      </figure>
      <div class="mt-3">
        <h3 class="font-medium">{{ project.name }}</h3>
        <div class="mt-1.5 block truncate text-sm text-gray-600">{{ project.url }}</div>
        <p class="mt-3 text-base leading-relaxed">
          {{ project.description }}
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          <div v-for="tag in project.tags"
          class="py-0.5 px-1.5 border border-gray-900 text-xs rounded-full">
            #{{tag}}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>

</style>

<script setup>
const {data: skills} = await useFetch('/skills.json');
const {data: projects} = await useFetch('/projects.json');
</script>

<template>
  <Hero/>

  <div class="mt-8 md:mt-0 flex items-center justify-center flex-wrap gap-6">
    <small>I have experience working with</small>
    <div class="flex items-center flex-wrap gap-6 justify-center">
      <a :href="skill.url" target="_blank" v-for="skill in skills" :key="skill.name">
        <figure
          class="w-10 h-10 drop-shadow transform hover:-translate-y-1 transition-all ease-[cubic-bezier(0.4, 0, 0.25, 1)]">
          <img :src="skill.icon" :alt="skill.name">
        </figure>
      </a>
    </div>
    <small>and more are coming...</small>
  </div>

  <div class="relative py-12 lg:pt-8 lg:pb-24 lg:mt-8" id="projects">
    <div class="mb-8">
      <h4 class="font-medium">Projects</h4>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"/>
    </div>
  </div>

</template>

<style scoped>

</style>

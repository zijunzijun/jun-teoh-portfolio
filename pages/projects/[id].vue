<script setup>
const {id} = useRoute().params;
const {data: projects} = await useFetch('/projects.json', {key: id});
const project = projects.value.find(project => String(project.id) === id);
</script>

<template>
  <div class="py-12 space-y-12">
    <div class="flex items-center justify-between">
      <h1 class="font-bold">{{ project.name }}</h1>
      <figure>
        <img :src="project.logo" alt="">
      </figure>
    </div>

    <div class="">
      <div class="relative rounded-lg md:rounded-xl overflow-hidden border-2 md:border-4 border-gray-900">
        <div
          class="w-full flex items-center justify-start space-x-1 md:space-x-2 h-6 md:h-10 px-2 md:px-3 z-10 bg-gray-900">
          <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400 hover:bg-red-500"></span>
          <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400 hover:bg-yellow-500"></span>
          <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400 hover:bg-green-500"></span>
        </div>
        <div class="w-full py-1 md:py-1.5 px-2 md:px-3 bg-gray-800 bg-opacity-95 border-b border-gray-900">
          <div class="group/url w-full flex items-center justify-between transition-all
          bg-gray-100 hover:bg-gray-200
          py-1 md:py-1.5 px-2.5 md:px-4 rounded-full
          text-sm md:text-base leading-none">
            <NuxtLink :to="project.url" target="_blank" rel="noopener" class="flex-grow truncate">
              {{ project.url }}
            </NuxtLink>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="w-5 h-5 md:w-6 md:h-6 lg:transform lg:-translate-x-1 lg:opacity-0 lg:transition-all
                 group-hover/url:translate-x-0 group-hover/url:opacity-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
            </svg>
          </div>
        </div>
        <div
          class="bg-gray-200 lg:py-5 overflow-hidden">
          <Swiper
            :modules="[SwiperAutoplay]"
            :breakpoints="{
              640:{ slidesPerView: 1 },
              1024:{ slidesPerView: 1.2 }
              }"
            :centered-slides="true"
            :space-between="20"
            :loop="true"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide v-for="image in project.images" :key="image.id">
              <div class="lg:rounded-md lg:overflow-hidden cursor-grab lg:ring-1 lg:ring-slate-900/5">
                <img class="block" :src="image.url" alt="">
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="max-w-screen-sm mx-auto space-y-8">
      <p class="text-xl leading-9 md:text-2xl md:leading-10">{{ project.description }}</p>
      <div>
        <h4 class="font-medium">Responsibilities</h4>
        <ul class="mt-4 list-disc ml-6 space-y-4">
          <li v-for="item in project.responsibilities">
            <p class="leading-9" v-html="item"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
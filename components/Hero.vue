<script setup lang="ts">
const heroText = `Over <strong>5 years of experience</strong> in <strong>front-end development</strong> and UI/UX design, excel at tackling difficult challenges and creating exceptional user experiences, translating into successful software solutions that align with project goals.<br><br>
          Self-taught developer with proven ability to pick up new skillsets and knowledge. Contributor to Google Developer Group (GDG) George Town.`;
const typedText = ref('');
const speed = 30;
let index = 0;

const typeWriter = () => {
  if (index <= heroText.length) {
    typedText.value = heroText.slice(0, index + 1);
    index++;
    setTimeout(typeWriter, speed);
  }
};

onMounted(() => {
  typeWriter();
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 place-content-center md:py-12 lg:min-h-[80vh]">
    <div class="relative z-10 flex items-center py-6">
      <div class="md:pr-12 lg:pr-20">
        <h1 class="font-medium leading-tight">Hello,<br>
          I am <strong>Jun Teoh</strong>.</h1>
        <p class="lg:text-xl lg:leading-8 text-gray-600 mt-4">
          A frontend developer who is passionate about <span class="whitespace-nowrap">‍🧑‍💻 coding</span>, <span class="whitespace-nowrap">🎨 design</span>. Also, I am learning <span class="whitespace-nowrap">🇯🇵 Japanese</span> and trying to get better at it.
        </p>
        <a href=""
           class="mt-6 inline-flex items-center justify-center rounded-full py-3.5 px-4 text-lg font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-cyan-400 text-white hover:text-cyan-50 hover:bg-cyan-500 active:bg-cyan-600 active:text-cyan-100">
          View Projects
        </a>
      </div>
    </div>
    <div class="order-first md:order-2 relative">
      <div class="absolute -top-[15%] -left-[10%] w-[70%] md:w-[60%] lg:w-[80%] mix-blend-multiply filter blur-2xl opacity-50 animate-blob">
        <div class="w-full pt-[100%] rounded-full bg-cyan-400"></div>
      </div>

      <div
        class="absolute -top-[10%] -right-[5%] w-[50%] mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000">
        <div class="w-full pt-[100%] rounded-full bg-purple-300"></div>
      </div>

      <div
        class="absolute -bottom-[15%] -right-[10%] w-[50%] mix-blend-multiply filter blur-xl opacity-50 animate-blob">
        <div class="w-full pt-[100%] rounded-full bg-teal-300"></div>
      </div>

      <div
        class="absolute -bottom-[15%] -left-[5%] w-[50%] mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000">
        <div class="w-full pt-[100%] rounded-full bg-lime-200"></div>
      </div>

      <div class="relative rounded-lg overflow-hidden border-2 border-gray-900">
        <div
          class="w-full flex items-center justify-start h-6 md:h-8 px-2 md:px-3 space-x-1 md:space-x-2 z-10 bg-gray-900">
          <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400 hover:bg-red-500"></span>
          <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400 hover:bg-yellow-500"></span>
          <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400 hover:bg-green-500"></span>
        </div>
        <div ref="heroText" id="heroText"
             class="min-h-[240px] lg:min-h-[360px] bg-gray-50 font-mono lg:text-lg !leading-7 !md:leading-8 text-gray-700 break-words pt-3 pb-5 px-4 lg:pt-5 custom-scrollbar-y selection:bg-yellow-400 selection:text-sky-600"
             v-html="typedText">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

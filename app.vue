<template>
  <div class="flex justify-center bg-background font-zed">
    <div class="flex min-h-screen w-screen max-w-[60rem] flex-col items-center px-6 pb-10 pt-7 text-[0.92rem] leading-relaxed sm:px-10 lg:px-10">
      <!-- <Header></Header> -->
      <NuxtPage />
      <Footer></Footer>
    </div>
  </div>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class: 'dark'
  }
})
</script>

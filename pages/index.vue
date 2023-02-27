<script setup lang="ts">
  const config = useRuntimeConfig();
  const images = ref([
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'
  ])
</script>

<template>
  <div>
    <p>This images works only locally. On netlify image source is:</p>
      <pre class="bg-gray-800 p-4 my-4 rounded text-white">
        e.g. src="/_ipx/_/images/1.jpg"
      </pre>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
      <div
      v-for="image in images"
      >
        <nuxt-img
          :src="`/images/${image}`"
          loading="lazy"
        />
      </div>
    </div>
    <hr class="mt-4">
    <h2 class="text-xl mt-8">Workaround</h2>
    <p>This images works locally and on netlify but requre to set environment variable IMAGES_URL set to: '../..'. On netlify image source is:</p>
      <pre class="bg-gray-800 p-4 my-4 rounded text-white">
        e.g. src="/_ipx/_/../../images/1.jpg"
      </pre>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
      <div
      v-for="image in images"
      >
        <nuxt-img
          :src="`${config.imagesUrl}/images/${image}`"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

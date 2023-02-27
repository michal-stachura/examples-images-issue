<script setup lang="ts">
  const images = ref([
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'
  ])
</script>

<template>
  <div>
    <h1>Homepage</h1>
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
  </div>
</template>

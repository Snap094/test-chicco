<template>
  <div class="container">
    <h1 class="typography_hero">{{ $route.name }}</h1>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'second',
})
</script>
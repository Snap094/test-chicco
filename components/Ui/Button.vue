<template>
  <nuxt-link v-if="$slots.link" :to="props.to" class="button typography_button">
    <slot name="link"></slot>
  </nuxt-link>
  <button class="button typography_button" v-else>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string
}>(),{to: ''})
</script>

<style lang="scss">
@import "~/assets/styles/button";
</style>
<template>
  <div class="products-page">
    <div class="container">
      <h1 class="products-page__title ">{{ $route.name}}</h1>
      <ProductsList :products="PRODUCTS"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PRODUCTS} from "~/utils/products";

definePageMeta({
  layout: 'second',
})
</script>

<style lang="scss" scoped>
.products-page {
  &__title {
    text-transform: capitalize;
    margin-bottom: 30px;

    @include typography_hero
  }
}
</style>
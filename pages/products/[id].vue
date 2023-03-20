<template>
  <div class="product-page">
    <div class="container">
      <h1 class="typography_hero">{{ product.title }}</h1>
      <div class="product-page__inner">
        <div class="product-page__image">
          <img class="product-page__image-img" :src="product.image" :alt="product.title">
        </div>
        <div class="product-page__description">
          <p class="typography_subtitle">Description:</p>
          <p class="product-page__about typography_subtitle">{{ product.subtitle }}</p>
          <p class="typography_subtitle">Price:</p>
          <p class="product-page__price typography_subtitle">${{ product.price }}</p>
        </div>
      </div>
      <UiButton class="product-page__button" to="/products" #link>Go to Products</UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PRODUCTS } from "~/utils/products";
import {Product} from "~/utils/interfaces/Product";

const route = useRoute()
const productId = computed<number>(() => +route.params.id)
const product = computed<Product>(() => PRODUCTS[productId.value])
definePageMeta({
  layout: 'second'
})
</script>

<style lang="scss" scoped>
.product-page {
  &__button {
    display: inline-flex;
  }

  &__image{
    min-width: 200px;
    &-img {
      width: 100%;
    }
  }

  &__inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    border-radius: 30px;
    padding: 30px;
    background-color: $cl_blue-100;
    margin: 30px 0;

    @include media-md {
      flex-wrap: nowrap;
    }

    @include media-lg {
      gap: 100px;
    }
  }

  &__description {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: max-content;
    column-gap: 30px;
    row-gap: 30px;
    align-content: center;
  }
}
</style>
<template>
  <NuxtLink :to="`/products/${props.index}`" class="product">
    <div class="product__image">
      <img class="product__image-img" :src="props.product.image" alt="">
    </div>
    <div class="product__about">
      <p class="product__about-title">{{ props.product.title }}</p>
      <p class="product__about-subtitle">{{ props.product.subtitle }}</p>
      <p class="product__about-price">${{ props.product.price }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import {Product} from "~/utils/interfaces/Product";

const props = defineProps<{
  product: Product
  index: number
}>()

</script>

<style lang="scss" scoped>
  .product {
    width: 237px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    border-radius: 16px;
    transition: .7s all ease;
    box-shadow: 0 0 0 0 #0000000f;
    transform: scale(1);

    &:hover {
      box-shadow: 0 0 10px 10px #0000000f;
      transform: scale(0.95);
    }

    @include media-md {
      width: 416px;
      padding: 60px 40px;
    }


    &__about {
      color: $cl_green-200;

      &-title {
        @include typography_product-title;
        margin-bottom: 12px;
      }

      &-subtitle {
        @include typography_product-about;
        margin-bottom: 16px;

        @include media-md {
          margin-bottom: 25px;
        }
      }

      &-price {
        @include typography_product-price
      }
    }

    &__image {
      width: 100%;
      position: relative;
      padding-bottom: 70%;

      @include media-md {
        padding-bottom: 87.5%;
      }

      &-img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
      }
    }
  }
</style>
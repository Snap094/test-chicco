<template>
  <GSCarousel
      :items="props.products"
      :items-to-show="1"
      :layout="ProductsSliderLayout"
      :layout-props="{
      disableArrows: false,
      disableCounter: true
    }"
  >
    <template #item="{ data, index }">
      <ProductsProduct class="slider__product" :index="index" :product="data"/>
    </template>
  </GSCarousel>
</template>

<script setup lang="ts">
import {GSCarousel} from 'gitart-scroll-carousel'
import { default as ProductsSliderLayout } from './Layout.vue'
import {Product} from "~/utils/interfaces/Product";

const props = defineProps<{
  products: Product[]
}>()

</script>

<style lang="scss">
//GSCarousel classes
.gsc-indicator {
  &__track {
    background-color: $cl_green-100!important;
  }
  &__bar {
    background-color: $cl_green-200!important;
    height: 12px!important;
    border-radius: 0!important;
  }
}

//GSCarousel classes
.gsc-track {
  width: 100vw;
  padding-left: 20px;

  &__inner {
    gap: 32px;
  }

  &__item {
    flex-shrink: 1;
    display: flex;
    padding: 0;
    @include media-xl {
      width: calc((100% - 120px) / 3)!important;
    }
    &:nth-child(4n+1) {
      & .slider__product {
        background-color: $cl_green-300;
      }
    }
    &:nth-child(4n+2) {
      & .slider__product {
        background-color: $cl_blue-100;
      }
    }
    &:nth-child(4n+3) {
      & .slider__product {
        background-color: $cl_pink-200;
      }
    }
    &:nth-child(4n+4) {
      & .slider__product {
        background-color: $cl_yellow-100;
      }
    }
    &:last-child {
      & .slider__product {
        min-width: 236px;
        @include media-md {
          min-width: 416px;
        }
      }

      &:after {
        content: '';
        position: relative;
        display: block;
        min-width: 200px;
        height: 100px;
      }
    }
  }
}
</style>
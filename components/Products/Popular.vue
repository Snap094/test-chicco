<template>
  <section class="popular-products">
    <div class="container">
      <div class="popular-products__inner">
        <h2 class="popular-products__title typography_hero">Popular Products</h2>
        <ProductsSlider v-if="!isLoadAllProducts" :products="PRODUCTS"/>
        <transition name="fade">
          <ProductsList v-if="isLoadAllProducts" :products="PRODUCTS"/>
        </transition>
        <UiButton @click="isLoadAllProducts = !isLoadAllProducts" v-if="!isLoadAllProducts"
                  class="popular-products__button">
          Explore all items
          <IconArrow class="popular-products__button-arrow"/>
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { PRODUCTS } from "~/utils/products";

const isLoadAllProducts = ref<boolean>(false)
</script>

<style lang="scss">
.popular-products {
  overflow: hidden;
  padding-bottom: 100px;
  position: relative;

  &__button {
    margin: 60px auto 0;

    @include media-md {
      margin: 100px auto 0;
    }

    @include media-lg {
      margin: 54px auto 0;
    }

    &-arrow {
      width: 21px;
      height: 21px;

      path {
        fill: $cl_white-100
      }

      transform: rotate(180deg);
    }
  }

  &:after {
    content: url("/chair-bg.png");
    z-index: -1;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-40%, -53%) scale(0.2);

    @include media-md {
      transform: translate(-29%, -54%) scale(0.43);
    }

    @include media-lg {
      transform: translate(-26%, -50%) scale(0.48);
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    color: $cl_green-100;

    @include media-md {
      margin-bottom: 100px;
    }

    @include media-lg {
      margin-bottom: 58px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.4s;

  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
}
</style>
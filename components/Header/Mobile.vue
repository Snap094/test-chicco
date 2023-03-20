<template>
  <transition name="fade">
  <div class="header-mobile" v-show="props.open" >
      <nav class="header-mobile__nav">
        <nuxt-link to="/" @click="closeModal" class="header-mobile__nav-link">Home</nuxt-link>
        <nuxt-link to="/products" @click="closeModal" class="header-mobile__nav-link">Products</nuxt-link>
        <nuxt-link to="" @click="closeModal" class="header-mobile__nav-link">Categories</nuxt-link>
        <nuxt-link to="/about" @click="closeModal" class="header-mobile__nav-link">About</nuxt-link>
        <nuxt-link to="" @click="closeModal" class="header-mobile__nav-link">Contact Us</nuxt-link>
      </nav>
  </div>
  </transition>
</template>

<script setup lang="ts">
import {watch} from "vue";

const props = withDefaults(defineProps<{
  open: boolean
}>(), {open: false})

const emits = defineEmits<{
  (e:'close'): void;
}>()

watch(() => props.open, (val: boolean): void => {
  if (val) {
    //@ts-ignore
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    //@ts-ignore
    document.querySelector('body').style.overflow = 'auto'
  }
})

const closeModal = function (): void {
  emits('close')
}

</script>

<style lang="scss" scoped>
  .header-mobile {
    z-index: 300;
    top: 100px;
    position: absolute;
    width: 100%;
    height: calc(100vh - 100px);
    background-color: $cl-green-200;
    padding: 30px 20px;

    &__nav {
      display: flex;
      flex-direction: column;
      gap: 15px;

      &-link {
        @include typography_link;

        &:hover {
          color: $cl_white-200;
        }

        &.router-link-active {
          color: $cl_white-200;
        }
      }

    }
  }

  .fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

</style>
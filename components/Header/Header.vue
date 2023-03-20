<template>
  <header class="header">
    <div class="header__inner">
      <IconBurger class="header__burger"
                  :class="isOpenMenu ? 'open' : ''"
                  @click="isOpenMenu = !isOpenMenu"

      />
      <nuxt-link to="/" class="header__logo">
        <img class="header__logo-img" src="/logo.png" alt="logo Inwood">
      </nuxt-link>
      <nav class="header__nav">
        <nuxt-link to="/" class="header__nav-link">Home</nuxt-link>
        <nuxt-link to="/products" class="header__nav-link">Products</nuxt-link>
        <nuxt-link to="" class="header__nav-link">Categories</nuxt-link>
        <nuxt-link to="/about" class="header__nav-link">About</nuxt-link>
        <nuxt-link to="" class="header__nav-link">Contact Us</nuxt-link>
      </nav>
      <div class="header__actions">
        <nuxt-link class="header__actions-link">
          <IconSearch/>
        </nuxt-link>
        <nuxt-link class="header__actions-link">
          <IconBasket/>
        </nuxt-link>
        <nuxt-link class="header__actions-link">
          <IconUser/>
        </nuxt-link>
      </div>
    </div>
  </header>
  <HeaderMobile :open="isOpenMenu" @close="isOpenMenu = !isOpenMenu"/>
</template>

<script setup lang="ts">
import {ref} from "vue";

const isOpenMenu = ref<boolean>(false);

</script>

<style lang="scss">
.header {
  z-index: 100;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(224, 246, 241, 0.5);
  display: flex;
  align-items: center;
  padding: 0 16px 12px 16px;

  &__actions {
    order: 4;
    display: flex;
    gap: 12px;

    @include media-md {
      gap: 58px;
    }

    &-link {
      svg {
        path {
          transition: all .3s ease;
        }
      }

      &:hover {
        cursor: pointer;

        svg {
          path {
            fill: $cl-green-200;
          }
        }
      }
    }
  }

  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    order: 1;
    width: 144px;
    height: 36px;
    transition: all .3s ease;

    @include media-md {
      order: 0;
    }

    &:hover {
      opacity: 0.7;
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__burger {
    order: 0;

    @include media-md {
      order: 1;
    }

    @include media-lg {
      display: none;
    }

    path {
      transition: all .3s ease;
    }

    &:hover {
      cursor: pointer;

      path {
        fill: $cl_green-200;
      }
    }
  }

  &__nav {
    order: 3;
    display: none;

    @include media-lg {
      display: flex;
      gap: 48px;
    }

    &-link {
      @include typography_link;
    }

    & .router-link-active {
      font-weight: 700;
      position: relative;

      &:before {
        content: '';
        display: block;
        position: absolute;
        bottom: -2px;
        background-color: $cl_green-100;
        width: 100%;
        height: 3px;
      }
    }
  }
}

</style>
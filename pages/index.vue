<template>
  <main class="main">
    <div class="container">
      <div class="main__inner">
        <h1 class="main__title typography_hero">Exclusive Deals of <br>Furniture Collection</h1>
        <p class="main__subtitle typography_subtitle">Explore different categories. Find the best deals.</p>
        <UiButton #link :to="'/products'">
          Shop Now
        </UiButton>
      </div>
      <div class="test">
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
        <div class="test__item">blo</div>
      </div>
    </div>
  </main>
  <ProductsPopular/>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
.main {
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: url("/main.png") 20% 100% / cover no-repeat;

  @include media-md {
    background-position: 50% 100%;
    border: 1px solid $cl_black;

  }

  &__title {
    margin-bottom: 16px;

    @include media-lg {
      margin-bottom: 54px;
    }
  }

  &__subtitle {
    margin-bottom: 52px;
    max-width: 287px;

    @include media-md {
      max-width: none;
    }

    @include media-lg {
      margin-bottom: 54px;
    }
  }

  &__inner {
    padding: 20px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include media-md {
      align-items: flex-start;
    }

    & > *:not(.button) {
      text-align: center;
      color: $cl_green-100;

      @include media-md {
        text-align: left;
      }
    }
  }
}
.test {
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #ffffff;
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #1b4f94;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #ffffff;
  }


  &__item {
    flex-basis: 400px;
    flex-shrink: 0;
    width: 300px;
    height: 300px;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
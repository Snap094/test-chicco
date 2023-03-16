<template>
  <main class="main">
    <div class="container">
      <div class="main__inner">
        <div class="main__benefits">
          <h2 class="typography_head4 typography_text-center">Тим, хто нагоняє Траф</h2>
          <div class="main__benefits-items">
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
        <div class="main__about">
          <div class="main__title">
            <img class="main__img" src="/head.png" alt="rock-head">
            <h1 class="typography_head3 typography_cl-gray-200 typography_text-center">
              Володарі трафіку
            </h1>
            <img class="main__img main__img_second" src="/head.png" alt="rock-head">
          </div>
          <p class="typography_caption-text typography_cl-gray-500 typography_text-center">
            SC Partners – нова партнерська мережа з величезним досвідом та експертизою. Кожен наш партнер отримує
            очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід. Ми будемо поряд з вами: на відстані
            одного повідомлення в месенджері або дзвінка, адже ми працюємо поряд з вами.
          </p>
          <NuxtLink class="button button_primary button_small" to="/about">About</NuxtLink>
          <UiButton @click="isOpenLogin = true" class="button_small button_primary">Вхід</UiButton>
          <UiModal :open="isOpenLogin" @close="isOpenLogin = !isOpenLogin">
            <p>asfsafas</p>
            <p>asfsafas</p>
            <p>asfsafas</p>
            <p>asfsafas</p>
          </UiModal>
          <div class="main__stars">
            <img src="/star.svg" alt="star">
            <img src="/star.svg" alt="star">
            <img src="/star.svg" alt="star">
            <img src="/star.svg" alt="star">
            <img src="/star.svg" alt="star">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from "vue";

const isOpenLogin = ref(false);
</script>

<style lang="scss" scoped>
.main {
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;


  &:before {
    content: '';
    position: fixed;
    opacity: 0.3;
    background: url("/centauri.png") center / 100% 100% no-repeat;
    left: 0;
    bottom: 0;
    transform: translate(-20vw, 20vh) scale(1.2);
    width: 50vw;
    height: 50vh;

  }

  &:after {
    content: '';
    position: fixed;
    background: url("/centauri.png") center / 100% 100% no-repeat;
    right: 0;
    height: 50%;
    transform: translateX(30vw) scale(1.2);
    width: 60vw;
    opacity: 0.3;
    top: 93px;

  }

  &__inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 50px;
  }

  &__about {
    display: flex;
    row-gap: 25px;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 2;
    max-width: 900px;
    width: 100%;
    border-radius: 24px;
    padding: 25px;
    background: rgba(35, 38, 47, 0.5);
    background-image: url("/graph.png");
    background-position: center;
    background-size: 100% 183px;
    background-repeat: no-repeat;
  }

  &__benefits {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    width: 100%;


    &-items {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      gap: 25px;


    }
  }

  &__title {
    display: flex;
    gap: 10px;


  }

  &__img {
    height: 25px;

    &_second {
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

  }

  &__stars {
    display: flex;
    column-gap: 25px;
  }

}
</style>
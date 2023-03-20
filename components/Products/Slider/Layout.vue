<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductsSliderLayout',
  props: {
    onMove: {
      type: Function as PropType<(to: number) => void>,
      required: true,
    },
    disabledSide: {
      type: String as PropType<'left' | 'right' | 'none'>,
      required: true,
    },
    currentItem: {
      type: Number,
      required: true,
    },
    items: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
})
</script>

<template>
  <div class="slider-layout">
    <slot name="track" />
    <div class="slider-layout__header">
      <div class="slider-layout__indicator">
        <slot name="indicator" />
      </div>
    </div>
    <div class="slider-layout__arrows">
      <div class="slider-layout__arrow slider-layout__arrow_left" @click="onMove(-1)">
        <IconArrow class="slider-layout__arrow-icon"/>
      </div>
      <div class="slider-layout__arrow slider-layout__arrow_right" @click="onMove(1)">
        <IconArrow class="slider-layout__arrow-icon"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" >
.slider-layout {
  &__header {
    margin-top: 60px;

    @include media-md {
      margin-top: 100px;
    }

    @include media-lg {
      margin-top: 54px;
    }
  }

  &__arrows {
    gap: 24px;
    display: none;

    @include media-lg {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }

    &_left {
      background-color: $cl_blue-100;
    }

    &_right {
      background-color: $cl_pink-100;

      & .slider-layout__arrow-icon {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
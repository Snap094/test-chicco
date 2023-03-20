<template>
  <div class="list-products">
    <ProductsProduct class="list-products__product"
                     :product="product"
                     :index="index"
                     v-for="(product, index) in props.products"
                     :key="index"/>
  </div>
</template>
<script setup lang="ts">
import {Product} from "~/utils/interfaces/Product";

const props = defineProps<{
  products: Product[]
}>()

</script>

<style lang="scss" scoped>
.list-products {
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  &__product {
    &:nth-child(4n+1) {
      background-color: $cl_green-300;
    }

    &:nth-child(4n+2) {
      background-color: $cl_blue-100;
    }

    &:nth-child(4n+3) {
      background-color: $cl_pink-200;
    }

    &:nth-child(4n+4) {
      background-color: $cl_yellow-100;
    }
  }
}
</style>
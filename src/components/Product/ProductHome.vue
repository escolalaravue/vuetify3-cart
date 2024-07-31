<template>
  <ProductLoading v-if="isLoading" />
  <ProductEmpty v-else-if="!products.length" />
  <ProductsList
    :products="products"
  />
</template>

<script setup>
import { useAsyncState } from '@vueuse/core';
import axios from 'axios';
import ProductEmpty from '@/components/Product/ProductEmpty.vue';
import ProductLoading from '@/components/Product/ProductLoading.vue';
import ProductsList from '@/components/Product/ProductsList.vue';

const { state: products, isLoading } = useAsyncState(
  axios
    .get('/products.json')
    .then(t => t.data),
  [],
)
</script>

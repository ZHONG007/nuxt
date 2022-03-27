<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
    <div style="text-align: center">
    <h1>试试按钮样dsds式</h1>
    <van-button type="primary" @click="updateInput">主要按钮</van-button>
  </div>
</template>

<script setup>
definePageMeta({
  title: "My home page",
});
</script>

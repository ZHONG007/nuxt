<template>
  <div style="text-align: center">
    <h1>试试按钮样式</h1>
    <van-button type="primary" @click="updateInput">主要按钮</van-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
function updateInput() {
  console.log('6666');
}
</script>

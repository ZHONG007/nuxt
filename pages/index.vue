<template>
  <NuxtLayout name="default">
    <h1>index</h1>
    <van-card
      num="2"
      tag="Tag"
      price="2.00"
      title="Title"
      desc="Description"
      origin-price="10.00"
      thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    />
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  layout: false,
});
</script>

<script lang="ts" setup>
import { ref, inject, onMounted } from "vue";
const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
onMounted(() => {
  console.log("mounted index");
});
</script>

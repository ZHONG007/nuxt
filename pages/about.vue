<template>
  <NuxtLayout name="default">
    <p>My layout test!</p>
    {{ user }}
    <div>
      <h1>试试按钮样式</h1>
      <Button label="Submit" />
      <van-button type="primary">主要按钮</van-button>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <van-button type="primary">主要按钮</van-button>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">Tab</van-tabbar-item>
        <van-tabbar-item icon="search">Tab</van-tabbar-item>
        <van-tabbar-item icon="friends-o">Tab</van-tabbar-item>
        <van-tabbar-item icon="setting-o">Tab</van-tabbar-item>
      </van-tabbar>
      6666666666
    </div>
    <button @click="changeit">change</button>
  </NuxtLayout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  layout: false,
});
</script>

<script setup>
import { ref, inject, onMounted } from "vue";
const active = ref(0);
const user = inject("key");
const router = useRouter();
const name = ref("");
const type = ref(1);
function changeit() {
  user.name = "dehua";
  user.age++;
}

function navigate() {
  return navigateTo({
    path: "/",
  });
}
onMounted(() => {
  console.log("mounted about");
  console.log(user);
});
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>

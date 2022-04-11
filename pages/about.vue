<template>
  <NuxtLayout name="default">
    <p>My layout test!</p>
    {{ user }}
    <div style="text-align: center">
      <h1>试试按钮样式</h1>
      <van-button type="primary">主要按钮</van-button>
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

<template>
  <NuxtLayout name="default">
    <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
    {{ user }}
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
function changeit(){
  user.name = "dehua";
  user.age++;
}

onMounted(() => {
  console.log("mounted about");
  console.log(user);
});
</script>

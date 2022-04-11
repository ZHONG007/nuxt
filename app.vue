<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->

    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();

if (route.params.group === "admins" && !route.params.id) {
  console.log("Warning! Make sure user is authenticated!");
}
const user = reactive({
  name: "zw",
  age: 34,
});
provide("key", user);
function changeit() {
  user.name = "dehua";
  console.log(user.name);
}
onMounted(() => {
  console.log("app Mounted!");
});
</script>
<style></style>

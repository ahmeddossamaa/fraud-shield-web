<template>
  <div id="app">
    <!-- <h1>Vue Firebase Google Auth</h1> -->
    <RouterView/>
  </div>
</template>

<script>
import GoogleAuth from "@/components/GoogleAuth.vue";

export default {
  components: {
    GoogleAuth,
  },
};
</script>

<style>

body{
  padding: 0;
  margin: 0;
}
</style>
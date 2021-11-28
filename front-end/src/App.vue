<template>
<div id="app">
  <div class="container mt-4" style="margin-bottom: 60px;">
    <router-view />
  </div>
  <footer class="text-center fixed-bottom">
    <div class="text-center p-3">
      <router-link :to="'/'" class="text-light">Home</router-link>
      <router-link :to="'/about'" class="text-light mx-4">Methodology</router-link> 
      <a class="text-light" href="https://github.com/jacob-hart/dark-directory">Source</a>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
footer {
  background-color: #212529;
}

body {
  background-color: #212529;
}
</style>


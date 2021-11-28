<template>
<div id="app">
  <div class="container mt-4" style="margin-bottom: 60px;">
    <router-view />
  </div>
  <footer class="text-center fixed-bottom">
    <div class="text-center p-3">
      <router-link :to="'/'" class="text-light mr-4">Home</router-link>
      <router-link :to="'/about'" class="text-light mr-4">Methodology</router-link>
      <router-link :to="'/admin'" class="text-light mr-4">Admin</router-link> 
      <a class="text-light" href="https://github.com/jacob-hart/crud-dark-directory">Source</a>
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


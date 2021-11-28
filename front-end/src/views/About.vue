<template>
<div>
  <h3 class="text-light text-center mb-4 mt-3">Methodology</h3>
  <h5 class="mb-2 text-success btn nohover btn-lg btn-outline-success py-1 px-2">Yes!</h5>
  <br>
  <p class="text-light">Product has a complete built-in dark theme.</p>
  <h5 class="mb-2 mt-2 text-warning btn nohover btn-lg btn-outline-warning py-1 px-2">Yes, but...</h5>
  <br>
  <p class="text-light">Product has a built-in dark theme, but some elements are not themed.</p>
  <h5 class="mb-2 mt-2 text-danger btn nohover btn-lg btn-outline-danger py-1 px-2">No.</h5>
  <br>
  <p class="text-light">Product has no built-in dark theme.</p>
</div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
  .btn.nohover:hover {
    background-color: #212529;
    cursor:default !important;
  }
</style>
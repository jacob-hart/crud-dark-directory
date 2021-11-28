<template>
<div>
  <h3 class="text-light text-center mb-4 mt-3">Admin</h3>
  <h4 class="mt-3 text-light font-weight-normal">Name</h4>
  <input class="form-control form-control bg-dark text-light border-muted"/>
  <h4 class="mt-3 text-light font-weight-normal">Dark?</h4>
  <input class="form-control form-control bg-dark text-light border-muted"/>
  <h4 class="mt-3 text-light font-weight-normal">Context</h4>
  <input class="form-control form-control bg-dark text-light border-muted"/>
  <h5 class="mt-3 btn nohover btn-lg btn-outline-success py-1 px-2">Add Item</h5>
</div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
  .form-control:focus {
        border-color: #ced4da;
        box-shadow: 0 0 0.25rem 0.25rem rgba(255, 255, 255, 0.25);
  }
</style>
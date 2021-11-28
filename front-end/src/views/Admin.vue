<template>
<div>
  <h3 class="text-light text-center mb-4 mt-3">Admin</h3>
    <div class="d-flex justify-content-center">
      <div class="col-6">
        <label class="mt-3 text-light font-weight-normal">Name</label>
        <input class="form-control bg-dark text-light border-light"/>
        <label class="mt-3 text-light font-weight-normal">Dark?</label>
        <select class="form-control bg-dark text-light border-light" name="dark">
          <option value="0">Yes!</option>
          <option value="1">Yes, but...</option>
          <option value="2">No</option>
        </select>
        <label class="mt-3 text-light font-weight-normal">Context</label>
        <textarea class="form-control bg-dark text-light border-light"/>
        <button id="submit" class="mt-4 btn btn-lg text-light border-light py-1 px-2">Add Item</button>
      </div>
    </div>
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
  #submit:hover {
    background-color: #343a40;
    border-color: #ced4da;
    box-shadow: 0 0 0.25rem 0.25rem rgba(255, 255, 255, 0.25);
  }
</style>
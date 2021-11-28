<template>
<div>
  <h3 class="text-light text-center mb-4 mt-3">Add a product</h3>
    <div class="row justify-content-center">
      <div class="col-6">
        <label class="text-light font-weight-normal">Product name</label>
        <input v-model="name" placeholder="Enter the product's name" class="form-control bg-dark text-light border-light"/>
        <label class="mt-3 text-light font-weight-normal">Does it have a dark theme?</label>
        <select v-model="dark" class="form-control bg-dark text-light border-light" name="dark">
          <option value="0">Yes!</option>
          <option value="1">Yes, but...</option>
          <option value="2">No</option>
        </select>
        <label class="mt-3 text-light font-weight-normal">Context</label>
        <textarea v-model="context" placeholder="Enter a description" rows="3" class="form-control bg-dark text-light border-light"/>
        <button @click="addProduct" id="submit" class="mt-4 btn btn-lg text-light border-light">Add to database</button>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      name: "",
      dark: "",
      context: "",
    }
  },
  methods: {
    async addProduct() {
      try {
        await axios.post('/api/products', {
          name: this.name,
          dark: this.dark,
          context: this.context
        }); 
      } catch (error) {
        console.log(error);
      }
    },
  }
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
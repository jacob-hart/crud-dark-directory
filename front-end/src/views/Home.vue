<template>
<div>
  <div class="d-flex justify-content-center align-items-center flex-wrap">
    <h4 class="mr-3 mt-1 text-light text-nowrap font-weight-normal">Does</h4>
    <input class="form-control form-control-lg bg-dark text-light border-muted" v-model="searchText" style="width: 50%; max-width: 15rem;" autofocus/>
    <h4 class="ml-3 mt-1 text-light text-nowrap font-weight-normal mt-3 mt-md-1">have a dark theme?</h4>
  </div>
  <ProductList :products="products" />
</div>
</template>


<script>
import axios from 'axios';
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
      products: [],
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        let response = await axios.get("/api/products");
        this.products = response.data;
        return true;
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
</style>
<template>
<div>
  <div class="row justify-content-center">
    <div class="col-xs-8 col-sm-6 col-lg-5 mr-lg-3 mb-5">
      <h3 class="text-light text-center mb-3">Add a product</h3>
      <label class="text-light font-weight-normal">Product name</label>
      <input v-model="addName" placeholder="Enter the product's name" class="form-control bg-dark text-light border-light"/>
      <label class="mt-3 text-light font-weight-normal">Does it have a dark theme?</label>
      <select v-model="addDark" class="form-control bg-dark text-light border-light" name="dark">
        <option value="1">Yes!</option>
        <option value="2">Yes, but...</option>
        <option value="0">No</option>
      </select>
      <label class="mt-3 text-light font-weight-normal">Context</label>
      <textarea v-model="addContext" placeholder="Enter a description" rows="3" class="form-control bg-dark text-light border-light"/>
      <button @click="addProduct" id="submit" class="mt-3 btn btn-lg text-light border-light">Add product</button>
    </div>
    <div class="col-xs-8 col-sm-6 col-lg-5 ml-lg-3">
      <h3 class="text-light text-center mb-3">Edit or delete a product</h3>
      <label class="text-light font-weight-normal">Product name</label>
      <select @change="onSelectEditProduct" class="form-control bg-dark text-light border-light" name="dark">
        <option :value="null">Select a product</option>
        <option v-for="product in products" :key="product._id">{{product.name}}</option>
      </select>
      <div v-if="currentProduct">
        <label class="mt-3 text-light font-weight-normal">Does it have a dark theme?</label>
        <select v-model="editDark" class="form-control bg-dark text-light border-light" name="dark">
          <option value="1">Yes!</option>
          <option value="2">Yes, but...</option>
          <option value="0">No</option>
        </select>
        <label class="mt-3 text-light font-weight-normal">Context</label>
        <textarea v-model="editContext" placeholder="Enter a description" rows="3" class="form-control bg-dark text-light border-light"/>
        <button @click="editProduct" id="submit" class="mt-3 btn btn-lg text-light border-light">Edit product</button>
        <button @click="deleteProduct" id="submit" class="mt-3 ml-3 btn btn-lg text-light border-light">Delete product</button>
      </div>
    </div>
  </div>
  <div class="mt-5 row justify-content-center">
    <transition name="fade">
      <div v-if="doShowAlert" class="alert bg-dark text-light border-success" role="alert">
        Product database updated!
      </div>
    </transition>
  </div>
</div>
</template>

<style>
.fade-enter-active {
  transition: opacity .1s ease-out;
}

.fade-leave-active {
  transition: opacity .25s ease-in;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      addName: "",
      addDark: "1",
      addContext: "",
      currentProduct: null,
      editDark: "1",
      editContext: "",
      products: [],
      doShowAlert: false,
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    async addProduct() {
      try {
        this.showAlert();
        await axios.post('/api/products', {
          name: this.addName,
          dark: this.addDark,
          context: this.addContext
        });
        this.getProducts(); 
      } catch (error) {
        console.log(error);
      }
    },
    async editProduct() {
      try {
        await axios.put('/api/products/' + this.currentProduct._id, {
          dark: this.editDark,
          context: this.editContext
        });
        this.showAlert();
        this.getProducts(); 
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProduct() {
      try {
        await axios.delete('/api/products/' + this.currentProduct._id)
        this.currentProduct = null
        this.showAlert();
        this.getProducts(); 
      } catch (error) {
        console.log(error);
      }
    },
    async getProducts() {
      try {
        let response = await axios.get("/api/products");
        this.products = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async showAlert() {
      this.doShowAlert = true;
      await new Promise(resolve => setTimeout(resolve, 3000));
      this.doShowAlert = false;
    },
    onSelectEditProduct(e) {
      this.currentProduct = this.products.find( ({ name }) => name === e.target.value);
      this.editDark = this.currentProduct.dark;
      this.editContext = this.currentProduct.context;
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
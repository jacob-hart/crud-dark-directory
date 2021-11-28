<template>
<div class="row d-flex justify-content-center mt-3">
  <div class="product" v-for="product in products" :key="product.id">
    <div v-if="product.dark == 0">
      <div id="card-0" class="card border-danger bg-dark m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-light mb-2">{{product.name}}</h5>
          <h6 class="card-text mb-2 text-danger btn nohover btn-outline-danger py-1 px-2">No.</h6>
          <br>
          <p class="card-text text-light mb-0">{{truncate(product.context)}}</p>
          <router-link :to="'/product/' + product.id" class="card-text text-muted stretched-link"></router-link>
        </div>
      </div>
    </div>
    <div v-else-if="product.dark == 1">
      <div id="card-1" class="card border-success bg-dark m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-light mb-2">{{product.name}}</h5>
          <h6 class="card-text mb-2 text-success btn nohover btn-outline-success py-1 px-2">Yes!</h6>
          <br>
          <p class="card-text text-light mb-0">{{truncate(product.context)}}</p>
          <router-link :to="'/product/' + product.id" class="card-text text-muted stretched-link"></router-link>
        </div>
      </div>
    </div>
    <div v-else-if="product.dark == 2">
      <div id="card-2" class="card border-warning bg-dark m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-light mb-2">{{product.name}}</h5>
          <h6 class="card-text text-warning btn nohover btn-outline-warning py-1 px-2">Yes, but...</h6>
          <br>
          <p class="card-text text-light mb-0">{{truncate(product.context)}}</p>
          <router-link :to="'/product/' + product.id" class="card-text text-muted stretched-link"></router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  created() {
    this.sortProducts()
  },
  beforeUpdate() {
    this.sortProducts()
  },
  methods: {
    truncate(context) {
      const TRUNCATE_IF_OVER = 55 // contexts over 55 characters will be truncated
      if (context.length > TRUNCATE_IF_OVER) {
        return context.slice(0, TRUNCATE_IF_OVER).trim() + "..."
      }
      return context
    },
    sortProducts() {
      this.products.sort(function (a, b) {
        var lookup = { 1: 1, 2: 2, 0: 3 } // Order is: Yes!, Yes, but..., No.
        return lookup[a.dark] - lookup[b.dark]
      });
    }
  }
}
</script>

<style scoped>
  #card-0:hover {
    box-shadow: 0 0 0.3rem 0.25rem rgba(220, 53, 69, 0.5);
  }
  #card-1:hover {
    box-shadow: 0 0 0.3rem 0.25rem rgba(40, 167, 69, 0.5);
  }
  #card-2:hover {
    box-shadow: 0 0 0.3rem 0.25rem rgba(255, 193, 7, 0.5);
  }

  .btn.nohover:hover {
    background-color: #343a40;
    cursor:default !important;
  }
</style>
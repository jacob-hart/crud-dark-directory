<template>
<div>
  <router-link :to="'/'" class="text-light">Back</router-link>
  <div class="row d-flex justify-content-center mt-3">
    <div v-if="product.dark == 0">
      <div id="card-0" class="card border-danger bg-dark m-3" style="max-width: 45rem;">
        <div class="card-body">
          <h3 class="card-title text-light mb-3">Does {{product.name}} have a dark theme?</h3>
          <h5 class="card-text mb-3 text-danger btn nohover btn-lg btn-outline-danger py-1 px-2">No.</h5>
          <br>
          <p class="card-text text-light mb-0">{{product.context}}</p>
        </div>
      </div>
    </div>
    <div v-else-if="product.dark == 1">
      <div id="card-1" class="card border-success bg-dark m-3" style="max-width: 45rem;">
        <div class="card-body">
          <h3 class="card-title text-light mb-3">Does {{product.name}} have a dark theme?</h3>
          <h5 class="card-text mb-3 text-success btn nohover btn-lg btn-outline-success py-1 px-2">Yes!</h5>
          <br>
          <p class="card-text text-light mb-0">{{product.context}}</p>
        </div>
      </div>
    </div>
    <div v-else-if="product.dark == 2">
      <div id="card-2" class="card border-warning bg-dark m-3" style="max-width: 45rem;">
        <div class="card-body">
          <h3 class="card-title text-light mb-3">Does {{product.name}} have a dark theme?</h3>
          <h5 class="card-text mb-3 text-warning btn nohover btn-lg btn-outline-warning py-1 px-2">Yes, but...</h5>
          <br>
          <p class="card-text text-light mb-0">{{product.context}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Detail',
  computed: {
    product() {
      return this.$root.$data.products[this.$route.params.id - 1]
    }
  },
}
</script>

<style scoped>
  .btn.nohover:hover {
    background-color: #343a40;
    cursor:default !important;
  }
</style>


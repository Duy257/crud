<template>
  <div>
    <h1 align="center">Update</h1>
    <div>
      <form action="">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">First</label>
          <input v-model="product.first" type="email" class="form-control" id="exampleFormControlInput1" placeholder="first">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Last</label>
          <input v-model="product.last" type="email" class="form-control" id="exampleFormControlInput1" placeholder="last">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Handle</label>
          <input v-model="product.handle" type="email" class="form-control" id="exampleFormControlInput1" placeholder="handle">
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary" v-on:click="handleUpdate({first, last, handle})">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UpdateProduct',
  data() {
    return {
      product: {},
      products: []
    }
  },
  beforeMount() {
    let products = JSON.parse(localStorage.getItem('product'))
    let product1 = products.filter((item) => (item.id == this.$route.params.id))
    this.products = products
    this.product = product1[0]
    console.log(this.product);
  },
  methods: {
    handleUpdate: function(props) {
      console.log(this.products)
      this.products.map((item) => {
        if(item.id == this.$route.params.id) {
          item = props
          item.id = this.$route.params.id
        }
      })
      localStorage.removeItem('product');
      localStorage.setItem('product', JSON.stringify(this.products));
    }
  }
}
</script>
<style lang="">
    
</style>
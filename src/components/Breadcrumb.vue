<template>
    <div class="breadcrumbs">
        <ul>
            <li  @click="getProducts()">
                <router-link to="/products/all">All Products</router-link>
            </li>
            <li class="breadcrumbs_now">{{catergroy}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['catergroy'],
  data() {
    return {

    };
  },
  methods: {
    getProducts() {
      this.$emit('getproducts');
    },
  },
};
</script>

<template>
    <div class="breadcrumbs">
        <ul>
            <li  @click="getProducts()">
                <router-link to="/products/all">All Products</router-link>
            </li>>
            <li>{{catergroy}}</li>
        </ul>
    </div>
</template>
<style lang="scss">
    .breadcrumbs{
        position: fixed;
        z-index: 99;
    }
</style>
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

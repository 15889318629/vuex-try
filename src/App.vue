<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <vue-1></vue-1>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";
import index1 from "./index.vue";

export default {
  name: "app",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
    "vue-1": index1
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
#app {
  display: flex;
  justify-content: space-around;
}
</style>

<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
      <button @click="minusPrice">减少价格</button>
      <button @click="minusPriceAsync">异步减少价格</button>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("part1", ["saleProducts"])
  },
  methods: {
    minusPrice() {
      this.$store.commit("part1/minusPrice", 1);
    },
    minusPriceAsync() {
      this.$store.dispatch("part1/minusPriceAsync", 2);
    }
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  width: 100%;
}
#product-list-one ul {
  padding: 0;
  list-style-type: none;
}
#product-list-one li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
  display: block;
}
</style>

<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
      <button @click="minusPrice">减少价格</button>
      <button @click="minusPriceAsync">异步减少价格</button>
    </ul>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from "vuex";

export default {
  data() {
    return {
      products: this.$store.state.part2.products
    };
  },
//   computed:{
//       ...mapGetters("part2",["saleProducts"])
//   },
  methods: {
    minusPrice() {
      this.$store.commit("part2/minusPrice", 2);
    },
    minusPriceAsync() {
      this.$store.dispatch("part2/minusPriceAsync", 5);
    }
  }
};
</script>

<style scoped>
#product-list-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  width: 100%;
}
#product-list-two ul {
  padding: 0;
  list-style-type: none;
}
#product-list-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>

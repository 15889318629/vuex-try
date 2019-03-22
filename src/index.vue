<template>
  <div id="vue-1">
    <son v-bind:num="num" v-on:add="icr" v-on:minus="der"></son>
    <p class="text-link">这里是index的num：{{num}}</p>
  </div>
</template>

<script>
import son1 from "./components/son.vue";
export default {
  data() {
    return {
      num: 10
    };
  },
  methods: {
    icr: function() {
      this.num++;
    },
    der: function() {
      this.num--;
    }
  },
  components: {
    son: son1
  }
};
</script>

<style scoped>
#vue-1 {
  background: #87ec90;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  width: 100%;
}
</style>
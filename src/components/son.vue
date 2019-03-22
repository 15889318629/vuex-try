<template>
  <div id="son">
    <button class="test-btn" @click="add">+</button>
    <button class="test-btn" @click="minus">-</button>
    <p class="text-link">这里是son的num：{{num}}</p>
  </div>
</template>
<script>
export default {
  props: ["num"],
  data() {
    return {
    //   num: 0
    };
  },
  methods: {
    add: function() {
      this.$emit("add");
    },
    minus: function() {
      this.$emit("minus");
    }
  }
};
</script>
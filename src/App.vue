<template>
  <div>
    <span>{{ count }}</span>
  </div>
</template>
<script>
import { ref } from "vue"
export default {
  setup() {
    const count = ref(0)
    return {
      count,
    };
  },
};
</script>
<style lang="scss" scoped>
div {
  width: 50vw;
  height: 50vh;
  background: red;
  span {
    color: aqua;
    font-size: 22px;
  }
}
</style>
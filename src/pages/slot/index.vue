<template>
  <div style="border: 1px solid #ccc">
    <div style="display: flex">
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
    <slot name="temp" :index="100" :slotData="slotData"></slot>
  </div>
</template>

<script>
export default {
  props: {
    slotData: {
      type: Object,
      default: () => {
        return {
          name: "这是默认的子组件的slot",
        };
      },
    },
  },
  created(){
  }
};
</script>

<style scoped>
</style>
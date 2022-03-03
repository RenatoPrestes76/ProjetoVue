<template>
  <p>{{ text }}</p>
</template>

<script>
// Imports

export default {
  name: 'TextContent',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Texto Padrão',
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

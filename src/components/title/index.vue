<template>
  <h1>{{ text }}</h1>
</template>

<script>
// Imports

export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Título Padrão',
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

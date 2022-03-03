<template>
  <header>
    <Title text="Isso é o header." />
  </header>
</template>

<script>
import Title from '@/components/title/index.vue';

export default {
  name: 'Header',
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

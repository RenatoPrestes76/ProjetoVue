<template>
  <footer>
    <Title text="Isso é o footer." />
  </footer>
</template>

<script>
import Title from '@/components/title/index.vue';

export default {
  name: 'Footer',
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

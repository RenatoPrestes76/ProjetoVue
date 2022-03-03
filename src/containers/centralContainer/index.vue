<template>
  <div>
    <Title :text="myTitle1" />
    <TextContent :text="myText1" />
  </div>
</template>

<script>
import TextContent from '@/components/textContent/index.vue';
import Title from '@/components/title/index.vue';
export default {
  name: 'CentralContainer',
  components: {
    TextContent,
    Title,
  },
  props: {
    myText1: {
      type: String,
      default: 'CentralContainer',
    },
    myTitle1: {
      type: String,
      default: 'CentralContainer',
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// Import

export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './App.scss';
</style>

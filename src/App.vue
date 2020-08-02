<template>
  <div id="app">
    <!-- <img alt="Vue logo" :src='require("./assets/logo.png")' > -->
    <img alt="Vue logo" src='./assets/logo.png' >
    <!-- <StudyContainer msg="vue Study"/> -->
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App！！！！ji"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import StudyContainer from './components/StudyContainer.vue'
// eslint-disable-next-line no-unused-vars
import logo from './assets/logo.png'

export default {
  name: 'App',
  components: {
    HelloWorld,
    StudyContainer
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

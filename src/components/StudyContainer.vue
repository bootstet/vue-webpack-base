<template>
  <div class="study">
    <h1 v-bind:title="message">{{ msg }}</h1>
    <router-link to="/bootstet">Index</router-link>
    <router-link to="/bootstet/blog">Blog</router-link>
    <router-link to="/bootstet/photo">Photo</router-link>
    <router-link to="/bootstet/detail/:43">Detail</router-link>
    <router-view></router-view>
    <div>footer</div>
  </div>
</template>

<script>
export default {
  name: 'StudyContainer',
  data: () => {
    return {
      message: '页面加载于' + new Date().toLocaleString()
    }
  },
  props: {
    msg: String
  },
  created: function () {
    console.log(`created ：message is ${this.message}`)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

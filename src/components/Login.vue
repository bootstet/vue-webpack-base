<template>
 <div class="page">
   这是登陆页面
   <router-link to="/bootstet">首页</router-link>
   <button @click="push">push</button>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Login',
  methods: {
    push () {
      // this.$router.push('/bootstet/blog')
      this.$router.push({ name: 'Index' })
    }
  }
}
</script>

<style scoped lang="scss">
</style>

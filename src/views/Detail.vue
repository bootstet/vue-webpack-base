<template>
 <div class="page">
   <!-- 方式1 通过当前路由规则，获取数据 -->
   {{ $route.params }}
   <br/>
   <!-- 方式2： 路由规则中开启props传参 -->
   {{ id }}

   <button @click="go"> go(-2)</button>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Detail',
  props: ['id'],
  methods: {
    go () {
      this.$router.go(-2)
    }
  }
}
</script>

<style scoped lang="scss">
</style>

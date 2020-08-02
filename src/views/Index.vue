<template>
  <div class="page">
    这是 首页
    <button @click="replace">replace</button>
    <button @click="goDetail"> detail</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Index',
  methods: {
    replace () {
      this.$router.replace('/login')
    },
    goDetail () {
      this.$router.push({ name: 'Detail', params: { id: 1 }})
    }
  }
}
</script>

<style scoped lang="scss">

</style>

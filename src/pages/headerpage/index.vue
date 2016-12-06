<template lang="html">
  <el-menu default-active="1" theme="default" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Data-Admin</el-menu-item>
</el-menu>
</template>

<script>
export default {
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="sass">
body {
    width: 100%;
    height: 100%;
}
</style>

<template lang="html">
  <el-col :span="3">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航</template>
        <el-menu-item-group>
          <template slot="title">分组</template>
          <el-menu-item index="1-1">选项</el-menu-item>
          <el-menu-item index="1-2">选项</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组">
          <el-menu-item index="1-3">选项</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>

</style>

<template>
<div class="app-container">
    <HeaderNav />
    <el-row class="home-container">
      <SlideBar/>
      <MainContent/>
    </el-row>
</div>
</template>

<script>
import HeaderNav from '../pages/headerpage';
import SlideBar from '../pages/sliderbar';
import MainContent from '../pages/maincontent';
export default {
    name: 'app-container',
    components: {
      HeaderNav,
      SlideBar,
      MainContent
    }
}
</script>

<style lang="sass">
  body{
  }

.app-container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #2c3e50;
}
.home-container {
  width:100%;
  height:100%;
}
</style>

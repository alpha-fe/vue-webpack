<template lang="html">
  <div class="alert-container">
    这是alertContainer
    <button type="button"  name="button">BUTTON</button>
    <Alert>
      <p slot="hello">
        这是HELLO
      </p>
      <div slot="world">
        这是world
      </div>
    </Alert>
  </div>
</template>

<script>
import Alert from '../components/alert';
export default {
  components:{
    Alert
  }
}
</script>

<style lang="css">
  .alert-container{
    color:#666;
  }
</style>

<template lang="html">
  <div class="alert-container">
    这是alertContainer
    <button type="button" v-on:click="showAlert" name="button">BUTTON</button>
    <Alert v-if="show">
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
    data() {
        return {
            show: false
        }
    },
    components: {
        Alert
    },
    methods: {
        showAlert() {
            this.show = !this.show;
            console.log(this.show);
        }
    }

}
</script>

<style lang="css">
  .alert-container{
    color:#666;
  }
</style>

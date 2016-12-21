<template lang="html">
  <div class="alert-container">
    这是alertContainer
    <button type="button" v-on:click="showAlert" name="button">BUTTON</button>
    <PaiDialog v-if="show">
      <div slot="dialog-title">
        这是dialog-title
      </div>
      <div slot="dialog-body">
        这是dialog-body
      </div>
      <div slot="dialog-footer">
        这是dialog-footer
      </div>
    </PaiDialog>
  </div>
</template>

<script>
import PaiDialog from '../components/dialog';
export default {
    data() {
        return {
            show: false
        }
    },
    components: {
        PaiDialog
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

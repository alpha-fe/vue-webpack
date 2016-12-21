<template id="pai-dialog" lang="html">
  <transition name="fade">
    <div class="dialog">
      <slot name="dialog-title"></slot>
      <slot name="dialog-body"></slot>
      <slot name="dialog-footer"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name:'pai-dialog',
  data(){
    return {
    }
  }
}
</script>

<style lang="sass">
  .fade-enter-active ,.fade-leave-active {
    transition:opacity 1s
}
</style>

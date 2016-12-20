<template id="hello-world" lang="html">
  <transition name="fade">
    <div class="alert">
      <h3>Hello world</h3>
      <slot name="hello"></slot>
      <slot name="world"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name:'alert',
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

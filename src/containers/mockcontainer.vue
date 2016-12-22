<template lang="html">
  <div class="mock-container">
    <button type="button" v-on:click="getData" name="button">GETDATA</button>
    这是mockContainer
  </div>
</template>

<script>
export default {
  methods:{
    getData(){
      console.log('getmock');
      this.$http.get("http://127.0.0.1:4000/table").then(res => {
        console.log(res);
      });
    }
  }
}
</script>

<style lang="css">
  .ui-container{
    color:#333;
  }
</style>

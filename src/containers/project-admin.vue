<template lang="html">
    <div class="project-admin">
        <select-box></select-box>
        <table-box></table-box>
    </div>
</template>

<script>
    import selectbox from '../components/selectbox.vue';
    import tablebox from '../components/table-include.vue';
    export default{
        data(){
            return{

            }
        },
        methods(){

        },
        components:{
            'select-box':selectbox,
            'table-box':tablebox
        }
    }
</script>

<style lang="sass">

</style>
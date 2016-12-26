<template lang="html">
    <div class="project-admin">
        <select-box></select-box>
        <table-box></table-box>
        <af-pagebar></af-pagebar>
    </div>
</template>

<script>
    import selectbox from '../components/form/select.vue';
    import tablebox from '../components/table/table-include.vue';
    import pagebar from '../components/pagebar.vue';
    export default{
        data(){
            return{
                hnames:['日期','姓名','地址','日期','姓名','地址','日期','姓名','操作'],
                sthNames:['职位名称','城市','职级','年薪','职位名称','城市','职级','年薪','职位名称','城市','职级','年薪']
            }
        },
        methods(){

        },
        components:{
            'select-box':selectbox,
            'table-box':tablebox,
            'af-pagebar':pagebar
        }
    }
</script>

<style lang="sass">

</style>
<template lang="html">
    <table class="position-table">
        <th>职位名称</th>
        <th>城市</th>
        <th>职级</th>
        <th>年薪</th>
        <th>职位名称</th>
        <th>城市</th>
        <th>职级</th>
        <th>年薪</th>
        <th>职位名称</th>
        <th>城市</th>
        <th>职级</th>
        <th>年薪</th>
        <tr v-for="position in list">
            <td>{{position.name}}</td>
            <td>{{position.city}}</td>
            <td>{{position.level}}</td>
            <td>{{position.salary}}</td>
            <td>{{position.name}}</td>
            <td>{{position.city}}</td>
            <td>{{position.level}}</td>
            <td>{{position.salary}}</td>
            <td>{{position.name}}</td>
            <td>{{position.city}}</td>
            <td>{{position.level}}</td>
            <td>{{position.salary}}</td>
        </tr>
    </table>
</template>

<script>
    export default{
        created(){
            console.log('small-table create');
            this.getdata();
        },
        data(){
            return{
                flag:true,
                list:[]
            }
        },
        methods:{
            getdata(){
              this.$http.get("/mock/position/list.json").then(res => {
                  this.list = res.body.content.list;
              });
            }
        }
    }
</script>
<style lang="sass">
    .position-table{
        width:100%;
    th{
        border: 1px solid #e0e6ed;
        padding:0 10px;
        background: #eff2f7;
    }
    tr{
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        height:40px;
        line-height:40px;
        max-width: 100%;
        border: 1px solid #e0e6ed;
        font-size: 14px;
        color: #1f2d3d;

    }
    }
</style>
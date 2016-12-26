<template lang="html">
    <table class="position-table">
        <th v-for="hname in hnames">{{hname}}</th>
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
            this.hnames = this.$parent.$data.sthNames;
            this.getdata();
        },
        data(){
            return{
                flag:true,
                list:[],
                hnames:[]
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
            height:30px;
            line-height: 30px;
        }
        tr{
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            width: 100%;
            height:30px;
            line-height:30px;
            max-width: 100%;
            border: 1px solid #e0e6ed;
            font-size: 14px;
            color: #1f2d3d;

        }
        td{
            text-align: center;
        }
    }
</style>
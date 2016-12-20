<template lang="html">
    <div class="af-table">
        <button v-on:click="getdata">取数据</button>
        <div class="af-table-header">
            <table>
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <thead>
                <tr>
                    <th>日期</th>
                    <th>姓名</th>
                    <th>地址</th>
                    <th>日期</th>
                    <th>姓名</th>
                    <th>地址</th>
                    <th>日期</th>
                    <th>姓名</th>
                    <th>操作</th>
                </tr>
                </thead>
            </table>
        </div>
        <div class="af-table-body">
            <table>
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <col width="100px">
                <tbody>
                <template v-for="(comp,index) in list">
                    <tr>
                        <td>{{comp.date}}</td>
                        <td>{{comp.name}}</td>
                        <td>{{comp.address}}</td>
                        <td>{{comp.date}}</td>
                        <td>{{comp.name}}</td>
                        <td>{{comp.address}}</td>
                        <td>{{comp.date}}</td>
                        <td>{{comp.name}}</td>
                        <td class="check-option" v-on:click="checkPosition(index)">查看职位</td>
                    </tr>
                    <tr v-if="comp.showPosition">
                        <td colspan="9" class="table-box" >
                            <position-table></position-table>
                        </td>

                    </tr>
                </template>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import positionTable from './table.vue';

import { CHART_LIST_PATH } from '../utils/configpath';

var _ = require('lodash');
export default {
    created(){//生命周期钩子，为啥只有这一个被执行？如果 Vue 实例对象只执行了created方法，那么说明绑定的 DOM 元素没有找到
        console.log('create');
        this.getdata();
        //this.list.splice(1, 0, {showPosition:true});

    },
    beforeCompile(){
        console.log('beforeCompile');
    },
    compiled(){
        console.log('compiled');
    },
    ready(){
        console.log('ready');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    },
    data(){
        return{
            list:[]
        }
    },
    methods:{
        checkPosition:function(index){
            console.info(index);
            this.list[index].showPosition=!this.list[index].showPosition;
        },
        getdata(){
          this.$http.get(CHART_LIST_PATH).then(res => {

             _.forEach(res.body.content.list,function(obj){
               obj.showPosition = false;
              });
             this.list = res.body.content.list;
          });

        }
    },
    components:{
        'position-table':positionTable
    }
}
</script>

<style lang="sass">
    button{
        width: 100px;
        height: 30px;
        border-radius: 3px;
        outline: none;
        border: none;
    }
    .af-table{
        width:900px;
        margin:30px auto;

    .af-table-header{
        background: #909090;
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
    th{
        border: 1px solid #e0e6ed;
        padding:0 10px;

    }
    }
    }
    .af-table-body{
    tr{
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        height:40px;
        line-height:40px;
        max-width: 100%;
        background-color: #fff;
        border: 1px solid #e0e6ed;
        font-size: 14px;
        color: #1f2d3d;
    td{
        border: 1px solid #e0e6ed;
        padding:0 10px;
    &.table-box{
         padding:0;
     }
    &.check-option{
         color: #00A000;
    &:hover{
         cursor: pointer;
     }
    }

    }
    }
    }

    }

</style>

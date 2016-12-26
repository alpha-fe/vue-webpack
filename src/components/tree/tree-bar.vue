<template lang="html">
    <div class="af-tree-bar">
        <div class="af-tree-bar-parent">
            <div class="af-tree-bar-item" v-for="(item,index) in rootlist" v-on:mouseover="activeItem(item,index)" v-on:mouseout="unactiveItem">
                {{item.name}}
            </div>
        </div>
        <div class="af-tree-items" v-bind:style="{top:top+'px'}">
            <div class="af-tree-bar-item" v-for="item in leaflist">
                {{item.name}}
            </div>
        </div>
    </div>
    
</template>

<script>
import {TREE_LIST} from '../../utils/configpath';
var _ = require('lodash');
    export default{
        created(){
            this.getData();
        },
        data(){
            return{
                treelist:[],
                rootlist:[],
                leaflist:[],
                top:0
            }
        },
        methods:{
            getData(){
                this.$http.get(TREE_LIST).then(res =>{
                    this.treelist = res.body.content.treelist;
                    var _this = this;
                    _.forEach(this.treelist,function(item){
                        if(item.pid == 0){
                            _this.rootlist.push(item);
                        }
                    });


                });
            },
            activeItem(param,index){
                var _this = this;
                _.forEach(this.treelist,function(item){
                    if(item.pid == param.id){
                        _this.leaflist.push(item);
                        console.log(item.name);
                    }
                });
                this.top = index*41;
            },
            unactiveItem(){
                this.leaflist = [];
            }

        }
    }
</script>

<style lang="sass">
    .app-container{
        height:auto;
        overflow: inherit;
    }
    .af-tree-bar{
       width:200px;
       margin:20px;
        position: relative;
    }
    .af-tree-bar-parent{
        border: 1px solid #ccc;
        border-bottom: none;
    }
    .af-tree-bar-item{
        width:100%;
        height:40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        text-align:center;
        &:hover{
            background: #2c3e50;
             color: #fffdef;
        }
    }

    .af-tree-items{
        width:200px;
        background: #2c3e50;
        color: #fffdef;
        position: absolute;
        top:0;
        left:200px;
    }
    .af-tree-bar-item{
        width:100%;
        height:40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        text-align:center;
        &:hover{
         background: #2c3e50;
         color: #fffdef;
        }
    }

</style>
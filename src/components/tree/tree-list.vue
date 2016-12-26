<template lang="html">
    <div class="af-tree-items">
        <div class="af-tree-bar-item" v-for="item in leaflist">
            {{item.name}}
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
        props:{

        },
        data(){
            return{
                leaflist:[]
            }
        },
        methods:{
            getData(){
                this.leaflist = this.$parent.$data.leaflist;
            }

        }
    }
</script>

<style lang="sass">
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
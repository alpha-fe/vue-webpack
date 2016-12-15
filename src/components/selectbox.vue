<template lang="html">
    <div class="selectbox">
        <div class="el-input">
            <i class="el-input__icon el-icon-caret-top" v-on:click="dropDown"></i>
            <input type="text" placeholder="请选择" readonly="readonly" autocomplete="off" v-model="selectedItem" class="el-input__inner">
        </div>
        <ul v-show="flag">
            <li v-for="item in options" v-on:click="selected(item)">{{item.label}}</li>
        </ul>
    </div>

</template>

<script>
export default {
    data :function(){
        return{
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶',
              disabled: true
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            selectedItem:"龙须面",
            flag:false
        }
    },
    methods: {
        selected:function(item) {
            console.log(item.value);
            this.selectedItem = item.label;
            this.flag = false;
        },
        dropDown:function(){
            this.flag = true;
        }
    }
}
</script>

<style lang="sass">
    .selectbox{
        ul{
            border: 1px solid #c0ccda;
        }
        input{
            display: block;
            padding: 3px 10px;
            box-sizing: border-box;
            width: 100%;
            height: 36px;
            color: #1f2d3d;
            background-color: #fff;
            background-image: none;
            border: 1px solid #c0ccda;
            border-radius: 4px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            outline: none;
            font-size: inherit;
            line-height: normal;
        }
        i{
            color: #c0ccda;
            font-size: 12px;
            transition: transform .3s;
            transform: translateY(-50%) rotate(180deg);
            line-height: 16px;
            top: 50%;
            cursor: pointer;
            &:before {
                content: "\E607";
            }
            &:after {
                 content: '';
                 height: 100%;
                 width: 0;
                 display: inline-block;
                 vertical-align: middle;
             }
        }
    li{
        font-size: 14px;
        padding: 8px 10px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #475669;
        height: 36px;
        line-height: 1.5;
        box-sizing: border-box;
        cursor: pointer;
        &:hover{
            background: #d3dce6;
        }
    }
    }
</style>
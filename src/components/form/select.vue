<template lang="html">
    <div class="selectbox">
        <div class="el-input">
            <i class="el-input__icon el-icon-caret-top"></i>
            <input type="text" placeholder="请选择" readonly="readonly" autocomplete="off" v-model="selectedItem" class="el-input__inner">
        </div>
        <ul v-show="flag" class="af-select-options">
            <li v-for="item in options" v-on:click="selected(item)">{{item.label}}</li>
        </ul>
    </div>

</template>

<script>

export default {
    created(){
        //点击dropDown，下拉；点击其它区域，下拉收起
        var _this = this;
        document.addEventListener('click',function(e){
            var _con = document.getElementsByClassName('af-select-options');   // 设置目标区域，即下拉选项

            if(e.toElement.className == "el-input__icon el-icon-caret-top"){
                 _this.flag = true;
            }else{
                _this.flag = false;
            }

        });
    },
    props:['name'],
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
            item.preventDefault();
        }
    }
}
</script>

<style lang="sass">
    .selectbox{
        position:relative;
        width:200px;
        margin:20px;
        ul{
            border: 1px solid #c0ccda;
            position:absolute;
            top:40px;
            left:0;
            width:100%;
            background:#fff;
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
        .el-input{
            width:100%;
            label{
                text-align: right;
                vertical-align: middle;
                float: left;
                font-size: 14px;
                color: #5e6d82;
                line-height: 1;
                padding: 11px 12px 11px 0;
                box-sizing: border-box;
            }
            input{
                display: block;
                padding: 3px 10px;
                box-sizing: border-box;
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
                right:0;

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
        }


    }
</style>
<template lang="html">
    <div>
        <div class="af-message-box-wrapper">
            <div class="af-message-box">
                <div class="close" v-on:click="cancle">X</div>
                <div class="af-message-box-header">
                    <p>不合适原因</p>
                </div>
                <div class="af-message-box-container">
                    确认后将不再展示该职位，您可以在精英会场中查看。
                    <slot name="position-form"></slot>
                </div>
                <div class="af-message-box-btn">
                    <span class="message-sure-btn btn" v-on:click="sure">确认</span>
                    <span class="message-cancle-btn btn" v-on:click="cancle">取消</span>
                </div>
            </div>
        </div>
        <div class="shadow"></div>
    </div>

</template>

<script>
    export default{
        created(){
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        },
        destroyed(){
            document.getElementsByTagName("body")[0].style.overflow = "inherit";

        },
        data(){
            return{
               header:'<p class="message-title">标题名称</p>',
               container:"<p>内容</p>",
               btn:'<a class="message-sure-btn">确定</a>'

            }
        },
        methods:{
            cancle(){
                this.$parent.$data.showBoxFlag = false;
            },
            sure(){
                this.$parent.$data.showBoxFlag = false;
            }

        },
        components:{

        }
    }
</script>

<style lang="sass">
.af-message-box-wrapper{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    text-align: center;
    z-index:999;
    overflow:hidden;
    &:after{
        content: "";
        display: inline-block;
        height:100%;
        width:0;
        vertical-align: middle;
     }
}
.af-message-box{
    display: inline-block;
    position: relative;
    z-index: 999;
    background: #fff;
    border-radius: 3px;
    padding: 60px 47px;
    vertical-align:middle;
    .close{
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 24px;
        color: #5e6d82;
        &:hover{
            cursor: pointer;
        }
    }
}
.af-message-box-header{
    height:40px;
    line-height: 40px;
}
.af-message-box-container{
    margin-bottom:40px;
}
    .message-title{
        padding-left: 0;
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 700;
        height: 18px;
        color: #333;
    }
    .af-message-box-btn{
        text-align: center;
        .btn{
            margin-right: 10px;
            display: inline-block;
            border-radius: 2px;
            height: 46px;
            line-height: 46px;
            text-align: center;
            padding: 0 24px;
            font-size: 16px;
        }
        .message-sure-btn{
            background: #00b38a;
            color: #fff;
        }
        .message-cancle-btn{
            border:none;
        }
    }
.shadow{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity:0.5;
    background: #000;
}

</style>
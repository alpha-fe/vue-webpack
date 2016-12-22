<template lang="html">
    <div class="edit-position-container">
        <form @submit.prevent="handleSubmit">
            <div class="af-input">
                <label for="">职位名称</label>
                <input type="text" v-vuerify="item.pname" v-model="item.pname">
            </div>
            <div class="af-input">
                <label for="">职位级别</label>
                <input type="text" v-vuerify="item.plevel" v-model="item.plevel">
            </div>
            <a class="submit btn" v-on:click="handleSubmit">提交</a>
            <a class="cancle btn">取消</a>
            <a class="edit btn" v-on:click="showMessageBox">弹框</a>

<af-messagebox v-if="showBoxFlag" temp="">
    <form action="" slot="position-form" v-show="showBoxFlag">
        <af-input name="职位名称"></af-input>
        <af-input name="职位级别"></af-input>
        <af-input name="所属部门"></af-input>
        <af-input name="所属项目"></af-input>
        <af-select name="喜爱的食物"></af-select>
    </form>
</af-messagebox>

        </form>


    </div>
</template>

<script>
    import Vue from 'vue';
    import afinput from '../components/form/input.vue';
    import afselect from '../components/form/select.vue';
    import messagebox from '../components/message-box.vue';
    import VuerifyDirective from 'v-vuerify-next';
    import Vuerify from 'vuerify';

    Vue.use(Vuerify);
    Vue.use(VuerifyDirective);

    export default {
        data(){
            return{
                showBoxFlag:false,
                item:{}
            }
        },
        methods:{
            handleSubmit(){
                if(this.$vuerify.check()){//手动触发校验所有数据
                    this.$http.post("/mock/form/save.json",this.item).then(res => {
                        if(res.body.success){
                            alert("save success~");
                        }
                    });
                }else{
                    alert("请正确填写所有选项后再提交");
                }

            },
            showMessageBox(){
                this.showBoxFlag = !this.showBoxFlag;
            }
        },
        components:{
            'af-input':afinput,
            'af-select':afselect,
            'af-messagebox':messagebox
        },
        compouted:{
            errors(){
                return this.$vuerify.$errors
            }
        },
        vuerify:{
            pname:{
                test:"required",
                message:"名字必填"
            }
        }
    }
</script>

<style lang="sass">
    .edit-position-container{
        .btn{
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #c0ccda;
            color: #1f2d3d;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            padding: 10px 15px;
            font-size: 14px;
            border-radius: 4px;
        }
        .submit{
            color: #fff;
            background-color: #20a0ff;
            border-color: #20a0ff;
        }

    }
</style>

<template lang="html">
    <div class="af-input">
        <label for="">{{name}}</label>
        <input type="text">
    </div>
</template>

<script>
export default {
    props:['name'],
    data(){
        return{

        }
    }
}
</script>

<style lang="sass">
    .af-input{
        margin:10px;
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
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #c0ccda;
            box-sizing: border-box;
            color: #1f2d3d;
            display: block;
            font-size: inherit;
            height: 36px;
            line-height: normal;
            outline: none;
            padding: 3px 10px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 200px;
        }
    }
</style>

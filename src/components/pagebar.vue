<template lang="html">
        <div class="block">
            <span class="demonstration">显示总数</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.$http.get("/mock/compotion/list.json").then(res => {
             this.list = res.body.content.list;
        });
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`9999当前页: ${val}`);
        this.$http.get("/mock/compotion/list.json").then(res => {
             this.list = res.body.content.list;
        });
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        list:[]
      };
    }
  }
</script>
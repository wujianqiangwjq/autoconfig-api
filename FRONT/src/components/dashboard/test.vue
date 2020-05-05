<template>
  <div>
 <el-container>
   <el-header>Header</el-header>
   <el-container>
     <el-aside width="200px">Aside</el-aside>
     <el-main>Main</el-main>
   </el-container>
   <el-footer>Footer</el-footer>
 </el-container>
  </div>
</template>

<script>
</script>

<style scoped>
  .el-header {
      position: absolute;
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
      top: 0px;
      width: 100%;

    }
    .el-footer {
      position: absolute;
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
      bottom: 0px;
      width: 100%;
    }

    .el-aside {
      position: absolute;
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
      top: 60px;
      bottom: 60px;
    }

    .el-main {
      position: absolute;
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
      top: 60px;
      bottom: 60px;
      left: 200px;
      right: 10px;
    }

    body > .el-container {
      margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
</style>

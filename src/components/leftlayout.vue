<template>

  <div class="admin-panel">
    <div class="leftmenu-borad">
      <slot name="left_menu"></slot>
    </div>
    <div class="main-container" >
      <slot name="left_container"></slot>
    </div>
  </div>
</template>
<style type="text/css">
  .admin-panel{
    background-color: white;
    margin:auto;
    width: 1200px;
    clear: both;
  }
  .leftmenu-borad{
    /*border-right: 1px black solid;*/
    min-height: 800px;
    background: #f3f3f3;
    width: 200px;
    padding-left: 20px;
    float: left;
  }
  .xg-row{
    margin-left: 0px;
    margin-right: 0px;
  }
  .main-container{
    /*border:1px solid ;*/
    /*width: 789px;*/
    /*background: #f3f3f3;*/
    width: 990px;
    float: right;
  }
</style>
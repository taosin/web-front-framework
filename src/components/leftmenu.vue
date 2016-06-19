<template>
  <div class="navbar">
      <div class="">
           <ul class="left-menu" >
             <li v-for="menu in data" class="left-menu-div">
                <a v-if="!menu.child" href="{{menu.url}}" class="leftmenu-parent">{{menu.text}}</a>
                <!-- <a class="left-menu-parent">{{menu.text}}</a> -->
                <ul v-if="menu.childItem">
                  <li v-for="submenu in menu.childItem" ><a href="{{submenu.url}}" class="leftmenu-child">{{submenu.text}}</a></li>
                </ul>
             </li>
           </ul>
      </div>
        <!-- <div class="navbar-header">
          <button class="navbar-toggle" type="button" @click="showMenu">
            <span class="icon-bar" :class="{xbar:isShow}"></span>
            <span class="icon-bar" :class="{xbar:isShow}"></span>
            <span class="icon-bar" :class="{xbar:isShow}"></span>
          </button>
        </div> -->
  </div>
</template>
<script>
 module.exports = {
   props: ['data', 'activeindex'],
   methods: {
     showMenu() {
       this.isShow = !this.isShow;
     },
     showSubMenu(id) {
       if (this.activeindex === id) {
         this.activeindex = 0;
       } else {
         this.activeindex = id;
       }
     },
     goto(urlObject) {
       if (typeof(urlObject) === 'string') {
         window.router.go({
           path: urlObject
         });
       } else {
         window.router.go(urlObject);
       }
     }
   }
 };
 </script>
<style type="text/css">
ul.left-menu{
  list-style: none;
  padding: 0;

}
.left-menu-div{
  border-bottom: 1px solid #ffffff;

}
.navbar{
  background: #f3f3f3;
}
ul.left-menu li{
    min-height: 40px;
    line-height: 40px;
    height: auto;
    list-style: none;

    /*border-bottom: 1px black solid;*/
}
.left-menu-parent{
  /*li: 60px;*/
}
ul.left-menu li a:hover{
  color:red;
  text-decoration: none;
  display: inline-block;
    /*border-bottom: 1px black solid;*/
}
.leftmenu-parent{
  font-size: 16px;
  color:black;
  display: inline-block;
  width: 100%;
  height: 100%;

}
.leftmenu-child{
  font-size: 14px;
  color:black;
  display: inline-block;
  width: 100%;
  height: 100%;

}

</style>
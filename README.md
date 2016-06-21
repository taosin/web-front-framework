##一个适用于vue的前端标准框架
##目录介绍
###static文件夹中存放静态文件，包括js，img，css等等
###src文件件中存放前端代码
####src/components中存放前端中可用到的常用组件



#接口说明
##1.1 modal组件中点击阴影处关闭弹框功能接口：
###<modal :show.sync="showIP" :shadow.sync="true"></modal>
####shadow为true时，点击阴影处可关闭弹框，否则不能关闭

##1.2 table组件中的可折叠功能接口：
### <grid><div slot="table_expand" class="table-expand">
###        ....Content
###</div></gird>

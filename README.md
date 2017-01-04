## 一个适用于vue1.0的前段框架标准
### 目录介绍
##### static文件夹中存放静态文件爱你，包括js，img，css等。
#### src文件爱你中存放前段代码
#### src/components 中存放前段中可用到的常用组件以及自己封装的某些组件


###接口说明
####1.1 modal组件中点击阴影处关闭弹框功能接口：
####<modal :show.sync="showIP" :shadow.sync="true"></modal>
####shadow为true时，点击阴影处可关闭弹框，否则不能关闭

####1.2 table组件中的可折叠功能接口：
``` javascript
<grid><div slot="table_expand" class="table-expand">
       ....Content
</div></gird>
```
####分页组件API
``` javascript
<pagination 
  size="md"
  variant="primary"
  :total-rows="100"
  :current-page="currentPageVariable"
  :per-page="10">
</pagination>
```
####分页组件接口
| Name          | Type       | Description|
| ------------- |:-------------:| -----:|
| current-page     | Number| 设置当前页      |
| limit      | Number      | 按钮显示数      |
| per-page | Number        |  每页显示记录数  |
| total-rows| Number        |  记录总数      |

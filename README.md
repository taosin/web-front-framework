## 一个适用于vue1.0的前段框架标准
### 目录介绍
##### static文件夹中存放静态文件中，包括js，img，css等。
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

组件用法示例介绍
------

>1.tab组件

用法示例：
```html

<tab :datas="states" :current-val="currentState"></tab>

```

```javascript

<script>
	import tab from './../components/tab.vue';
	export default{
		components:{
			tab
		},
		data(){
			return{
				states:[
				{ text:'待发货', value:'1' },
				{ text:'已发货', value:'2' },
				{ text:'已完成', value:'3' },
				{ text:'全部', value:'4' },
				{ text:'删除的订单', value:'5' },
				],
				currentState:'1'
			};
		},
	};
</script>

```

-------

>2.calendar组件

字段解释：

# Options
* :show    是否显示
* :type    date|datetime
* :value	默认值
* :begin  可选开始时间
* :end    可选结束时间
* :x      显示x坐标
* :y      显示y坐标
* :range  是否多选
* :weeks	星期标题 （非必需）
* :months	月份标题  （非必需）
* :sep		分隔符

用法示例：
```html
<calendar 
	:show.sync="calendar.show"
	:type="calendar.type"
	:value.sync="calendar.value" 
	:x="calendar.x" 
	:y="calendar.y" 
	:begin.sync="calendar.begin" 
	:end.sync="calendar.end" 
	:range.sync="calendar.range"
	:sep.sync="calendar.sep">

```

```javascript
	<script>
	import calendar from './../components/calendar.vue';
	export default{
		components:{
			calendar
		},
		data(){
			return{
				calendar:{
					show:false,
					x:0,
					y:0,
					picker:'',
					type:'date',
					begin:'',
					end:'',
					value:'',
					sep:'/',
					range:true,
            }
        };
    },
    ready(){
    },
    watch:{
    	'calendar.value' (value) {
    		this.calendar.value=value;
    		this.begin = value.split('~')[0];
    		this.end = value.split('~')[1];
    	}
    }, 
    computed:{
    },
    methods:{
    	// 打开显示选择器
    	open(e) {
            this.calendar.show=true;

            // 设置显示坐标
            this.calendar.x=e.target.offsetLeft;
            this.calendar.y=e.target.offsetTop+e.target.offsetHeight+8;
        }
    }
    </script>

```
---------

>3.table组件

字段解释:
* :datas      需要展示的数据   
* :columns    表头名段及字段 
* :total	  数据总数
* :months	  每页展示数

用法示例:
```html
	<grid :data="datas" :columns="columns" :total="total" :pagesize="limit"></grid>
```

```javascript
	<script>
	import grid from './../components/table.vue';
	export default {
		components:{
			grid
		},
		data() {
			return {
				gridData:[
					{ index:51639, shopName:'XgouTest[营业中]', number:'136xxxxxxxx', dyj:'', dkq:'', POS:'' }
				],
				columns:{
					index:{
						text:'门店编号',
						render:(value, record, index) => value
					},
					shopName:{
						text:'门店名称',
						render:(value, record, index) => value
					},
					number:{
						text:'门店电话',
						render:(value, record, index) => value
					},
					dyj:{
						text:'打印机',
						render:(value, record, index) => value
					},
					dkq:{
						text:'读卡器',
						render:(value, record, index) => value
					},
					POS:{
						text:'POS机',
						render:(value, record, index) => value
					},
				},
				limit: 15,
				total:0
			};
		}
	};
</script>
```
------

>4.pagination组件

字段解释:
* :totalRows      需要展示的数据总数   
* :currentPage    当前页 
* :perPage	  每页展示数

```html
	<pagination :total-rows="total" :current-page.sync="current" :per-page="limit"></pagination>
```
```javascript
<script>
	import pagination from './../components/pagination.vue';
	export default{
		components:{
			pagination
		},
		data(){
			return{
				limit:15,
				total:0,
				current:1,
			};
		},
    }
};
</script>


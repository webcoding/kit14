webpackJsonp([9,60],{"6nfs":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(a("woOf")),i=l(a("Dd8w")),r=l(a("5oG8"));function l(t){return t&&t.__esModule?t:{default:t}}var o={add:r.default.addJob,edit:r.default.updateJob},s={id:void 0,name:"",method:"",params:"",cron:"",remark:"",state:0};e.default={data:function(){return{visible:!1,roleList:[],dataForm:(0,i.default)({},s),dataRule:{}}},methods:{resetDataForm:function(){this.dataForm=(0,i.default)({},s)},init:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.resetDataForm(),(0,n.default)(this.dataForm,e),this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields()})},dataFormSubmit:function(){var t=this;console.log(this.dataForm);var e=!this.dataForm.id;this.$refs.dataForm.validate(function(a){(console.log(t.dataForm),a)&&o[e?"add":"edit"]((0,i.default)({},t.dataForm),function(a){t.visible=!1,t.$notify({title:"成功",message:e?"创建成功":"编辑成功",type:"success",duration:2e3}),t.$emit("refreshDataList")},function(t){})})}}},t.exports=e.default},"D+Ny":function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{model:t.dataForm,inline:!0}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:"名称",width:"200",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.dataForm.keywords,callback:function(e){t.$set(t.dataForm,"keywords",e)},expression:"dataForm.keywords"}})],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"success",icon:"el-icon-edit"},on:{click:function(e){t.handleAddOrUpdate()}}},[t._v("新增")]),t._v(" "),a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.handleDelete()}}},[t._v("批量删除")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],key:t.tableKey,attrs:{data:t.dataList,"element-loading-text":"给我一点时间",border:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",width:"120",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"method","header-align":"center",align:"center",width:"120",label:"方法名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"params","header-align":"center",align:"center",width:"120",label:"参数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cron","header-align":"center",align:"center",width:"120",label:"表达式"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark","header-align":"center",align:"center",width:"120",label:"备注"}}),t._v(" "),a("el-table-column",{attrs:{prop:"state","header-align":"center",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.state?a("el-tag",{attrs:{size:"small"}},[t._v("正常")]):t._e(),t._v(" "),1===e.row.state?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v("禁用")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"300",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleAddOrUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDelete(e.row.id)}}},[t._v("删除")]),t._v(" "),1===e.row.status?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handlePause(e.row.id)}}},[t._v("暂停")]):t._e(),t._v(" "),2===e.row.status?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleResume(e.row.id)}}},[t._v("恢复")]):t._e(),t._v(" "),[0,3].includes(e.row.status)?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleStart(e.row.id)}}},[t._v("立即执行")]):t._e()]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container",staticStyle:{"margin-top":"16px"}},[a("el-pagination",{attrs:{background:"","current-page":t.pageIndex,"page-size":t.pageLimit,total:t.totalCount,"page-sizes":[10,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)},i=[]},DNrE:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},FTdX:function(t,e,a){var n=a("DNrE");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("rjj0").default)("6b23891c",n,!0,{})},FsVI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("6nfs"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var l=a("Puy7"),o=a("XyMi"),s=Object(o.a)(i.a,l.a,l.b,!1,null,null,null);e.default=s.exports},L3xU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(a("BO1k")),i=s(a("Dd8w")),r=s(a("5oG8")),l=s(a("cAgV")),o=s(a("FsVI"));function s(t){return t&&t.__esModule?t:{default:t}}var d={list:r.default.getJob,add:r.default.addJob,edit:r.default.updateJob,del:r.default.delJob,pause:r.default.jobPause,resume:r.default.jobResume,start:r.default.jobStart};e.default={name:"sys_job",components:{AddOrUpdate:o.default},directives:{waves:l.default},data:function(){return{dataForm:{keywords:""},tableKey:0,pageIndex:1,pageLimit:10,totalCount:0,dataList:[],dataListLoading:!0,dataListSelections:[],addOrUpdateVisible:!1}},filters:{},created:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,d.list((0,i.default)({},this.dataForm,{page:this.pageIndex,size:this.pageLimit}),function(e){t.dataListLoading=!1,t.dataList=e.data.list,t.totalCount=e.data.total},function(t){})},handlePause:function(t,e){d.pause({},function(t){})},handleResume:function(t,e){},handleStart:function(t,e){},log:function(){},handleFilter:function(){this.pageIndex=1,this.getDataList()},handleSizeChange:function(t){this.pageLimit=t,this.getDataList()},handleCurrentChange:function(t){this.pageIndex=t,this.getDataList()},handleSelectionChange:function(t){this.dataListSelections=t},handleAddOrUpdate:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},updateItem:function(t,e){if("add"===e)this.dataList.unshift(t);else{var a=!0,i=!1,r=void 0;try{for(var l,o=(0,n.default)(this.dataList);!(a=(l=o.next()).done);a=!0){var s=l.value;if(s.id===t.id){var d=this.dataList.indexOf(s);this.dataList.splice(d,1,t);break}}}catch(t){i=!0,r=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw r}}}},handleDelete:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});d.del({ids:a},function(t){e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),e.getDataList()},function(t){e.$message({message:"删除失败",type:"danger"})})}}},t.exports=e.default},Puy7:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{"label-width":"80px",model:t.dataForm,rules:t.dataRule},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"名称"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"方法名称",prop:"method"}},[a("el-input",{attrs:{placeholder:"方法名称"},model:{value:t.dataForm.method,callback:function(e){t.$set(t.dataForm,"method",e)},expression:"dataForm.method"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"参数",prop:"params"}},[a("el-input",{attrs:{placeholder:"参数"},model:{value:t.dataForm.params,callback:function(e){t.$set(t.dataForm,"params",e)},expression:"dataForm.params"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"表达式",prop:"cron"}},[a("el-input",{attrs:{placeholder:"表达式"},model:{value:t.dataForm.cron,callback:function(e){t.$set(t.dataForm,"cron",e)},expression:"dataForm.cron"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:t.dataForm.remark,callback:function(e){t.$set(t.dataForm,"remark",e)},expression:"dataForm.remark"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否禁用",size:"mini",prop:"state"}},[a("el-radio-group",{model:{value:t.dataForm.state,callback:function(e){t.$set(t.dataForm,"state",e)},expression:"dataForm.state"}},[a("el-radio",{attrs:{label:0}},[t._v("正常")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("禁用")])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},i=[]},wmKo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("L3xU"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var l=a("D+Ny"),o=a("XyMi");var s=function(t){a("FTdX")},d=Object(o.a)(i.a,l.a,l.b,!1,s,"data-v-5ec0b97b",null);e.default=d.exports}});
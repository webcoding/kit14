webpackJsonp([28],{Y6z6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,l=n("Dd8w"),i=(a=l)&&a.__esModule?a:{default:a},o=n("OVQD");e.default={data:function(){return{list:null,listLoading:!0,queryForm:{name:""},pagination:{current_page:1,per_page:20,total:0}}},filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,(0,o.getTableList)((0,i.default)({},this.listQuery)).then(function(e){t.list=e.data.items,t.listLoading=!1})},paginate:function(t){(0,o.getTableList)(t)},addUser:function(){},onUpdate:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];console.log(e)},onChangeStatus:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];console.log(e)},onRemove:function(t){var e=this;this.$confirm("确认删除该专题?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.onDelete(t)}).catch(function(){})},onDelete:function(t){var e=this;this.$api.removeZt({id:t}).then(function(t){e.$message({message:"专题删除成功",type:"success"}),e.paginate(e.pagination.current_page)}).catch(function(t){})}}},t.exports=e.default},YBQJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Y6z6"),l=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var o=n("q1Te"),r=n("XyMi"),s=Object(r.a)(l.a,o.a,o.b,!1,null,null,null);e.default=s.exports},q1Te:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return l});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{attrs:{inline:!0,model:t.queryForm}},[n("el-form-item",{attrs:{label:""}},[n("el-input",{attrs:{placeholder:"姓名或账户"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.paginate(1)}},model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.paginate(1)}}},[t._v("搜索")]),t._v(" "),n("el-button",{on:{click:t.addUser}},[t._v("添加")])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading","header-row-class-name":"el-table-head",border:"",stripe:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Title",prop:"title","min-width":"200"}}),t._v(" "),n("el-table-column",{attrs:{label:"Author",prop:"author"}}),t._v(" "),n("el-table-column",{attrs:{label:"Pageviews",prop:"pageviews",width:"110"}}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Display_time",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.display_time))])]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{path:"/example"}}},[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){n.preventDefault(),n.stopPropagation(),t.onUpdate(e.row.id,e.row.channel)}}},[t._v("编辑")])],1),t._v(" "),n("el-button",{attrs:{type:"text",size:"small",disabled:!!e.row.status},on:{click:function(n){t.onRemove(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)},l=[]}});
webpackJsonp([3,29],{"05Gv":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=u(a("Dd8w")),r=u(a("bOdI")),o=u(a("5oG8")),l=u(a("cAgV")),s=a("0xDb"),d=u(a("ZNy4")),c=u(a("cFZF"));function u(e){return e&&e.__esModule?e:{default:e}}var p={add:o.default.addAuth,del:o.default.delAuth,edit:o.default.updateAuth,list:o.default.getAuth};t.default={name:"sys_menu",components:(n={},(0,r.default)(n,d.default.name,d.default),(0,r.default)(n,"AddOrUpdate",c.default),n),directives:{waves:l.default},data:function(){return{dataForm:{keywords:""},tableKey:0,dataList:[],dataListLoading:!0,dataListSelections:[],addOrUpdateVisible:!1}},filters:{},created:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,p.list((0,i.default)({},this.dataForm),function(t){e.dataListLoading=!1,e.dataList=(0,s.treeDataTranslate)(t.data)},function(e){})},handleFilter:function(){this.getDataList()},handleSizeChange:function(e){this.getDataList()},handleCurrentChange:function(e){this.getDataList()},handleSelectionChange:function(e){this.dataListSelections=e},handleAddOrUpdate:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},handleDelete:function(e){var t=this,a=e?[e]:[];p.del({ids:a},function(e){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),t.getDataList()},function(e){t.$message({message:"删除失败",type:"danger"})})}}},e.exports=t.default},"3FGQ":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},Bxsm:function(e,t,a){var n=a("3FGQ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("rjj0").default)("4c56bf50",n,!0,{})},Fupj:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{model:e.dataForm,inline:!0}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:"搜索关键字",width:"200",clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.dataForm.keywords,callback:function(t){e.$set(e.dataForm,"keywords",t)},expression:"dataForm.keywords"}})],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"success",icon:"el-icon-edit"},on:{click:function(t){e.handleAddOrUpdate()}}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],key:e.tableKey,attrs:{data:e.dataList,"element-loading-text":"给我一点时间",border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("table-tree-column",{attrs:{prop:"name","header-align":"center",treeKey:"id",width:"180",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("icon-svg",{attrs:{"icon-class":e.row.icon||"menu"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.type?a("el-tag",{attrs:{size:"small"}},[e._v("目录")]):"1"===t.row.type?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("菜单")]):"2"===t.row.type?a("el-tag",{attrs:{size:"small",type:"info"}},[e._v("按钮")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"position","header-align":"center",align:"center",label:"排序号"}}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",width:"200","show-overflow-tooltip":!0,label:"菜单URL"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s("2"!==t.row.type?t.row.link:"")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"permCode","header-align":"center",width:"150","show-overflow-tooltip":!0,label:"授权标识"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleAddOrUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.handleDelete(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},i=[]},FxVX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Array.isArray;t.default={name:"table-tree-column",props:{prop:{type:String},treeKey:{type:String,default:"id"},parentKey:{type:String,default:"parentId"},levelKey:{type:String,default:"_level"},childKey:{type:String,default:"children"}},methods:{childStyles:function(e){return{"padding-left":(e[this.levelKey]>1?8*e[this.levelKey]:0)+"px"}},iconClasses:function(e){return[e._expanded?"el-icon-caret-bottom":"el-icon-caret-right"]},iconStyles:function(e){return{visibility:this.hasChild(e)?"visible":"hidden"}},hasChild:function(e){return n(e[this.childKey])&&e[this.childKey].length>=1||!1},toggleHandle:function(e,t){var a=this;if(this.hasChild(t)){var n=this.$parent.store.states.data.slice(0);n[e]._expanded=!n[e]._expanded,n=n[e]._expanded?n.splice(0,e+1).concat(t[this.childKey]).concat(n):this.removeChildNode(n,t[this.treeKey]),this.$parent.store.commit("setData",n),this.$nextTick(function(){a.$parent.doLayout()})}},removeChildNode:function(e,t){var a=n(t)?t:[t];if(t.length<=0)return e;for(var i=[],r=0;r<e.length;r++)-1!==a.indexOf(e[r][this.parentKey])&&-1===a.indexOf(e[r][this.treeKey])&&(i.push(e.splice(r,1)[0][this.treeKey]),r--);return this.removeChildNode(e,i)}}},e.exports=t.default},R1Gs:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table-column",e._b({attrs:{prop:e.prop},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:e.childStyles(t.row),on:{click:function(a){a.preventDefault(),e.toggleHandle(t.$index,t.row)}}},[a("i",{class:e.iconClasses(t.row),style:e.iconStyles(t.row)}),e._v("\n      "+e._s(t.row[e.prop])+"\n    ")])]}}])},"el-table-column",e.$attrs,!1))},i=[]},ZNy4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("FxVX"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);var o=a("R1Gs"),l=a("XyMi"),s=Object(l.a)(i.a,o.a,o.b,!1,null,null,null);t.default=s.exports},cFZF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("wX2O"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);var o=a("oqy+"),l=a("XyMi");var s=function(e){a("zhau")},d=Object(l.a)(i.a,o.a,o.b,!1,s,null,null);t.default=d.exports},gpws:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("05Gv"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);var o=a("Fupj"),l=a("XyMi");var s=function(e){a("Bxsm")},d=Object(l.a)(i.a,o.a,o.b,!1,s,"data-v-b082c398",null);t.default=d.exports},"oqy+":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{"label-width":"80px",model:e.dataForm,rules:e.dataRule},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-radio-group",{model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},e._l(e.dataForm.typeList,function(t,n){return a("el-radio",{key:n,attrs:{label:n}},[e._v(e._s(t))])}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.dataForm.typeList[e.dataForm.type]+"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:e.dataForm.typeList[e.dataForm.type]+"名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上级菜单",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-start",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"id",accordion:"","default-expand-all":!1,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":e.handleMenuListTreeCurrentChange}})],1),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:e.dataForm.parentName,callback:function(t){e.$set(e.dataForm,"parentName",t)},expression:"dataForm.parentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"菜单路由",prop:"link"}},[a("el-input",{attrs:{placeholder:"菜单路由"},model:{value:e.dataForm.link,callback:function(t){e.$set(e.dataForm,"link",t)},expression:"dataForm.link"}})],1),e._v(" "),0!==e.dataForm.type?a("el-form-item",{attrs:{label:"授权标识",prop:"perms"}},[a("el-input",{attrs:{placeholder:"多个用逗号分隔, 如: user:list,user:create"},model:{value:e.dataForm.perms,callback:function(t){e.$set(e.dataForm,"perms",t)},expression:"dataForm.perms"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"排序号",prop:"position"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序号"},model:{value:e.dataForm.position,callback:function(t){e.$set(e.dataForm,"position",t)},expression:"dataForm.position"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"菜单图标",prop:"icon"}},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-popover",{ref:"iconListPopover",attrs:{placement:"bottom-start",trigger:"click","popper-class":"menu__icon-popover"}},[a("div",{staticClass:"menu__icon-list"},e._l(e.iconList,function(t,n){return a("el-button",{key:n,class:{"is-active":t===e.dataForm.icon},on:{click:function(a){e.handleIconActive(t)}}},[a("icon-svg",{attrs:{"icon-class":t}})],1)}))]),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:iconListPopover",arg:"iconListPopover"}],staticClass:"icon-list__input",attrs:{readonly:!0,placeholder:"菜单图标名称"},model:{value:e.dataForm.icon,callback:function(t){e.$set(e.dataForm,"icon",t)},expression:"dataForm.icon"}})],1),e._v(" "),a("el-col",{staticClass:"icon-list__tips",attrs:{span:2}},[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("全站推荐使用SVG Sprite, 详细请参考:"),a("a",{attrs:{href:"//github.com/daxiongYang/renren-fast-vue/blob/master/src/icons/index.js",target:"_blank"}},[e._v("icons/index.js")]),e._v("描述")]),e._v(" "),a("i",{staticClass:"el-icon-warning"})])],1)],1)],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"菜单状态",prop:"visible"}},[a("el-switch",{model:{value:e.dataForm.visible,callback:function(t){e.$set(e.dataForm,"visible",t)},expression:"dataForm.visible"}}),e._v(" "+e._s(e.dataForm.visible?"显示":"隐藏")+"\n    ")],1):e._e()],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},i=[]},uepl:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".menu__icon-popover{width:50%}.icon-list__input>.el-input__inner,.menu-list__input>.el-input__inner{cursor:pointer}__icon-popover{max-width:3.7rem}__icon-list{max-height:1.8rem;padding:0;margin:-.08rem 0 0 -.08rem}__icon-list>.el-button{padding:.08rem;margin:.08rem 0 0 .08rem}__icon-list>.el-button>span{display:inline-block;vertical-align:middle;width:.18rem;height:.18rem;font-size:.18rem}.icon-list__tips{font-size:.18rem;text-align:center;color:#e6a23c;cursor:pointer}",""])},wX2O:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a("woOf")),i=s(a("Dd8w")),r=a("0xDb"),o=s(a("5oG8")),l=s(a("Q7M0"));function s(e){return e&&e.__esModule?e:{default:e}}var d={add:o.default.addAuth,edit:o.default.updateAuth,list:o.default.getAuth},c={id:void 0,type:0,typeList:["目录","菜单","按钮"],name:"",parentId:0,parentName:"",url:"",perms:"",position:0,icon:"",iconList:[],visible:!0};t.default={data:function(){var e=this;return{visible:!1,roleList:[],dataForm:(0,i.default)({},c),dataRule:{name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级菜单不能为空",trigger:"change"}],url:[{validator:function(t,a,n){1!==e.dataForm.type||/\S/.test(a)?n():n(new Error("菜单URL不能为空"))},trigger:"blur"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},created:function(){this.iconList=l.default.getNameList()},methods:{resetDataForm:function(){this.dataForm=(0,i.default)({},c)},init:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.resetDataForm(),this.dataForm.id=t.id||0,d.list({type:1},function(a){e.menuList=(0,r.treeDataTranslate)(a.data),e.visible=!0,e.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&((0,n.default)(e.dataForm,t),e.dataForm.type=Number(t.type),e.menuListTreeSetCurrentNode())})},function(e){})},handleMenuListTreeCurrentChange:function(e,t){this.dataForm.parentId=e.id,this.dataForm.parentName=e.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},handleIconActive:function(e){this.dataForm.icon=e},dataFormSubmit:function(){var e=this;console.log(this.dataForm);var t=!this.dataForm.id;this.$refs.dataForm.validate(function(a){(console.log(e.dataForm),a)&&d[t?"add":"edit"]((0,i.default)({},e.dataForm),function(a){e.visible=!1,e.$notify({title:"成功",message:t?"创建成功":"编辑成功",type:"success",duration:2e3}),e.$emit("refreshDataList")},function(e){})})}}},e.exports=t.default},zhau:function(e,t,a){var n=a("uepl");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("rjj0").default)("fad9b1d2",n,!0,{})}});
webpackJsonp([55],{"+WK4":function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return o});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{"label-width":"80px",model:t.dataForm,rules:t.dataRule},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{placeholder:"登录帐号"},model:{value:t.dataForm.username,callback:function(e){t.$set(t.dataForm,"username",e)},expression:"dataForm.username"}})],1),t._v(" "),a("el-form-item",{class:{"is-required":!t.dataForm.id},attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.dataForm.password,callback:function(e){t.$set(t.dataForm,"password",e)},expression:"dataForm.password"}})],1),t._v(" "),a("el-form-item",{class:{"is-required":!t.dataForm.id},attrs:{label:"确认密码",prop:"comfirmPassword"}},[a("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.dataForm.comfirmPassword,callback:function(e){t.$set(t.dataForm,"comfirmPassword",e)},expression:"dataForm.comfirmPassword"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"邮箱"},model:{value:t.dataForm.email,callback:function(e){t.$set(t.dataForm,"email",e)},expression:"dataForm.email"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"手机号"},model:{value:t.dataForm.mobile,callback:function(e){t.$set(t.dataForm,"mobile",e)},expression:"dataForm.mobile"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"description"}},[a("el-input",{model:{value:t.dataForm.description,callback:function(e){t.$set(t.dataForm,"description",e)},expression:"dataForm.description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",size:"mini",prop:"status"}},[a("el-radio-group",{model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}},[a("el-radio",{attrs:{label:0}},[t._v("禁用")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("正常")])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},o=[]},"6nfs":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(a("woOf")),o=l(a("Dd8w")),i=a("E4LH"),s=l(a("5oG8"));function l(t){return t&&t.__esModule?t:{default:t}}var d={add:s.default.addUser,edit:s.default.updateUser},n={id:void 0,email:"",password:"",comfirmPassword:"",roleIds:[],username:"",mobile:"",description:"",status:1};e.default={data:function(){var t=this;return{visible:!1,roleList:[],dataForm:(0,o.default)({},n),dataRule:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{validator:function(e,a,r){t.dataForm.id||/\S/.test(a)?r():r(new Error("密码不能为空"))},trigger:"blur"}],comfirmPassword:[{validator:function(e,a,r){t.dataForm.id||/\S/.test(a)?t.dataForm.password!==a?r(new Error("确认密码与密码输入不一致")):r():r(new Error("确认密码不能为空"))},trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{validator:function(t,e,a){(0,i.isEmail)(e)?a():a(new Error("邮箱格式错误"))},trigger:"blur"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:function(t,e,a){(0,i.isMobile)(e)?a():a(new Error("手机号格式错误"))},trigger:"blur"}]}}},methods:{resetDataForm:function(){this.dataForm=(0,o.default)({},n)},init:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.resetDataForm(),(0,r.default)(this.dataForm,e),this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields()})},dataFormSubmit:function(){var t=this;console.log(this.dataForm);var e=!this.dataForm.id;this.$refs.dataForm.validate(function(a){(console.log(t.dataForm),a)&&d[e?"add":"edit"]((0,o.default)({},t.dataForm),function(a){t.visible=!1,t.$notify({title:"成功",message:e?"创建成功":"编辑成功",type:"success",duration:2e3}),t.$emit("refreshDataList")},function(t){})})}}},t.exports=e.default},FsVI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("6nfs"),o=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);var s=a("+WK4"),l=a("XyMi"),d=Object(l.a)(o.a,s.a,s.b,!1,null,null,null);e.default=d.exports}});
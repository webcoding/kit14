webpackJsonp([34],{NpFo:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Todo",props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(t,e,o){var n=e.value,i=o.context;n&&i.$nextTick(function(){t.focus()})}},methods:{deleteTodo:function(t){this.$emit("deleteTodo",t)},editTodo:function(t){var e=t.todo,o=t.value;this.$emit("editTodo",{todo:e,value:o})},toggleTodo:function(t){this.$emit("toggleTodo",t)},doneEdit:function(t){var e=t.target.value.trim(),o=this.todo;e?this.editing&&(this.editTodo({todo:o,value:e}),this.editing=!1):this.deleteTodo({todo:o})},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}}},t.exports=e.default},ojOG:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[o("div",{staticClass:"view"},[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){t.toggleTodo(t.todo)}}}),t._v(" "),o("label",{domProps:{textContent:t._s(t.todo.text)},on:{dblclick:function(e){t.editing=!0}}}),t._v(" "),o("button",{staticClass:"destroy",on:{click:function(e){t.deleteTodo(t.todo)}}})]),t._v(" "),o("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doneEdit(e):null},function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.cancelEdit(e):null}],blur:t.doneEdit}})])},i=[]},xjg9:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("NpFo"),i=o.n(n);for(var d in n)"default"!==d&&function(t){o.d(e,t,function(){return n[t]})}(d);var u=o("ojOG"),s=o("XyMi"),c=Object(s.a)(i.a,u.a,u.b,!1,null,null,null);e.default=c.exports}});
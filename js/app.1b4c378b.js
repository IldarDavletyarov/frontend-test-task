(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/frontend-test-task/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"4a73":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("4160"),n("a434"),n("b0c0"),n("ac1f"),n("841c"),n("159b");var o,a=n("2909"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Project")},s=[],c=(n("96cf"),n("1da1")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-sm p-4",staticStyle:{"max-width":"50em"},on:{"!keydown":[function(e){return(e.type.indexOf("key")||66===e.keyCode)&&e.ctrlKey?(e.preventDefault(),e.stopPropagation(),t.download(e)):null},function(e){return(e.type.indexOf("key")||66===e.keyCode)&&e.metaKey?(e.preventDefault(),e.stopPropagation(),t.download(e)):null}],copy:function(e){return e.preventDefault(),t.copy(e)},paste:function(e){return e.preventDefault(),t.paste(e)}}},[n("Alert"),t.inStart?n("div",{staticClass:"mt-3"},[n("Name")],1):n("button",{staticClass:"btn m-2 transition neo position-relative p-4",class:[t.$store.state.onDrag?"pl-5 pr-5":"",{add:t.dragBack}],on:{dragover:function(e){e.preventDefault(),t.dragBack=!0},dragleave:function(e){t.dragBack=!1},drop:t.onDropBack,click:t.back}},[n("icon",{attrs:{"class-name":"center",width:"2em",height:"2em"}},[n("icon-back")],1)],1),n("ToDo"),n("div",{staticClass:"transition",class:{hidden:t.$store.state.onDrag}},[t.inStart?n("Import"):t._e(),n("div",{staticClass:"mt-5 d-flex justify-content-around"},[t.inStart?n("div",{staticClass:"text-center",attrs:{role:"button"},on:{click:t.download}},[n("icon",{attrs:{width:"2em",height:"2em","icon-color":"black","class-name":"m-2"}},[n("icon-export")],1),n("div",[t._v("Download this .todo file")])],1):t._e(),t.inStart?t._e():n("div",{staticClass:"text-center",attrs:{role:"button"},on:{click:t.cut}},[n("svg",{staticClass:"m-2",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm-1 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"}})]),t._m(0)]),n("div",{staticClass:"text-center",attrs:{role:"button"},on:{click:t.copy}},[n("icon",{attrs:{width:"2em",height:"2em","icon-color":"black","class-name":"m-2"}},[n("icon-copy")],1),t._m(1)],1)])],1)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"m-0 p-0"},[t._v(" Cut this todo item ")]),n("small",[t._v("to paste use hot key")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"m-0 p-0"},[t._v(" Copy this todo item ")]),n("small",[t._v("to paste use hot key")])])}],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"neo m-2 p-3 position-relative",on:{copy:function(t){t.preventDefault()}}},[t.inStart?t._e():n("div",{staticClass:"d-flex justify-content-between"},[n("div",{attrs:{role:"button"},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[n("icon",{attrs:{height:"2em",width:"2em","icon-color":t.color}},[n("icon-v")],1)],1),n("div",{attrs:{role:"button"},on:{click:function(e){return e.stopPropagation(),t.remove(e)}}},[n("icon",{attrs:{height:"2em",width:"2em","icon-color":"red"}},[n("icon-x")],1)],1)]),t.inStart?t._e():n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.text,expression:"item.text"}],staticClass:"input transition textarea w-100 m-1 pl-2 pr-2 pb-3",attrs:{placeholder:"Your todo",rows:"2",disabled:t.$store.state.onDrag},domProps:{value:t.item.text},on:{input:[function(e){e.target.composing||t.$set(t.item,"text",e.target.value)},t.change],paste:function(t){t.stopPropagation()},copy:function(t){t.stopPropagation()}}}),t._v(" "),n("ToDoList",{attrs:{children:t.item.children}})],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"transition",class:{hidden:t.$store.state.onDrag}},[n("div",{staticClass:"d-flex"},[n("input",{staticClass:"form-control p-3 pl-3 m-2 mb-1 neo search",attrs:{placeholder:"Search todo",type:"text"},domProps:{value:t.search},on:{copy:function(t){if(t.stopPropagation(),t.target!==t.currentTarget)return null},paste:function(t){t.stopPropagation()},cut:function(t){t.stopPropagation()},input:t.change}})]),n("Tags")],1),n("div",t._l(t.searchedList,(function(t){return n("ToDoShort",{key:t.index,attrs:{index:t.index,item:t.child}})})),1),t.searchedList.length?t._e():n("div",{staticClass:"alert alert-light text-center",attrs:{role:"alert"}},[t._v(" Nothing found ")]),n("div",{staticClass:"p-2"},[n("transition",{attrs:{name:"fadeHeight",mode:"out-in"}},[t.$store.state.onDrag?t._e():n("AddButton",{attrs:{"click-function":t.add,"class-name":"d-flex p-2 pl-3",placeholder:"add todo"}})],1)],1)])},h=[],m=(n("caad"),n("d81d"),n("2532"),n("5530")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex neo box btn add",class:t.className},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.addText,expression:"addText"}],staticClass:"container-fluid ml-3 input",attrs:{size:"10%",type:"text",placeholder:t.placeholder},domProps:{value:t.addText},on:{copy:function(t){t.stopPropagation()},paste:function(t){t.stopPropagation()},cut:function(t){t.stopPropagation()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.clickAndClean(e))},input:function(e){e.target.composing||(t.addText=e.target.value)}}}),n("div",{staticClass:"position-relative pr-4",on:{click:function(e){return e.stopPropagation(),t.clickAndClean(e)}}},[n("icon",{attrs:{"class-name":"center"}},[n("icon-plus")],1)],1)])])},v=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.className,attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 16 16"}},[n("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])},b=[],y=(n("a9e3"),{props:{width:{type:[Number,String],default:"1.5em"},height:{type:[Number,String],default:"1.5em"},iconColor:{type:String,default:"green"},className:{type:String,default:""}}}),k=y,$=n("2877"),w=Object($["a"])(k,x,b,!1,null,null,null),S=w.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}})])},C=[],I={},D=Object($["a"])(I,_,C,!1,null,null,null),O=D.exports,j={name:"AddButton",components:{Icon:S,IconPlus:O},props:["className","placeholder","clickFunction"],data:function(){return{addText:""}},methods:{clickAndClean:function(){""!==this.addText&&(this.clickFunction(this.addText),this.addText="")}}},T=j,A=Object($["a"])(T,g,v,!1,null,null,null),P=A.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex transition p-1",class:{"p-4":t.dragBefore},on:{dragleave:function(e){e.preventDefault(),t.dragBefore=!1},dragover:function(e){e.preventDefault(),t.dragBefore=!0},drop:t.onDropBefore}}),n("div",{staticClass:"d-flex align-items-center ml-2 mr-2 p-2 pl-3 pr-2",class:[t.dragging?"drag pl-4":"neo",{add:t.dragSelf}],attrs:{draggable:t.$store.getters.inSearch,role:"button"},on:{"!dragover":function(e){e.preventDefault(),t.dragSelf=!0},"!dragleave":function(e){e.preventDefault(),t.dragSelf=!1},dragend:t.onDragEnd,dragstart:t.onDragStart,drop:t.onDrop,click:t.click}},[t.dragging?t._e():n("div",{staticClass:"mr-1",on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[n("icon",{attrs:{"icon-color":t.color}},[n("icon-v")],1)],1),n("div",{staticClass:"size ml-2"},[t._v(" "+t._s(t.item.text)+" ")]),t.dragging?t._e():n("div",{staticClass:"ml-auto position-relative pr-4",on:{click:function(e){return e.stopPropagation(),t.remove(e)}}},[n("icon",{attrs:{"icon-color":"red","class-name":"center"}},[n("icon-x")],1)],1)]),n("div",{staticClass:"d-flex transition p-1",class:{"p-4":t.dragAfter},on:{dragleave:function(e){e.preventDefault(),t.dragAfter=!1},dragover:function(e){e.preventDefault(),t.dragAfter=!0},drop:t.onDropAfter}})])},H=[],N={computed:{color:function(){return this.item.closed?"green":"grey"}}},B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("path",{attrs:{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}})])},z=[],M={},L=Object($["a"])(M,B,z,!1,null,null,null),V=L.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("path",{attrs:{"fill-rule":"evenodd",d:"M13.854 3.646a.5.5 0 0\n                       1 0 .708l-7 7a.5.5 0 0 1-.708\n                       0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5\n                        10.293l6.646-6.647a.5.5 0 0 1 .708 0z"}})])},R=[],J={},U=Object($["a"])(J,F,R,!1,null,null,null),W=U.exports,K={name:"ToDo",components:{IconX:V,IconV:W,Icon:S},mixins:[N],props:["item","index"],data:function(){return{dragging:!1,dragBefore:!1,dragAfter:!1,dragSelf:!1}},methods:{onDrop:function(t){this.dragSelf=!1;var e=t.dataTransfer.getData("text/plain");+e!==+this.index&&(this.$store.dispatch("dropInto",{target:this.index,drop:e}),this.$eventHub.$emit("alert","moved inward"))},onDropSide:function(t,e){var n=t.dataTransfer.getData("text/plain");this.$store.dispatch("dropSide",{target:this.index,drop:n,isAfter:e})},onDropBefore:function(t){this.dragBefore=!1,this.onDropSide(t,!1)},onDropAfter:function(t){this.dragAfter=!1,this.onDropSide(t,!0)},onDragStart:function(t){t.dataTransfer.setData("text/plain",this.index),this.dragging=!0,this.$store.commit("onDrag",!0)},onDragEnd:function(){this.dragging=!1,this.$store.commit("onDrag",!1)},click:function(t){t.target.blur(),this.$store.dispatch("goTo",this.index)},remove:function(){this.$store.dispatch("deleteItem",this.index)},close:function(){this.$store.dispatch("closeItem",this.index)}}},X=K,q=Object($["a"])(X,E,H,!1,null,null,null),G=q.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-wrap mb-3 pl-1 pr-1"},[n("AddButton",{attrs:{"class-name":"p-0 m-2 col-xs-2",placeholder:"add regex","click-function":t.add}}),t._l(t.filters,(function(t,e){return n("Tag",{key:e+"f",attrs:{index:e,tag:t}})}))],2)},Q=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex m-2 neo box add position-relative",class:{select:t.tag.selected},attrs:{role:"button"},on:{click:t.click,keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])||e.target!==e.currentTarget?null:(e.stopPropagation(),t.remove(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.target!==e.currentTarget?null:(e.stopPropagation(),t.click(e))}]}},[n("div",{staticClass:"m-0 ml-2 mr-2"},[t._v(" "+t._s(t.tag.text)+" ")]),"init"!==t.tag.type?n("div",{staticClass:"position-relative pr-4",attrs:{role:"button"},on:{click:function(e){return e.stopPropagation(),t.remove(e)}}},[n("icon",{attrs:{"icon-color":"red","class-name":"center"}},[n("icon-x")],1)],1):t._e()])},tt=[],et={name:"Tag",components:{Icon:S,IconX:V},props:["tag","index"],methods:{remove:function(){"init"!==this.tag.type&&this.$store.dispatch("deleteFilter",this.index)},click:function(){this.$store.dispatch("toggleFilter",this.index)}}},nt=et,ot=Object($["a"])(nt,Z,tt,!1,null,null,null),at=ot.exports,rt={name:"Tags",components:{AddButton:P,Tag:at},computed:{filters:function(){return this.$store.state.filters}},methods:{add:function(t){this.$store.dispatch("addRegex",t)}}},it=rt,st=Object($["a"])(it,Y,Q,!1,null,null,null),ct=st.exports,lt=n("2f62"),dt={name:"ToDoList",components:{Tags:ct,AddButton:P,ToDoShort:G},props:["children"],computed:Object(m["a"])(Object(m["a"])({},Object(lt["b"])(["root","filters","search"])),{},{searchedList:function(){var t=this;return this.children.map((function(t,e){return{child:t,index:e}})).filter((function(e){var n=e.child.text.toLowerCase().includes(t.search.toLowerCase());if(!n)return!1;var o={};try{t.filters.filter((function(t){return t.selected})).forEach((function(t){var a=new Function(t.function.args,t.function.body);if(n=n&&a(e.child),!a(e.child))throw o}))}catch(a){if(a===o)return!1;throw a}return!0}))}}),watch:{root:function(){this.$store.dispatch("setSearch","")}},methods:{change:function(t){this.$store.dispatch("setSearch",t.target.value)},add:function(t){this.$store.dispatch("addItem",{text:t,closed:!1,children:[]})}}},ut=dt,pt=Object($["a"])(ut,f,h,!1,null,null,null),ft=pt.exports,ht={name:"ToDo",mixins:[N],components:{ToDoList:ft,Icon:S,IconV:W,IconX:V},computed:{item:function(){return this.$store.getters.getCurrent},inStart:function(){return this.$store.getters.inStart}},methods:{change:function(){this.$store.commit("updateItems")},remove:function(){this.inStart||(this.$store.dispatch("deleteSelf"),this.$eventHub.$emit("alert","item was deleted"))},close:function(){this.$store.dispatch("closeSelf")}}},mt=ht,gt=(n("6299"),Object($["a"])(mt,u,p,!1,null,null,null)),vt=gt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{staticClass:"w-100 input text-center name mx-auto",attrs:{disabled:t.$store.state.onDrag},domProps:{value:t.name},on:{input:t.change}})},bt=[],yt={name:"Name",computed:{name:function(){return this.$store.state.name}},methods:{change:function(t){this.$store.dispatch("setName",t.target.value)}}},kt=yt,$t=Object($["a"])(kt,xt,bt,!1,null,null,null),wt=$t.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-2 mt-5",on:{drop:function(e){return e.preventDefault(),t.dropLoad(e)},dragover:function(t){t.preventDefault()}}},[n("label",{staticClass:"box p-5 container-fluid text-center text-reader mx-auto"},[n("p",{staticClass:"m-0 p-0"},[n("icon",{attrs:{"icon-color":"black",height:"2em",width:"2em"}},[n("icon-import")],1)],1),t._v(" Drop your .todo file to this zone "),n("input",{attrs:{type:"file"},on:{change:t.clickLoad}})])])},_t=[],Ct=(n("a15b"),n("fb6a"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"}})])}),It=[],Dt={},Ot=Object($["a"])(Dt,Ct,It,!1,null,null,null),jt=Ot.exports,Tt={name:"Import",components:{Icon:S,IconImport:jt},methods:{clearInput:function(t){t.files=null,t.value=null},clickLoad:function(t){this.load(t.target.files[0]),this.clearInput(t.target)},dropLoad:function(t){this.load(t.dataTransfer.files[0]),this.clearInput(t.target)},load:function(t){var e=this,n=".todo file loaded successfully",o=new FileReader;o.onload=function(n){e.$store.dispatch("import",{data:JSON.parse(n.target.result),name:t.name.split(".").slice(0,-1).join(".")})};try{o.readAsText(t)}catch(a){n="failed load attempt"}finally{this.$eventHub.$emit("alert",n)}}}},At=Tt,Pt=(n("f9a8"),Object($["a"])(At,St,_t,!1,null,"09cb9f09",null)),Et=Pt.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transition pos m-auto",class:{hidden:t.isHidden}},[n("div",{staticClass:"neo p-2 pl-4 pr-4 text-nowrap"},[t._v(" "+t._s(t.data)+" ")])])},Nt=[],Bt={name:"Alert",data:function(){return{isHidden:!0,data:"",timeout:null}},methods:{change:function(t){var e=this;this.data=t,this.isHidden=!1,clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.isHidden=!0}),2600)}},created:function(){this.$eventHub.$on("alert",this.change)},beforeDestroy:function(){this.$eventHub.off("alert")}},zt=Bt,Mt=(n("d39f"),Object($["a"])(zt,Ht,Nt,!1,null,"e7b11f98",null)),Lt=Mt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"}})])},Ft=[],Rt={},Jt=Object($["a"])(Rt,Vt,Ft,!1,null,null,null),Ut=Jt.exports,Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("path",{attrs:{"fill-rule":"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}}),n("path",{attrs:{d:"M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"}})])},Kt=[],Xt={},qt=Object($["a"])(Xt,Wt,Kt,!1,null,null,null),Gt=qt.exports,Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("path",{attrs:{"fill-rule":"evenodd",d:"M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}})])},Qt=[],Zt={},te=Object($["a"])(Zt,Yt,Qt,!1,null,null,null),ee=te.exports,ne={name:"Project",components:{Alert:Lt,ToDo:vt,Name:wt,Import:Et,Icon:S,IconExport:Ut,IconCopy:Gt,IconBack:ee},data:function(){return{dragBack:!1}},computed:{name:function(){return this.$store.state.name},inStart:function(){return this.$store.getters.inStart}},watch:{name:function(){document.title=this.name}},methods:{cut:function(){this.copy(),this.$store.dispatch("deleteSelf"),this.$eventHub.$emit("alert","cut to clipboard")},copy:function(){var t=this.$store.getters.getCurrent;""===t.text&&(t.text=this.$store.state.name);var e=JSON.stringify(t);this.$clipboard(e),this.$eventHub.$emit("alert","copied to clipboard")},paste:function(t){var e="pasted successfully",n=t.clipboardData.getData("text/plain");try{var o=JSON.parse(n);this.$store.dispatch("addItem",o)}catch(t){e="failed paste attempt"}finally{this.$eventHub.$emit("alert",e)}},onDropBack:function(t){this.dragBack=!1;var e=t.dataTransfer.getData("text/plain");this.$store.dispatch("dropBack",{drop:e}),this.$eventHub.$emit("alert","moved back")},back:function(){this.$store.dispatch("back")},download:function(){this.$store.dispatch("export"),this.$eventHub.$emit("alert",".todo file was downloaded")}},mounted:function(){document.title=this.name}},oe=ne,ae=Object($["a"])(oe,l,d,!1,null,null,null),re=ae.exports,ie={components:{Project:re},methods:{accept:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showUpgradeUI=!1,e.next=3,t.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;this.$workbox&&(this.$workbox.addEventListener("waiting",(function(){t.showUpgradeUI=!0})),this.$workbox.update().then(this.$eventHub("alert","update application")))}},se=ie,ce=(n("034f"),Object($["a"])(se,i,s,!1,null,null,null)),le=ce.exports,de=n("4ae6"),ue=n.n(de),pe=n("acfa");"serviceWorker"in navigator?(o=new pe["a"]("".concat("/frontend-test-task/","service-worker.js")),o.addEventListener("controlling",(function(){window.location.reload()})),o.register()):o=null;var fe=o;r["a"].use(ue.a),r["a"].use(lt["a"]);var he=new r["a"];r["a"].prototype["$eventHub"]=he,r["a"].config.productionTip=!1,r["a"].prototype.$workbox=fe;var me=[{text:"done",type:"init",selected:!1,function:{args:"a",body:"return a.closed"}},{text:"fully done",type:"init",selected:!1,function:{args:"a",body:"let flag = a.closed;if(!flag) return false; const b={};try{ a.children.forEach(c => {if (!c.closed) {throw b}});}catch(e){if(e===b)return false;else throw e;} return true;"}}],ge={text:"",closed:!1,children:[{text:"About this application",closed:!0,children:[{text:"One session - one .todo list",closed:!0,children:[]},{text:".todo list name is title of page",closed:!0,children:[]},{text:"Import & Export .todo list",closed:!0,children:[]},{text:"Drag & Drop on computers and phones",closed:!0,children:[]},{text:"Copy, cut, paste todo items between pages",closed:!0,children:[]},{text:"Searching and filtering with regular expressions",closed:!0,children:[]},{text:"Application was developed for a week as part of a test task for a vacancy",closed:!0,children:[]},{text:"About code",closed:!0,children:[{text:"The code is written in Vue.js, follow this gh-page to open this repository",closed:!0,children:[]},{text:"PWA with Service-Worker, 97 rate",closed:!0,children:[]},{text:'Code quality rating "A" on Code Climate',closed:!0,children:[]},{text:"JSDoc documentation with jsdoc-vuejs",closed:!0,children:[]},{text:"Build size 59KB",closed:!0,children:[]}]}]}]},ve=function(t,e){var n=t;return e.forEach((function(t){n=n.children[t]})),n},xe=new lt["a"].Store({state:{items:JSON.parse(sessionStorage.getItem("items"))||ge,name:sessionStorage.getItem("name")||"New Project",root:JSON.parse(sessionStorage.getItem("root"))||[],search:sessionStorage.getItem("search")||"",filters:JSON.parse(sessionStorage.getItem("filters"))||me,onDrag:!1},mutations:{onDrag:function(t,e){t.onDrag=e},updateFilters:function(t){sessionStorage.setItem("filters",JSON.stringify(t.filters))},updateItems:function(t){sessionStorage.setItem("items",JSON.stringify(t.items))},updateRoot:function(t){sessionStorage.setItem("root",JSON.stringify(t.root))},updateName:function(t){sessionStorage.setItem("name",t.name)},updateSearch:function(t){sessionStorage.setItem("search",t.search)},goTo:function(t,e){t.root.push(e)},back:function(t){t.root.pop()},setName:function(t,e){t.name=e},setSearch:function(t,e){t.search=e},toggleFilter:function(t,e){t.filters[e].selected=!t.filters[e].selected},addRegex:function(t,e){t.filters.push({text:e,selected:!0,type:"regex",function:{args:"a",body:"const r = new RegExp('".concat(e,"', 'g'); return a.text.match(r)")}})},addItem:function(t,e){ve(t.items,t.root).children.push(e)},deleteFilter:function(t,e){t.filters.splice(e,1)},deleteItem:function(t,e){ve(t.items,t.root).children.splice(e,1)},dropSide:function(t,e){if(+e.target!==+e.drop){var n=ve(t.items,t.root),o=n.children[e.drop];e.target<e.drop?(n.children.splice(e.drop,1),n.children.splice(e.target+ +e.isAfter,0,o)):(n.children.splice(e.target+ +e.isAfter,0,o),n.children.splice(e.drop,1))}},dropInto:function(t,e){if(console.log("drop into"),+e.target!==+e.drop){var n=ve(t.items,t.root),o=n.children.splice(e.drop,1)[0];n.children[e.target].children.push(o)}},dropBack:function(t,e){var n=Object(a["a"])(t.root),o=n.pop(),r=ve(t.items,n),i=r.children[o].children.splice(e.drop,1)[0];r.children.push(i)},deleteSelf:function(t){var e=t.root.pop(),n=ve(t.items,t.root);n.children.splice(e,1)},closeItem:function(t,e){var n=ve(t.items,t.root);n.children[e]["closed"]=!n.children[e]["closed"]},closeSelf:function(t){var e=ve(t.items,t.root);e.closed=!e.closed},export:function(t){var e=JSON.stringify(t.items),n="".concat(t.name,".todo"),o="data:text/plain;charset=utf-8,".concat(encodeURIComponent(e)),a=document.createElement("a");a.setAttribute("href",o),a.setAttribute("download",n),a.click()},import:function(t,e){t.items=e.data,t.name=e.name,t.root=[]}},getters:{getCurrent:function(t){return ve(t.items,t.root)},getItemByRoot:function(t){return function(e){return ve(t.items,e)}},inSearch:function(t){return!(t.search.length||t.filters.filter((function(t){return t.selected})).length)},inStart:function(t){return!t.root.length}},actions:{export:function(t){var e=t.commit;e("export")},deleteSelf:function(t){var e=t.commit;e("deleteSelf"),e("updateItems"),e("updateRoot")},addItem:function(t,e){var n=t.commit;n("addItem",e),n("updateItems")},setName:function(t,e){var n=t.commit;n("setName",e),n("updateName")},setSearch:function(t,e){var n=t.commit;n("setSearch",e),n("updateSearch")},goTo:function(t,e){t.commit("goTo",e),t.commit("updateRoot")},back:function(t){t.commit("back"),t.commit("updateRoot")},toggleFilter:function(t,e){t.commit("toggleFilter",e),t.commit("updateFilters")},addRegex:function(t,e){t.commit("addRegex",e),t.commit("updateFilters")},deleteFilter:function(t,e){var n=t.commit;n("deleteFilter",e),n("updateFilters")},deleteItem:function(t,e){var n=t.commit;n("deleteItem",e),n("updateItems")},dropSide:function(t,e){var n=t.commit;n("dropSide",e),n("updateItems")},dropInto:function(t,e){var n=t.commit;n("dropInto",e),n("updateItems")},dropBack:function(t,e){var n=t.commit;n("dropBack",e),n("updateItems")},closeItem:function(t,e){var n=t.commit;n("closeItem",e),n("updateItems")},closeSelf:function(t){var e=t.commit;e("closeSelf"),e("updateItems")},import:function(t,e){var n=t.commit;n("import",e),n("updateItems"),n("updateName"),n("updateRoot")}}});new r["a"]({render:function(t){return t(le)},store:xe}).$mount("#app")},"607e":function(t,e,n){},6299:function(t,e,n){"use strict";var o=n("969b"),a=n.n(o);a.a},"85ec":function(t,e,n){},"969b":function(t,e,n){},d39f:function(t,e,n){"use strict";var o=n("4a73"),a=n.n(o);a.a},f9a8:function(t,e,n){"use strict";var o=n("607e"),a=n.n(o);a.a}});
//# sourceMappingURL=app.1b4c378b.js.map
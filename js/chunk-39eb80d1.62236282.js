(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39eb80d1"],{"099b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("h2",{staticClass:"adminTitle"},[e._v("Adicionar Menu")]),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.addMenus()}}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Nome do Menu:","label-for":"input-1"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"Insira o titulo"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),n("b-form-label",{staticClass:"nameLabel",attrs:{name:"image",for:"txtImage"}},[e._v("Imagem do Menu:")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.img,expression:"img"}],staticClass:"form-control-center",attrs:{type:"link",placeholder:"Insira uma imagem"},domProps:{value:e.img},on:{input:function(t){t.target.composing||(e.img=t.target.value)}}}),n("b-img",{staticStyle:{width:"200px"},attrs:{src:this.img,fluid:""}}),n("b-form-group",{attrs:{id:"input-group-1",label:"Tipo de Evento:","label-for":"input-1"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.typeEE,expression:"typeEE"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.typeEE=t.target.multiple?n:n[0]}}},e._l(e.eventType,(function(t){return n("option",{key:t,domProps:{value:t.id_tipo_reserva},on:{click:function(n){return e.typeEvent(t)}}},[e._v(e._s(t.descritivo))])})),0),n("b-form-group",{attrs:{id:"input-group-1",label:"Componenetes:","label-for":"input-1"}}),e._l(e.components,(function(t){return n("div",{key:t.id_componente},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.componentsNew,expression:"componentsNew"}],attrs:{type:"checkbox",unchecked:""},domProps:{value:t.id_componente,checked:Array.isArray(e.componentsNew)?e._i(e.componentsNew,t.id_componente)>-1:e.componentsNew},on:{change:function(n){var r=e.componentsNew,o=n.target,a=!!o.checked;if(Array.isArray(r)){var i=t.id_componente,c=e._i(r,i);o.checked?c<0&&(e.componentsNew=r.concat([i])):c>-1&&(e.componentsNew=r.slice(0,c).concat(r.slice(c+1)))}else e.componentsNew=a}}}),e._v(" "+e._s(t.descritivo)+" ")])})),n("b-button",{staticClass:"btnConf",attrs:{type:"submit"}},[e._v("Confirmar")])],2),n("br"),n("h2",[e._v("Componentes")]),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.addComponent()}}},[n("h2",[e._v("Adicionar novo componente")]),n("b-form-group",{attrs:{id:"input-group-1",label:"Nome do Componente:","label-for":"input-1"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nameComponent,expression:"nameComponent"}],staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"Insira o nome"},domProps:{value:e.nameComponent},on:{input:function(t){t.target.composing||(e.nameComponent=t.target.value)}}}),n("br"),n("b-button",{staticClass:"btnConf",attrs:{type:"submit"}},[e._v("Confirmar")])],1),n("b-table",{staticStyle:{"max-width":"500px"},attrs:{bordered:"",fixed:"",hover:"",items:this.components,fields:this.fields},scopedSlots:e._u([{key:"cell(remove)",fn:function(t){return[n("b-button",{staticClass:"btnDetails",attrs:{variant:"danger",size:"sm"},on:{click:function(n){return e.removeComponent(t.item.id)}}},[e._v("X")])]}}])})],1)},o=[],a=(n("b0c0"),n("96cf"),n("1da1")),i=n("5530"),c=n("2f62"),s={data:function(){return{name:"",img:"",typeEE:"",componentsNew:[],nameComponent:"",components:[],eventType:[],fields:[{key:"descritivo",label:"Nome do componente",sortable:"true"},{key:"remove",label:"Remover"}]}},created:function(){this.getAllEventTypes(),this.getMyComponents()},computed:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["getEvenTypes"])),Object(c["b"])(["getAllComponents"])),methods:{addMenus:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("addMenus",{name:e.name,img:e.img,type:e.typeEE,components:e.componentsNew});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),alert(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},getAllEventTypes:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("getEvenTypes");case 3:e.eventType=e.getEvenTypes,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getMyComponents:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("getAllComponents");case 3:e.components=e.getAllComponents,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},u=s,l=(n("58cb"),n("2877")),p=Object(l["a"])(u,r,o,!1,null,null,null);t["default"]=p.exports},"159b":function(e,t,n){var r=n("da84"),o=n("fdbc"),a=n("17c2"),i=n("9112");for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{i(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,o=n("b301");e.exports=o("forEach")?function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach},4160:function(e,t,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").filter,a=n("d039"),i=n("1dde"),c=i("filter"),s=c&&!a((function(){[].filter.call({length:-1,0:1},(function(e){throw e}))}));r({target:"Array",proto:!0,forced:!c||!s},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return a}))},"58cb":function(e,t,n){"use strict";var r=n("e104"),o=n.n(r);o.a},b64b:function(e,t,n){var r=n("23e7"),o=n("7b0b"),a=n("df75"),i=n("d039"),c=i((function(){a(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(e){return a(o(e))}})},dbb4:function(e,t,n){var r=n("23e7"),o=n("83ab"),a=n("56ef"),i=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=i(e),o=c.f,u=a(r),l={},p=0;while(u.length>p)n=o(r,t=u[p++]),void 0!==n&&s(l,t,n);return l}})},e104:function(e,t,n){},e439:function(e,t,n){var r=n("23e7"),o=n("d039"),a=n("fc6a"),i=n("06cf").f,c=n("83ab"),s=o((function(){i(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-39eb80d1.62236282.js.map
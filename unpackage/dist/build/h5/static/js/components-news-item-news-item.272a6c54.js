(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-news-item-news-item"],{1836:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"news"},t._l(t.newsList,(function(n){return e("v-uni-view",{key:n.id,staticClass:"news_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigate(n.id)}}},[e("v-uni-image",{attrs:{src:n.img_url,mode:""}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"tit"},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v("发表时间："+t._s(t._f("dateFormat")(n.add_time)))]),e("v-uni-text",[t._v("浏览："+t._s(n.click))])],1)],1)],1)})),1)},s=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}))},"1fa1":function(t,n,e){"use strict";e.r(n);var i=e("1836"),a=e("5966");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("343a");var r,o=e("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"a3f06606",null,!1,i["a"],r);n["default"]=c.exports},"343a":function(t,n,e){"use strict";var i=e("e553"),a=e.n(i);a.a},"4b49":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.news .news_item[data-v-a3f06606]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% %?20?%;border-bottom:1px solid #b50e03}.news .news_item uni-image[data-v-a3f06606]{min-width:%?200?%;max-width:%?200?%;height:%?150?%}.news .news_item .right[data-v-a3f06606]{margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.news .news_item .right .tit[data-v-a3f06606]{font-size:%?30?%}.news .news_item .right .info[data-v-a3f06606]{font-size:%?24?%}.news .news_item .right .info uni-text[data-v-a3f06606]:nth-child(2){margin-left:%?30?%}',""]),t.exports=n},5966:function(t,n,e){"use strict";e.r(n);var i=e("c87e"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},c87e:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:["newsList"],data:function(){return{}},methods:{navigate:function(t){this.$emit("itemClick",t)}}};n.default=i},e553:function(t,n,e){var i=e("4b49");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("352a385a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
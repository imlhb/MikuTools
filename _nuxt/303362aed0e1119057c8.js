(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{247:function(t,n,e){var content=e(280);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("25df02a9",content,!0,{sourceMap:!1})},279:function(t,n,e){"use strict";var o=e(247);e.n(o).a},280:function(t,n,e){(t.exports=e(7)(!1)).push([t.i,".wsing_downloader .nya-checkbox{margin-top:.9375rem}",""])},378:function(t,n,e){"use strict";e.r(n);e(126);var o={name:"WsingDownloader",head:function(){return{title:this.title}},data:function(){return{title:"".concat("MikuTools"," - 5sing 歌曲下载"),wsingLink:"",data:"",requestIn:!1}},methods:{download:function(){var t=this;if(this.requestIn)return!1;var n=/(https?:\/\/)(5sing\.kugou\.com)(\/m\/detail|\/fc)?\/(.+)(\.html)/;n.test(this.wsingLink)?(this.requestIn=!0,this.data="",this.$axios.post("/5sing_downloader",{url:this.wsingLink.match(n)[0]}).then(function(n){t.requestIn=!1,t.data=n.data.data}).catch(function(n){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(n)})})):this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})},handleFileSize:function(t){return 0===t?"未知":(t=(t/1024/1024).toFixed(2))<1024?"".concat(t,"MB"):"".concat((t/1024).toFixed(2),"GB")}}},l=(e(279),e(2)),component=Object(l.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wsing_downloader"},[e("nya-container",{attrs:{title:"5sing 歌曲下载"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{attrs:{autofocus:"",label:"输入链接开始下载",placeholder:"http://5sing.kugou.com/fc/16893799.html",autocomplete:"off"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.download(n)}},model:{value:t.wsingLink,callback:function(n){t.wsingLink="string"==typeof n?n.trim():n},expression:"wsingLink"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.download}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.data.length,expression:"data.length"}],attrs:{title:"获取成功"}},t._l(t.data,function(n,o){return e("div",{key:o},[e("p",[e("span",[t._v(t._s(n.type))]),t._v(" "),e("span",[t._v("("+t._s(t.handleFileSize(n.size))+")：")]),t._v(" "),e("a",{attrs:{href:n.url,target:"_blank",title:"右键另存为下载",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(n.url)+"\n                ")])])])}),0),t._v(" "),e("nya-container",{attrs:{title:"Explain"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("右键另存为下载")])])])],1)},[],!1,null,null,null);n.default=component.exports}}]);
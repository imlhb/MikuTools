(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{367:function(t,n,o){"use strict";o.r(n);o(126);var e={name:"TikTokVideoDownloader",head:function(){return{title:this.title}},data:function(){return{title:"".concat("MikuTools"," - TikTok 视频下载"),tiktokLink:"",downloadUrl:"",requestIn:!1}},methods:{download:function(){var t=this;if(this.requestIn)return!1;var n=/(https?:)\/\/(t\.tiktok\.com|vt\.tiktok\.com)\/(i18n\/share\/video\/[0-9]{10,30}\/?|\w{5,10}\/?)/;n.test(this.tiktokLink)?(this.requestIn=!0,this.downloadUrl="",this.$axios.post("/tiktok_video_downloader",{url:this.tiktokLink.match(n)[0]}).then(function(n){t.requestIn=!1,t.downloadUrl=n.data.data}).catch(function(n){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(n)})})):this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},l=o(2),component=Object(l.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"tiktok_video_downloader"},[o("nya-container",{attrs:{title:"TikTok 视频下载"}},[o("div",{staticClass:"inputbtn"},[o("nya-input",{attrs:{autofocus:"",label:"输入链接开始下载",placeholder:"http://vt.tiktok.com/JR7wUN/",autocomplete:"off"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.download(n)}},model:{value:t.tiktokLink,callback:function(n){t.tiktokLink="string"==typeof n?n.trim():n},expression:"tiktokLink"}}),t._v(" "),o("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.download}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),o("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.downloadUrl,expression:"downloadUrl"}],attrs:{title:"获取成功"}},[o("a",{attrs:{href:t.downloadUrl,target:"_blank",title:"右键另存为下载",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.downloadUrl)+"\n        ")])]),t._v(" "),o("nya-container",{attrs:{title:"Explain"}},[o("ul",{staticClass:"nya-list"},[o("li",[t._v("右键另存为下载")])])])],1)},[],!1,null,null,null);n.default=component.exports}}]);
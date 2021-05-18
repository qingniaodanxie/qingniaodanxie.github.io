(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{381:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-vuepress-thing主题搭建博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vuepress-thing主题搭建博客"}},[s._v("#")]),s._v(" 使用 vuepress-thing主题搭建博客")]),s._v(" "),a("blockquote",[a("p",[a("em",[s._v("特别感谢此主题的作者，")])]),s._v(" "),a("p",[s._v("项目地址：https://github.com/Chenyating/vuepress-theme-ting")])]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("h3",{attrs:{id:"_1-安装node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装node-js"}},[s._v("#")]),s._v(" 1.安装node.js")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node官网"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("or")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://yarn.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn"),a("OutboundLink")],1),s._v(" (可选)")]),s._v(" "),a("h3",{attrs:{id:"_2-安装-ide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-ide"}},[s._v("#")]),s._v(" 2.安装 IDE")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("visual code"),a("OutboundLink")],1),s._v(" 或者 "),a("a",{attrs:{href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("WebStrom"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"_3-安装-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-vuepress"}},[s._v("#")]),s._v(" 3.安装 vuepress")]),s._v(" "),a("p",[s._v("3.1 使用IDE新建一个vue工程,新建项目project，在project下新建一个docs文件夹和一个package.json文件")]),s._v(" "),a("p",[s._v("工程结构如下")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Your Project\n│\n├─── docs\n│\n└─── package.json\n")])])]),a("p",[s._v("3.2 将vuepress安装到本地")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4-文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件内容"}},[s._v("#")]),s._v(" 4. 文件内容")]),s._v(" "),a("ul",[a("li",[s._v("package.json内容")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"directories"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"doc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keywords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"_5-安装主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装主题"}},[s._v("#")]),s._v(" 5.安装主题")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i vuepress-theme-ting\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i\n")])])]),a("h3",{attrs:{id:"_6-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置"}},[s._v("#")]),s._v(" 6.配置")]),s._v(" "),a("p",[s._v("在docs目录下新建README.md、catalog.md、.vuepress文件夹；在.vuepress文件下新建config.js文件；")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("project\n│ \n├─ docs\n│   │\n│   ├─ README.md\n│   │\n│   ├─ catalog.md\n│   │\n│   └─.vuepress\n│       │\n│       └─config.js\n│\n├─ package.json\n│\n└─  node_modules\n")])])]),a("ul",[a("li",[s._v("config.js内容")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n    title: 'YATING',//网站名称\n    description: '用心写代码，不辜负程序员之名',//网站描述\n    themeConfig: {\n        nav: [//导航栏\n            { text: '主页', link: '/' },\n            { text: '目录',link:'/catalog'}\n        ],\n        catalogUrl:'/catalog',//必填 目录路径\n        lastUpdated: 'Last Updated',//必填：文章显示最新修改时间\n    },\n    theme:'ting'//必填：使用vuepress-theme-ting 主题\n}\n")])])]),a("ul",[a("li",[s._v("README.md")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\nlayout: index\ntitle: Home\nshowMessage: false\n---\n\n# vuepress-theme-ting\n\n> 如果你喜欢这个主题可以给我一个start，谢谢\n\n## 欢迎使用\n")])])]),a("ul",[a("li",[s._v("catalog.md")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\nlayout: catalog\n---\nlayout:表示当前使用catalog页面；\ntitle：md文件标题，注意：命名为Home本主题均自动忽略；\n")])])]),a("h3",{attrs:{id:"_7-预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-预览"}},[s._v("#")]),s._v(" 7. 预览")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
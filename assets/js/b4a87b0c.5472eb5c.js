"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[184],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),g=a,h=s["".concat(c,".").concat(g)]||s[g]||m[g]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return m},default:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],u={slug:"github deploy",title:"Customize domain",date:new Date("2021-09-16T00:00:00.000Z"),authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["github","deploy","domain","github-pages"]},c=void 0,l={permalink:"/manabitv/blog/github deploy",source:"@site/blog/github/2021-09-16-deploy-github-pages.md",title:"Customize domain",description:"Khi deploy v\u1edbi web t\u0129nh l\xean github page, ta s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c domain m\u1eb7c \u0111\u1ecbnh l\xe0 `.github.io`.",date:"2021-09-16T00:00:00.000Z",formattedDate:"September 16, 2021",tags:[{label:"github",permalink:"/manabitv/blog/tags/github"},{label:"deploy",permalink:"/manabitv/blog/tags/deploy"},{label:"domain",permalink:"/manabitv/blog/tags/domain"},{label:"github-pages",permalink:"/manabitv/blog/tags/github-pages"}],readingTime:.87,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],prevItem:{title:"Neovim setting",permalink:"/manabitv/blog/neovim setting"}},p={authorsImageUrls:[void 0]},m=[],s={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Khi deploy v\u1edbi web t\u0129nh l\xean github page, ta s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c domain m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"<user>.github.io"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Gi\u1edd ch\xfang ta mu\u1ed1n d\xf9ng m\u1ed9t domain kh\xe1c thay cho domain m\u1eb7c \u0111\u1ecbnh n\xe0y th\xec s\u1ebd l\xe0m theo c\xe1c b\u01b0\u1edbc sau:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u0103ng nh\u1eadp v\xe0o ph\u1ea7n qu\u1ea3n l\xfd DNS (c\xf3 th\u1ec3 d\xf9ng c\xe1c d\u1ecbch v\u1ee5 setting DNS nh\u01b0 cloudflare)"),(0,i.kt)("li",{parentName:"ul"},"Th\xeam v\xe0o CNAME record, tr\u1ecf t\u1edbi domain m\xe0 b\u1ea1n mu\u1ed1n chuy\u1ec3n h\u01b0\u1edbng"),(0,i.kt)("li",{parentName:"ul"},"Trong repository source code, t\u1ea1o m\u1ed9t file CNAME v\u1edbi n\u1ed9i dung l\xe0 t\xean domain b\u1ea1n mu\u1ed1n \u0111\u1eb7t, n\xf3 ph\u1ea3i \u0111\u01b0\u1ee3c tr\xf9ng kh\u1edbp v\u1edbi n\u1ed9i dung \u0111\xe3 \u0111\u0103ng k\xfd CNAME record"),(0,i.kt)("li",{parentName:"ul"},"Sau c\xf9ng v\xe0o ph\u1ea7n c\xe0i \u0111\u1eb7t ",(0,i.kt)("inlineCode",{parentName:"li"},"repository setting")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"github pages setting")," > \u0111i\u1ec1n t\xean domain v\u1eeba \u0111\u1eb7t \u1edf tr\xean > save l\u1ea1i"),(0,i.kt)("li",{parentName:"ul"},"Enable ph\u1ea7n https l\xean. N\u1ebfu option n\xe0y kh\xf4ng cho enable th\xec remove domain name \u0111i r\u1ed3i add l\u1ea1i \u0111\u1ec3 load l\u1ea1i config t\u1eeb cloudlare"),(0,i.kt)("li",{parentName:"ul"},"N\u1ebfu m\u1ecdi th\u1ee9 OK th\xec ki\u1ec3m tra l\u1ea7n cu\u1ed1i b\u1eb1ng c\xe1ch access v\xe0o domain \u0111\xe3 \u0111\u0103ng k\xfd xem \u0111\xe3 load trang th\xe0nh c\xf4ng ch\u01b0a")))}g.isMDXComponent=!0}}]);
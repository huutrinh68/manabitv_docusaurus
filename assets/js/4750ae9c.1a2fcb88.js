"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1252],{3905:function(n,e,t){t.d(e,{Zo:function(){return g},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),u=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},g=function(n){var e=u(n.components);return r.createElement(l.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,g=c(n,["components","mdxType","originalType","parentName"]),p=u(t),m=o,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return t?r.createElement(d,i(i({ref:e},g),{},{components:t})):r.createElement(d,i({ref:e},g))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4022:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return g},toc:function(){return s},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={slug:"logging-rotate",title:"Logging rotation",date:new Date("2021-09-16T00:00:00.000Z"),authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["docker","logging"]},l=void 0,u={permalink:"/manabitv/blog/logging-rotate",source:"@site/blog/docker/2021-09-16-logging-rorate.md",title:"Logging rotation",description:"Trong b\xe0i n\xe0y s\u1ebd h\u01b0\u1edbng d\u1eabn c\xe1ch x\xf3a log trong container",date:"2021-09-16T00:00:00.000Z",formattedDate:"September 16, 2021",tags:[{label:"docker",permalink:"/manabitv/blog/tags/docker"},{label:"logging",permalink:"/manabitv/blog/tags/logging"}],readingTime:1.82,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],nextItem:{title:"Customize domain",permalink:"/manabitv/blog/github deploy"}},g={authorsImageUrls:[void 0]},s=[{value:"X\xf3a log c\u1ee7a container",id:"x\xf3a-log-c\u1ee7a-container",children:[]},{value:"X\xf3a n\u1ed9i dung c\u1ee7a file log",id:"x\xf3a-n\u1ed9i-dung-c\u1ee7a-file-log",children:[]}],p={toc:s};function m(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Trong b\xe0i n\xe0y s\u1ebd h\u01b0\u1edbng d\u1eabn c\xe1ch x\xf3a log trong container"),(0,a.kt)("p",null,"Khi s\u1eed d\u1ee5ng docker tr\xean server, service t\u1ef1 nhi\xean m\u1ed9t ng\xe0y \u0111\u1eb9p tr\u1eddi kh\xf4ng ho\u1ea1t \u0111\u1ed9ng,\nl\xfac \u0111\xf3 ki\u1ec3m tra h\u1ec7 th\u1ed1ng th\xec ta th\u1ea5y dung l\u01b0\u1ee3ng c\u1ee7a \u1ed5 c\u1ee9ng \u0111\xe3 kh\xf4ng c\xf2n n\u1eefa.\nV\xe0 l\xfd do l\xe0 do l\u01b0\u1ee3ng log qu\xe1 l\u1edbn m\xe0 container sinh ra t\xedch t\u1ee5 t\u1eeb r\u1ea5t l\xe2u r\u1ed3i."),(0,a.kt)("p",null,"Khi \u0111\xf3 c\xe1ch gi\u1ea3i quy\u1ebft s\u1ebd nh\u01b0 sua:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"X\xe1c \u0111\u1ecbnh v\u1ecb tr\xed c\u1ee7a file log"),(0,a.kt)("li",{parentName:"ul"},"X\xf3a n\u1ed9i dung file log"),(0,a.kt)("li",{parentName:"ul"},"\xc1p d\u1ee5ng th\xeam logging rotation v\xe0o \u0111\u1ec3 log kh\xf4ng b\u1ecb t\xedch t\u1ee5 m\xe0 s\u1ebd t\u1ef1 x\xf3a khi qu\xe1 gi\u1edbi h\u1ea1n")),(0,a.kt)("h3",{id:"x\xf3a-log-c\u1ee7a-container"},"X\xf3a log c\u1ee7a container"),(0,a.kt)("p",null,"C\xe1ch \u0111\u1ec3 x\xe1c \u0111\u1ecbnh c\u1ee7a log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker inspect [container name] | grep -i log\n")),(0,a.kt)("p",null,"N\u1ebfu tr\xean linux server th\xec v\u1ecb tr\xed th\u01b0\u1eddng l\xe0 b\xean d\u01b0\u1edbi ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/containers/xxx-json.log")),(0,a.kt)("h3",{id:"x\xf3a-n\u1ed9i-dung-c\u1ee7a-file-log"},"X\xf3a n\u1ed9i dung c\u1ee7a file log"),(0,a.kt)("p",null,"D\xf9ng l\u1ec7nh d\u01b0\u1edbi \u0111\u1ec3 x\xf3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo truncate -s 0 /var/lib/docker/containers/xxx-json.log\n\n### T\u1ea1o logging rotate cho docker container\nB\xean trong service c\u1ee7a docker-compose ta th\xeam \u0111o\u1ea1n setting sau:\n")),(0,a.kt)("p",null,"logging:\ndriver: 'json-file'\noptions:\nmax-size: '10m'\nmax-file: '3'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u1ede \u0111\xe2y \u0111ang v\xed d\u1ee5 l\xe0 c\u1ee9 10Mb th\xec file log s\u1ebd \u0111\u01b0\u1ee3c t\xe1ch ra, v\xe0 t\u1ed1i \u0111a l\xe0 c\xf3 3 files nh\u01b0 v\u1eady l\xe0 30Mb log t\u1ed1i \u0111a.\nDo l\xe0 options n\xean c\xe1c th\xf4ng s\u1ed1 tr\xean c\xf3 th\u1ec3 thay \u0111\u1ed5i t\xf9y th\xedch\nSau \u0111\xf3 restart l\u1ea1i c\xe1c service\n")),(0,a.kt)("p",null," $ docker-compose restart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n### Setting global\nC\xf2n m\u1ed9t c\xe1ch setting n\u1eefa s\u1ebd setting cho to\xe0n b\u1ed9 docker container ch\u1ee9 kh\xf4ng c\u1ea7n v\xe0o docker-compose \u0111\u1ec3 setting cho t\u1eebng service.\n")),(0,a.kt)("p",null," $ sudo vim /etc/docker/daemin.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Th\xeam v\xe0o th\xf4ng tin d\u01b0\u1edbi \u0111\xe2y\n")),(0,a.kt)("p",null,' {\n"log-driver": "json-file",\n"log-opts": {"max-size": "10m", "max-file": "3"}\n}'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'L\u01b0u setting tr\xean l\u1ea1i v\xe0 ki\u1ec3m tra b\u1eb1ng l\u1ec7nh\n$ sudo cat /etc/docker/daemin.json\n# Th\xeam v\xe0o th\xf4ng tin d\u01b0\u1edbi \u0111\xe2y\n{\n   "log-driver": "json-file",\n   "log-opts": {"max-size": "10m", "max-file": "3"}\n}\n')),(0,a.kt)("p",null," D\xf9ng c\xe1ch n\xe0y ch\xfang ta ph\u1ea3i restart c\u1ea3 docker service \u0111\u1ec3 load l\u1ea1i config cho docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose stop\n$ sudo systemctl restart docker\n$ docker-compose restart\n")),(0,a.kt)("p",null,"Okie \u0111\xe3 xong v\xe0 y\xean t\xe2m vi\u1ec7c kh\xf4ng b\u1ecb file log l\xe0m tr\xe0n dung l\u01b0\u1ee3ng n\u1eefa!"))}m.isMDXComponent=!0}}]);
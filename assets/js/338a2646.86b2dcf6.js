"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9828],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6787:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={slug:"docker-proxy",title:"C\xe0i \u0111\u1eb7t proxy cho docker",date:new Date("2021-09-14T00:00:00.000Z"),authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["docker"]},u=void 0,l={permalink:"/manabitv_docusaurus/blog/docker-proxy",source:"@site/blog/docker/2021-09-14-docker-proxy.md",title:"C\xe0i \u0111\u1eb7t proxy cho docker",description:"C\xe0i \u0111\u1eb7t proxy cho docker",date:"2021-09-14T00:00:00.000Z",formattedDate:"September 14, 2021",tags:[{label:"docker",permalink:"/manabitv_docusaurus/blog/tags/docker"}],readingTime:.36,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],prevItem:{title:"Customize domain",permalink:"/manabitv_docusaurus/blog/github deploy"},nextItem:{title:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",permalink:"/manabitv_docusaurus/blog/docker-install"}},p={authorsImageUrls:[void 0]},s=[{value:"T\u1ea1o file proxy config",id:"t\u1ea1o-file-proxy-config",children:[]},{value:"Th\xeam nh\u1eefng th\xf4ng tin v\u1ec1 proxy v\xe0o trong file proxy.conf",id:"th\xeam-nh\u1eefng-th\xf4ng-tin-v\u1ec1-proxy-v\xe0o-trong-file-proxyconf",children:[]},{value:"L\u01b0u l\u1ea1i v\xe0 sau \u0111\xf3 load l\u1ea1i config",id:"l\u01b0u-l\u1ea1i-v\xe0-sau-\u0111\xf3-load-l\u1ea1i-config",children:[]},{value:"\xc1p d\u1ee5ng config \u0111\xf3 v\xe0o docker",id:"\xe1p-d\u1ee5ng-config-\u0111\xf3-v\xe0o-docker",children:[]}],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"C\xe0i \u0111\u1eb7t proxy cho docker"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"H\u1ec7 \u0111i\u1ec1u h\xe0nh Ubuntu")),(0,c.kt)("h3",{id:"t\u1ea1o-file-proxy-config"},"T\u1ea1o file proxy config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"$ sudo mkdir -p /etc/systemd/system/docker.service.d\n$ sudo vi /etc/systemd/system/docker.service.d/proxy.conf\n")),(0,c.kt)("h3",{id:"th\xeam-nh\u1eefng-th\xf4ng-tin-v\u1ec1-proxy-v\xe0o-trong-file-proxyconf"},"Th\xeam nh\u1eefng th\xf4ng tin v\u1ec1 proxy v\xe0o trong file proxy.conf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'[Service]\nEnvironment="HTTP_PROXY=http://myproxy.hostname:8080"\nEnvironment="HTTPS_PROXY=https://myproxy.hostname:8080/"\nEnvironment="NO_PROXY="localhost,127.0.0.1,::1"\n')),(0,c.kt)("h3",{id:"l\u01b0u-l\u1ea1i-v\xe0-sau-\u0111\xf3-load-l\u1ea1i-config"},"L\u01b0u l\u1ea1i v\xe0 sau \u0111\xf3 load l\u1ea1i config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"$ sudo systemctl daemon-reload\n")),(0,c.kt)("h3",{id:"\xe1p-d\u1ee5ng-config-\u0111\xf3-v\xe0o-docker"},"\xc1p d\u1ee5ng config \u0111\xf3 v\xe0o docker"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"$ sudo systemctl restart docker.service\n")))}f.isMDXComponent=!0}}]);
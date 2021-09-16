"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[824],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={slug:"docker-proxy",title:"C\xe0i \u0111\u1eb7t proxy cho docker",authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["docker"]},u=void 0,l={permalink:"/manabitv/blog/docker-proxy",source:"@site/blog/docker/docker-proxy.md",title:"C\xe0i \u0111\u1eb7t proxy cho docker",description:"C\xe0i \u0111\u1eb7t proxy cho docker",date:"2021-09-16T05:20:08.023Z",formattedDate:"September 16, 2021",tags:[{label:"docker",permalink:"/manabitv/blog/tags/docker"}],readingTime:.36,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],prevItem:{title:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",permalink:"/manabitv/blog/docker-install"},nextItem:{title:"customize domain cho github pages",permalink:"/manabitv/blog/github deploy"}},p={authorsImageUrls:[void 0]},s=[{value:"T\u1ea1o file proxy config",id:"t\u1ea1o-file-proxy-config",children:[]},{value:"Th\xeam nh\u1eefng th\xf4ng tin v\u1ec1 proxy v\xe0o trong file proxy.conf",id:"th\xeam-nh\u1eefng-th\xf4ng-tin-v\u1ec1-proxy-v\xe0o-trong-file-proxyconf",children:[]},{value:"L\u01b0u l\u1ea1i v\xe0 sau \u0111\xf3 load l\u1ea1i config",id:"l\u01b0u-l\u1ea1i-v\xe0-sau-\u0111\xf3-load-l\u1ea1i-config",children:[]},{value:"\xc1p d\u1ee5ng config \u0111\xf3 v\xe0o docker",id:"\xe1p-d\u1ee5ng-config-\u0111\xf3-v\xe0o-docker",children:[]}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"C\xe0i \u0111\u1eb7t proxy cho docker"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"H\u1ec7 \u0111i\u1ec1u h\xe0nh Ubuntu")),(0,i.kt)("h3",{id:"t\u1ea1o-file-proxy-config"},"T\u1ea1o file proxy config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo mkdir -p /etc/systemd/system/docker.service.d\n$ sudo vi /etc/systemd/system/docker.service.d/proxy.conf\n")),(0,i.kt)("h3",{id:"th\xeam-nh\u1eefng-th\xf4ng-tin-v\u1ec1-proxy-v\xe0o-trong-file-proxyconf"},"Th\xeam nh\u1eefng th\xf4ng tin v\u1ec1 proxy v\xe0o trong file proxy.conf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[Service]\nEnvironment="HTTP_PROXY=http://myproxy.hostname:8080"\nEnvironment="HTTPS_PROXY=https://myproxy.hostname:8080/"\nEnvironment="NO_PROXY="localhost,127.0.0.1,::1"\n')),(0,i.kt)("h3",{id:"l\u01b0u-l\u1ea1i-v\xe0-sau-\u0111\xf3-load-l\u1ea1i-config"},"L\u01b0u l\u1ea1i v\xe0 sau \u0111\xf3 load l\u1ea1i config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl daemon-reload\n")),(0,i.kt)("h3",{id:"\xe1p-d\u1ee5ng-config-\u0111\xf3-v\xe0o-docker"},"\xc1p d\u1ee5ng config \u0111\xf3 v\xe0o docker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl restart docker.service\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[814],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,h=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2538:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={slug:"torch gather",title:"Torch gather usage",authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["torch"]},u=void 0,l={permalink:"/manabitv/blog/torch gather",editUrl:"https://github.com/huutrinh68/manabitv/website/blog/blog/deep-learning/2021-09-08-tourch-gather.md",source:"@site/blog/deep-learning/2021-09-08-tourch-gather.md",title:"Torch gather usage",description:"Get the elements of y which index has specified by x",date:"2021-09-08T06:38:11.695Z",formattedDate:"September 8, 2021",tags:[{label:"torch",permalink:"/manabitv/blog/tags/torch"}],readingTime:.43,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],prevItem:{title:"Dataset cho face recognition",permalink:"/manabitv/blog/dataset"},nextItem:{title:"Neovim setting",permalink:"/manabitv/blog/neovim setting"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Get the elements of ",(0,o.kt)("strong",{parentName:"p"},"y")," which index has specified by ",(0,o.kt)("strong",{parentName:"p"},"x")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell="},">>> x = torch.rand(3,5)\n>>> x\ntensor([[ 0.0778,  0.6633,  0.4953,  0.1461,  0.4691],\n        [ 0.3024,  0.0295,  0.3526,  0.6040,  0.7512],\n        [ 0.1778,  0.7783,  0.1738,  0.5278,  0.0372]])\n\n>>> x.argmax(1)\ntensor([ 1,  4,  1])\n\n>>> x.argmax(1, keepdim=True)\ntensor([[ 1],\n        [ 4],\n        [ 1]])\n\n>>> y = torch.rand(3,5)\n>>> y\ntensor([[ 0.4005,  0.3994,  0.1083,  0.8888,  0.9239],\n        [ 0.6046,  0.5906,  0.3089,  0.4983,  0.2159],\n        [ 0.4500,  0.9791,  0.4029,  0.9614,  0.5124]])\n\n>>> y.gather(1, x.argmax(1, keepdim=True))\ntensor([[ 0.3994],\n        [ 0.2159],\n        [ 0.9791]])\n")))}f.isMDXComponent=!0}}]);
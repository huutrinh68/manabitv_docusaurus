"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[301],{3502:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return h},toc:function(){return m},default:function(){return l}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],u={slug:"torch gather",title:"Torch gather usage",authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["torch"]},c=void 0,s={permalink:"/manabitv/blog/torch gather",editUrl:"https://github.com/huutrinh68/manabitv/website/blog/blog/deep-learning/2021-09-08-tourch-gather.md",source:"@site/blog/deep-learning/2021-09-08-tourch-gather.md",title:"Torch gather usage",description:"Get the elements of y which index has specified by x",date:"2021-09-10T07:19:01.944Z",formattedDate:"September 10, 2021",tags:[{label:"torch",permalink:"/manabitv/blog/tags/torch"}],readingTime:.43,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],prevItem:{title:"Dataset cho face recognition",permalink:"/manabitv/blog/dataset"},nextItem:{title:"Neovim setting",permalink:"/manabitv/blog/neovim setting"}},h={authorsImageUrls:[void 0]},m=[],g={toc:m};function l(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get the elements of ",(0,i.kt)("strong",{parentName:"p"},"y")," which index has specified by ",(0,i.kt)("strong",{parentName:"p"},"x")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell="},">>> x = torch.rand(3,5)\n>>> x\ntensor([[ 0.0778,  0.6633,  0.4953,  0.1461,  0.4691],\n        [ 0.3024,  0.0295,  0.3526,  0.6040,  0.7512],\n        [ 0.1778,  0.7783,  0.1738,  0.5278,  0.0372]])\n\n>>> x.argmax(1)\ntensor([ 1,  4,  1])\n\n>>> x.argmax(1, keepdim=True)\ntensor([[ 1],\n        [ 4],\n        [ 1]])\n\n>>> y = torch.rand(3,5)\n>>> y\ntensor([[ 0.4005,  0.3994,  0.1083,  0.8888,  0.9239],\n        [ 0.6046,  0.5906,  0.3089,  0.4983,  0.2159],\n        [ 0.4500,  0.9791,  0.4029,  0.9614,  0.5124]])\n\n>>> y.gather(1, x.argmax(1, keepdim=True))\ntensor([[ 0.3994],\n        [ 0.2159],\n        [ 0.9791]])\n")))}l.isMDXComponent=!0}}]);
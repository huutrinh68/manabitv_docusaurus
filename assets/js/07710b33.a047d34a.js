"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[142],{4498:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return d},toc:function(){return s},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),c=["components"],a={slug:"docker-proxy",title:"C\xe0i \u0111\u1eb7t proxy cho docker",authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["docker"]},u=void 0,l={permalink:"/manabitv/blog/docker-proxy",source:"@site/blog/docker/docker-proxy.md",title:"C\xe0i \u0111\u1eb7t proxy cho docker",description:"C\xe0i \u0111\u1eb7t proxy cho docker",date:"2021-09-15T03:26:45.439Z",formattedDate:"September 15, 2021",tags:[{label:"docker",permalink:"/manabitv/blog/tags/docker"}],readingTime:.36,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],prevItem:{title:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",permalink:"/manabitv/blog/docker-install"},nextItem:{title:"Neovim setting",permalink:"/manabitv/blog/neovim setting"}},d={authorsImageUrls:[void 0]},s=[{value:"T\u1ea1o file proxy config",id:"t\u1ea1o-file-proxy-config",children:[]},{value:"Th\xeam nh\u1eefng th\xf4ng tin v\u1ec1 proxy v\xe0o trong file proxy.conf",id:"th\xeam-nh\u1eefng-th\xf4ng-tin-v\u1ec1-proxy-v\xe0o-trong-file-proxyconf",children:[]},{value:"L\u01b0u l\u1ea1i v\xe0 sau \u0111\xf3 load l\u1ea1i config",id:"l\u01b0u-l\u1ea1i-v\xe0-sau-\u0111\xf3-load-l\u1ea1i-config",children:[]},{value:"\xc1p d\u1ee5ng config \u0111\xf3 v\xe0o docker",id:"\xe1p-d\u1ee5ng-config-\u0111\xf3-v\xe0o-docker",children:[]}],p={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"C\xe0i \u0111\u1eb7t proxy cho docker"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"H\u1ec7 \u0111i\u1ec1u h\xe0nh Ubuntu")),(0,i.kt)("h3",{id:"t\u1ea1o-file-proxy-config"},"T\u1ea1o file proxy config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo mkdir -p /etc/systemd/system/docker.service.d\n$ sudo vi /etc/systemd/system/docker.service.d/proxy.conf\n")),(0,i.kt)("h3",{id:"th\xeam-nh\u1eefng-th\xf4ng-tin-v\u1ec1-proxy-v\xe0o-trong-file-proxyconf"},"Th\xeam nh\u1eefng th\xf4ng tin v\u1ec1 proxy v\xe0o trong file proxy.conf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[Service]\nEnvironment="HTTP_PROXY=http://myproxy.hostname:8080"\nEnvironment="HTTPS_PROXY=https://myproxy.hostname:8080/"\nEnvironment="NO_PROXY="localhost,127.0.0.1,::1"\n')),(0,i.kt)("h3",{id:"l\u01b0u-l\u1ea1i-v\xe0-sau-\u0111\xf3-load-l\u1ea1i-config"},"L\u01b0u l\u1ea1i v\xe0 sau \u0111\xf3 load l\u1ea1i config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl daemon-reload\n")),(0,i.kt)("h3",{id:"\xe1p-d\u1ee5ng-config-\u0111\xf3-v\xe0o-docker"},"\xc1p d\u1ee5ng config \u0111\xf3 v\xe0o docker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl restart docker.service\n")))}m.isMDXComponent=!0}}]);
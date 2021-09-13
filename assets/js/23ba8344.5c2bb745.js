"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87],{1673:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return d},toc:function(){return l},default:function(){return k}});var o=n(7462),r=n(3366),c=(n(7294),n(3905)),a=["components"],i={slug:"docker-install",title:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["docker"]},s=void 0,u={permalink:"/manabitv/blog/docker-install",editUrl:"https://github.com/huutrinh68/manabitv/website/master/blog/docker/docker-install.md",source:"@site/blog/docker/docker-install.md",title:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",description:"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker",date:"2021-09-13T08:55:21.608Z",formattedDate:"September 13, 2021",tags:[{label:"docker",permalink:"/manabitv/blog/tags/docker"}],readingTime:.945,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],prevItem:{title:"Torch gather usage",permalink:"/manabitv/blog/torch gather"},nextItem:{title:"Neovim setting",permalink:"/manabitv/blog/neovim setting"}},d={authorsImageUrls:[void 0]},l=[{value:"C\xe0i \u0111\u1eb7t docker engine",id:"c\xe0i-\u0111\u1eb7t-docker-engine",children:[]},{value:"C\xe0i \u0111\u1eb7t docker-compose",id:"c\xe0i-\u0111\u1eb7t-docker-compose",children:[]}],m={toc:l};function k(e){var t=e.components,n=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"C\xe0i \u0111\u1eb7t m\xf4i tr\u01b0\u1eddng docker"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t docker engine"),(0,c.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t docker-compose ")),(0,c.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t-docker-engine"},"C\xe0i \u0111\u1eb7t docker engine"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"L\u01b0u \xfd h\u01b0\u1edbng d\u1eabn n\xe0y ch\u1ec9 d\xe0nh cho ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"Ubuntu")),(0,c.kt)("li",{parentName:"ul"},"\u0110\u1ec3 c\xe0i \u0111\u1eb7t cho Windows tham kh\u1ea3o ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"t\u1ea1i \u0111\xe2y")),(0,c.kt)("li",{parentName:"ul"},"\u0110\u1ec3 c\xe0i \u0111\u1eb7t cho MacOs tham kh\u1ea3o ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"t\u1ea1i \u0111\xe2y"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'# X\xf3a b\u1ecf docker c\u0169 trong m\xe1y n\u1ebfu c\xf3\n$ sudo apt-get remove docker docker-engine docker.io containerd runc\n# C\u1eadp nh\u1eadt ph\u1ea7n m\u1ec1m v\xe0 c\xe0i \u0111\u1eb7t c\xe1c th\u01b0 vi\u1ec7n c\u1ea7n thi\u1ebft\n$ sudo apt-get update\n$ sudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n# \u0110\u0103ng k\xfd GPG c\u1ee7a docker\n$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n# \u0110\u0103ng k\xfd stable repository c\u1ee7a docker\n$ echo \\\n  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n# C\xe0i \u0111\u1eb7t docker engine\n$ sudo apt-get update\n$ sudo apt-get install docker-ce docker-ce-cli containerd.io\n')),(0,c.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t-docker-compose"},"C\xe0i \u0111\u1eb7t docker-compose"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Link tham kh\u1ea3o ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"t\u1ea1i \u0111\xe2y"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'# C\xe0i \u0111\u1eb7t\n$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n# T\u1ea1o permission cho docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n\n')))}k.isMDXComponent=!0}}]);
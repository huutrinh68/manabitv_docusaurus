"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{46:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return c},contentTitle:function(){return h},metadata:function(){return r},assets:function(){return s},toc:function(){return p},default:function(){return k}});var n=e(7462),i=e(3366),l=(e(7294),e(3905)),o=["components"],c={slug:"dataset",title:"Dataset cho face recognition",authors:{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"},tags:["dataset","face recogntion"]},h=void 0,r={permalink:"/manabitv/blog/dataset",source:"@site/blog/deep-learning/2021-09-08-face-recog-dataset.md",title:"Dataset cho face recognition",description:"G\u1ea7n \u0111\xe2y g\u1eb7p nhi\u1ec1u project l\xe0m v\u1ec1 ph\xe1t hi\u1ec7n v\xe0 nh\u1eadn di\u1ec7n khu\xf4n m\u1eb7t (face recognition). V\u1ec1 t\xe1c v\u1ee5 n\xe0y th\xec ng\u01b0\u1eddi ta \u0111\xe3 nghi\xean c\u1ee9u v\xe0 th\u1ef1c hi\u1ec7n t\u1eeb kh\xe1 l\xe2u r\u1ed3i. Nh\u01b0 \u1edf Nh\u1eadt th\xec c\xf3 m\u1ed9t s\u1ed1 c\xf4ng ty nh\u01b0 Panasonic hay NEC \u0111\u1ec1u c\xf3 nh\u1eefng solution \u0111\u1ee9ng top th\u1ebf gi\u1edbi v\u1ec1 \u0111\u1ed9 ch\xednh x\xe1c v\xe0 t\u1ed1c \u0111\u1ed9 (C\xf3 th\u1ec3 tham kh\u1ea3o t\u1ea1i \u0111\xe2y).",date:"2021-09-14T05:08:53.915Z",formattedDate:"September 14, 2021",tags:[{label:"dataset",permalink:"/manabitv/blog/tags/dataset"},{label:"face recogntion",permalink:"/manabitv/blog/tags/face-recogntion"}],readingTime:1.725,truncated:!1,authors:[{name:"Huutrinh",title:"ManabiTV team",url:"https://github.com/huutrinh68",image_url:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4",imageURL:"https://avatars.githubusercontent.com/u/8240899?s=400&u=8719e17cf254c73acc2919380796dee58facdf59&v=4"}],prevItem:{title:"Links to download free book",permalink:"/manabitv/blog/free book"},nextItem:{title:"Torch gather usage",permalink:"/manabitv/blog/torch gather"}},s={authorsImageUrls:[void 0]},p=[{value:"<strong>Dataset cho training:</strong>",id:"dataset-cho-training",children:[]},{value:"<strong>Dataset cho validation:</strong>",id:"dataset-cho-validation",children:[]}],m={toc:p};function k(t){var a=t.components,e=(0,i.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"G\u1ea7n \u0111\xe2y g\u1eb7p nhi\u1ec1u project l\xe0m v\u1ec1 ph\xe1t hi\u1ec7n v\xe0 nh\u1eadn di\u1ec7n khu\xf4n m\u1eb7t (face recognition). V\u1ec1 t\xe1c v\u1ee5 n\xe0y th\xec ng\u01b0\u1eddi ta \u0111\xe3 nghi\xean c\u1ee9u v\xe0 th\u1ef1c hi\u1ec7n t\u1eeb kh\xe1 l\xe2u r\u1ed3i. Nh\u01b0 \u1edf Nh\u1eadt th\xec c\xf3 m\u1ed9t s\u1ed1 c\xf4ng ty nh\u01b0 Panasonic hay NEC \u0111\u1ec1u c\xf3 nh\u1eefng solution \u0111\u1ee9ng top th\u1ebf gi\u1edbi v\u1ec1 \u0111\u1ed9 ch\xednh x\xe1c v\xe0 t\u1ed1c \u0111\u1ed9 (C\xf3 th\u1ec3 tham kh\u1ea3o ",(0,l.kt)("a",{parentName:"p",href:"https://www.nec.com/en/press/201910/global_20191003_01.html?fbclid=IwAR23EDLci97GBPfehMgEnaKyqDpLWlELCehEJy_cz99hQTR7PPckuhziao8"},"t\u1ea1i \u0111\xe2y"),"). "),(0,l.kt)("p",null,"\u1ede b\xe0i vi\u1ebft n\xe0y m\xecnh th\u1ed1ng k\xea m\u1ed9t s\u1ed1 datasets \u0111\u01b0\u1ee3c public"),(0,l.kt)("h2",{id:"dataset-cho-training"},(0,l.kt)("strong",{parentName:"h2"},"Dataset cho training:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html?fbclid=IwAR1VeZyPhkTzsoD_Fq8ItPwvyA0W1MD7fHO0v7MVaps1oX1fSt95q5i8Wfo"},"CelebA"))),(0,l.kt)("p",null,"D\xe0nh cho m\u1ee5c \u0111\xedch phi th\u01b0\u01a1ng m\u1ea1i, nghi\xean c\u1ee9u. Data n\xe0y g\u1ed3m 200k \u1ea3nh nh\u1eefng ng\u01b0\u1eddi n\u1ed5i ti\u1ebfng(10k ids), \u0111\u01b0\u1ee3c thu th\u1eadp v\xe0 cung c\u1ea5p t\u1eeb MMLAB, m\u1ed9t lab nghi\xean c\u1ee9u c\u1ee7a m\u1ed9t tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc \u1edf HongKong."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.kaggle.com%2Fdrgilermo%2Fface-images-with-marked-landmark-points%3Ffbclid%3DIwAR274bw0NLJ7q-To2fFaAHF6qXvnFZ4N9ODRzJm46dJSenJhk8fr0YqfQ7A&h=AT3d7m3AbSHvK_n3BW6OkXS4WQ2o7OvEXQoBYxUZU-_orAx7HSwPlUN1dA2ingVZOQCofG0QibZC2RPxDwQF1Y-0pKXNNRCNq3hNaBGNvStvCwFri_4SSqF4r9kw9hqNLNOLdkuBrUGjP3SuqaTd6C_F"},"Face Image with Marked Landmark Point"))),(0,l.kt)("p",null,"Data n\xe0y g\u1ed3m 7k \u1ea3nh v\u1edbi m\u1ed7i \u1ea3nh \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\xe1nh nh\xe3n cho keypoints (c\xe1c \u0111i\u1ec3m \u0111\u1eb7c tr\u01b0ng tr\xean khu\xf4n m\u1eb7t). Tr\xean m\u1ed7i \u1ea3nh t\u1ed1i \u0111a c\xf3 15 keypoints, v\xe0 th\xf4ng tin n\xe0y \u0111\u01b0\u1ee3c l\u01b0u ri\xeang trong file CSV."),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://drive.google.com/u/0/uc?id=1Of_EVz-yHV7QVWQGihYfvtny9Ne8qXVz&export=download&fbclid=IwAR3X63NyYmSMKBCNWREgExvvSHxxU-FK4CUMLBqqiC60zwZsOiwVXtzYHKE"},"Casia WebFace"))),(0,l.kt)("p",null,"G\u1ed3m 453453 \u1ea3nh cho 10575 ids (C\xe1c b\u1ea1n T\xe0u cung c\u1ea5p)."),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/fv0y30mawsejweu/faces_umd.zip?dl=0&fbclid=IwAR2fV-J0jWTBBIbrAMhSX2gv-rTYAmFcKMsHjzbuwFqsIkOMhcWLFZNoNyU"},"UMDFaces"))),(0,l.kt)("p",null,"Dataset g\u1ed3m 367888 \u1ea3nh cho 8277 ids."),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"http://www.robots.ox.ac.uk/~vgg/data/vgg_face2/?fbclid=IwAR0hTUjT-GtpF3aKUEUkey3Sq_p8AYageV-GJi7MmIh_GayQtqc7m5IzaMQ"},"VGGFace2"))),(0,l.kt)("p",null,"Link t\u1ea3i t\u1eeb ",(0,l.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/m9pm1it7vsw3gj0/faces_vgg2_112x112.zip?dl=0&fbclid=IwAR0MUy5bc68AAsFcVqAXt6Mzgq59SwsPtxpkqtgugneHZZhZ7r9xzlckRb4"},"dropbox"),". Dataset g\u1ed3m 3.31M \u1ea3nh cho 9131 ids. "),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://megapixels.cc/msceleb/?fbclid=IwAR3HKZihGvCMRDHV5EXFu94AE9ITSfOcSk-8_Mtep0GCt82pkEs9TH9z3Ec"},"MS1M-IBUG"))),(0,l.kt)("p",null,"Link download ",(0,l.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/4de5ogqj4vargsw/faces_ms1m-refine-v1_112x112.zip?dl=0&fbclid=IwAR0wGytbPRvGBb8uUYl_KW8bZhkSUdqqqlYeDED1cgX3lpVzjul1mBwQi7s"},"t\u1ea1i \u0111\xe2y"),". Dataset g\u1ed3m 3.8M \u1ea3nh cho 85k ids. "),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/wpx6tqjf0y5mf6r/faces_ms1m-refine-v2_112x112.zip?dl=0&fbclid=IwAR2p057V0C_VZZpe1o0yGLZMxqX-OMu3D5GuZ_sckuVW-cgjU_aa1MRODQE"},"MS1M-ArcFace"))),(0,l.kt)("p",null,"Dataset g\u1ed3m 5.8M \u1ea3nh cho 85k ids. Dataset n\xe0y l\xe0 m\u1ed9t version m\u1edf r\u1ed9ng c\u1ee7a t\u1eadp MS1M-IBUG tr\xean."),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/5cd1ppfqprjluaq/faces_glintasia.zip?dl=0&fbclid=IwAR1pa2-Q4-9c2ejSfp46tSKnCLvImEKemUOz2qZSKb3f-vSsTYGLV0An708"},"Asian-Celeb"))),(0,l.kt)("p",null,"Dataset g\u1ed3m 2.8M \u1ea3nh cho 94k ids."),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/4x39o2x40rewl5l/faces_glint.zip?dl=0&fbclid=IwAR1u4PO3IWUHK96n9capUAZVI1-DYrDL0EF-M4DnXzgCRR5s_j7d7SkDiOo"},"DeepGlint"))),(0,l.kt)("p",null,"Dataset g\u1ed3m 6.75M \u1ea3nh cho 181k ids."),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://drive.google.com/open?id=134kOnRcJgHZ2eREu8QRi99qj996Ap_ML&fbclid=IwAR3J6SOg8T_ql-3eSipk2htERFMQMDDgr-ewJOs2prauRht4hgnrt-CUiAI"},"IMDB-Face"))),(0,l.kt)("p",null,"Dataset g\u1ed3m 1.7M \u1ea3nh cho 59k ids."),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"Celeb500k")),(0,l.kt)("p",null,"Hi\u1ec7n t\u1ea1i ch\u01b0a t\xecm th\u1ea5y link download. Data n\xe0y r\u1ea5t l\u1edbn, g\u1ed3m 50M \u1ea3nh cho 500k ids."),(0,l.kt)("ol",{start:12},(0,l.kt)("li",{parentName:"ol"},"MegaFace")),(0,l.kt)("p",null,"Download ",(0,l.kt)("a",{parentName:"p",href:"http://megaface.cs.washington.edu/dataset/download.html?fbclid=IwAR3UW3I6grilk-JFxpE62HIL3-mzpl0c85Pys3tsqOIBsYRRCndIUVKQdVc"},"t\u1ea1i \u0111\xe2y"),". Dataset g\u1ed3m 4.7M \u1ea3nh cho 672k ids. "),(0,l.kt)("h2",{id:"dataset-cho-validation"},(0,l.kt)("strong",{parentName:"h2"},"Dataset cho validation:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"http://www.cfpw.io/?fbclid=IwAR3SZHaYYWIPH1pNI_5GOPLXEgenptCZCMYGJuf2cylc8CKQEleX4V9t8s8"},"CFP-FP"))),(0,l.kt)("p",null,"Dataset g\u1ed3m 7k \u1ea3nh v\u1edbi 500 ids."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://ibug.doc.ic.ac.uk/resources/agedb/?fbclid=IwAR0FeJtXMelD7CWP5ORakjmXQ7kv5vMTnoOrXbgVVban4VgH7WPmxGjDj9k"},"AgeDB"))),(0,l.kt)("p",null,"Dataset g\u1ed3m 12240 \u1ea3nh cho 570 ids."),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"http://vis-www.cs.umass.edu/lfw/?fbclid=IwAR2egSCS-c2kjJKY-fWlhJrNDwDeD-2ycYg_WZ6TirHO7yDNe2m4XecpCZw"},"LFW"))),(0,l.kt)("p",null,"Dataset g\u1ed3m 13233 \u1ea3nh cho 5749 ids. "),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"http://www.whdeng.cn/CALFW/index.html?reload=true&fbclid=IwAR1buoHEsUjR4FmCOnZ2TNqPyUi3KFZW4TUZ-6o3um7oM56QFxZZaAWAHM8"},"CALFW"))),(0,l.kt)("p",null,"M\u1ed9t phi\xean b\u1ea3n n\xe2ng c\u1ea5p c\u1ee7a t\u1eadp LFW. C\u0169ng bao g\u1ed3m 13233 \u1ea3nh cho 5749 ids."))}k.isMDXComponent=!0}}]);
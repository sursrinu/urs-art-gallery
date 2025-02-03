(function(){"use strict";var e={202:function(e,t,n){var i=n(751),a=n(641);const l={id:"app"};function o(e,t,n,i,o,r){const s=(0,a.g2)("Header"),c=(0,a.g2)("Home"),g=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(s),(0,a.bF)(c),(0,a.bF)(g)])}var r=n(33);const s={class:"header"},c={class:"login-icon"},g={key:0,class:"dropdown-menu"};function u(e,t,n,i,l,o){const u=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("header",s,[(0,a.Lk)("div",{class:"hamburger",onClick:t[0]||(t[0]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},t[3]||(t[3]=[(0,a.Lk)("div",{class:"bar"},null,-1),(0,a.Lk)("div",{class:"bar"},null,-1),(0,a.Lk)("div",{class:"bar"},null,-1)])),t[4]||(t[4]=(0,a.Lk)("h1",null,"Art Gallery",-1)),(0,a.Lk)("div",c,[(0,a.Lk)("img",{src:"/path/to/login-icon.png",alt:"Login",onClick:t[1]||(t[1]=(...e)=>o.onLoginClick&&o.onLoginClick(...e))})])]),(0,a.Lk)("div",{class:(0,r.C4)([{"menu-open":l.isMenuOpen},"side-menu"])},[(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.bF)(u,{to:"/dashboard",class:"link"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)("Dashboard")]))),_:1})]),(0,a.Lk)("li",{onClick:t[2]||(t[2]=(...e)=>o.toggleArtsMenu&&o.toggleArtsMenu(...e)),class:"dropdown"},[t[9]||(t[9]=(0,a.Lk)("span",{class:"link"},"Arts",-1)),l.isArtsMenuOpen?((0,a.uX)(),(0,a.CE)("ul",g,[(0,a.Lk)("li",null,[(0,a.bF)(u,{to:"/arts/add",class:"link"},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)("Add")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(u,{to:"/arts/edit",class:"link"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("Edit")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(u,{to:"/arts/delete",class:"link"},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)("Delete")]))),_:1})])])):(0,a.Q3)("",!0)]),(0,a.Lk)("li",null,[(0,a.bF)(u,{to:"/logout",class:"link"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("Log Out")]))),_:1})])])],2)],64)}var d={name:"AppHeader",data(){return{isMenuOpen:!1,isArtsMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleArtsMenu(){this.isArtsMenuOpen=!this.isArtsMenuOpen},onLoginClick(){console.log("Login icon clicked")}}},p=n(262);const m=(0,p.A)(d,[["render",u],["__scopeId","data-v-538fbe58"]]);var f=m;const k={class:"footer"};function v(e,t,n,i,l,o){return(0,a.uX)(),(0,a.CE)("footer",k,t[0]||(t[0]=[(0,a.Lk)("p",null,"© 2025 Art Gallery",-1)]))}var h={name:"AppFooter"};const b=(0,p.A)(h,[["render",v],["__scopeId","data-v-768fe0b7"]]);var L=b;function P(e,t,n,i,l,o){const r=(0,a.g2)("Gallery");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(r)])}const x={class:"gallery"},C={class:"pagination-top"},y=["disabled"],M=["disabled"],O={class:"art-grid"},A=["src","alt","onClick"],w=["src","alt"],_={class:"pagination-bottom"},F=["disabled"],E=["disabled"];function I(e,t,n,l,o,s){return(0,a.uX)(),(0,a.CE)("div",x,[(0,a.Lk)("div",C,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=e=>s.changePage("prev")),disabled:1===o.currentPage},"Prev",8,y),(0,a.Lk)("span",null,(0,r.v_)(o.currentPage)+" / "+(0,r.v_)(s.totalPages),1),(0,a.Lk)("button",{onClick:t[1]||(t[1]=e=>s.changePage("next")),disabled:o.currentPage===s.totalPages},"Next",8,M)]),(0,a.Lk)("div",O,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.currentItems,(e=>((0,a.uX)(),(0,a.CE)("div",{class:"art-piece",key:e.id},[(0,a.Lk)("img",{src:e.image,alt:e.title,class:"art-image",onClick:t=>s.openModal(e)},null,8,A),(0,a.Lk)("p",null,(0,r.v_)(e.title),1)])))),128))]),o.isModalOpen?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"modal-overlay",onClick:t[4]||(t[4]=(...e)=>s.closeModal&&s.closeModal(...e))},[(0,a.Lk)("div",{class:"modal-content",onClick:t[3]||(t[3]=(0,i.D$)((()=>{}),["stop"]))},[(0,a.Lk)("img",{src:o.selectedImage.image,alt:o.selectedImage.title,class:"modal-image"},null,8,w),(0,a.Lk)("button",{class:"close-modal",onClick:t[2]||(t[2]=(...e)=>s.closeModal&&s.closeModal(...e))},"Close")])])):(0,a.Q3)("",!0),(0,a.Lk)("div",_,[(0,a.Lk)("button",{onClick:t[5]||(t[5]=e=>s.changePage("prev")),disabled:1===o.currentPage},"Prev",8,F),(0,a.Lk)("span",null,(0,r.v_)(o.currentPage)+" / "+(0,r.v_)(s.totalPages),1),(0,a.Lk)("button",{onClick:t[6]||(t[6]=e=>s.changePage("next")),disabled:o.currentPage===s.totalPages},"Next",8,E)])])}var B={name:"ArtGallery",data(){return{items:[{id:1,title:"Tulips Graden",image:n(620)},{id:2,title:"Beautiful Butterfly",image:n(679)},{id:3,title:"Natures Beauty",image:n(366)},{id:4,title:"Pictured Rocks",image:n(377)},{id:5,title:"Downtown Lake View",image:n(512)},{id:6,title:"Butterfly",image:n(787)},{id:7,title:"Snowy Day",image:n(210)},{id:8,title:"Bunch of Purple Flowers",image:n(69)},{id:9,title:"Basket of Veggies",image:n(124)},{id:10,title:"Sunflower Garden",image:n(654)},{id:11,title:"Starved Rocks",image:n(943)},{id:12,title:"Hungry Butterfly",image:n(732)},{id:13,title:"Beautiful Sunrise",image:n(629)},{id:14,title:"King of Jungle",image:n(770)},{id:15,title:"Lake view in the Winter",image:n(947)},{id:16,title:"Cute Squirrel",image:n(616)},{id:17,title:"Relaxing Calf",image:n(737)},{id:18,title:"Snow Leopard",image:n(222)},{id:19,title:"Beach Waves",image:n(711)},{id:20,title:"New Vrindhavan",image:n(583)},{id:21,title:"Flower Vase",image:n(246)}],currentPage:1,itemsPerPage:6,isModalOpen:!1,selectedImage:null}},computed:{totalPages(){return Math.ceil(this.items.length/this.itemsPerPage)},currentItems(){const e=(this.currentPage-1)*this.itemsPerPage;return this.items.slice(e,e+this.itemsPerPage)}},methods:{changePage(e){"prev"===e&&this.currentPage>1?this.currentPage--:"next"===e&&this.currentPage<this.totalPages&&this.currentPage++},openModal(e){this.selectedImage=e,this.isModalOpen=!0},closeModal(){this.isModalOpen=!1,this.selectedImage=null}}};const X=(0,p.A)(B,[["render",I],["__scopeId","data-v-8e0ea2d4"]]);var G=X,H={name:"AppHome",components:{Gallery:G}};const W=(0,p.A)(H,[["render",P]]);var j=W,S={name:"App",components:{Header:f,Footer:L,Home:j}};const D=(0,p.A)(S,[["render",o]]);var N=D;(0,i.Ef)(N).mount("#app")},620:function(e,t,n){e.exports=n.p+"img/image1.01ad82fa.png"},654:function(e,t,n){e.exports=n.p+"img/image10.af4a7d64.png"},943:function(e,t,n){e.exports=n.p+"img/image11.b869186b.png"},732:function(e,t,n){e.exports=n.p+"img/image12.acdc7c4d.png"},629:function(e,t,n){e.exports=n.p+"img/image13.65760c19.png"},770:function(e,t,n){e.exports=n.p+"img/image14.e9674620.png"},947:function(e,t,n){e.exports=n.p+"img/image15.dd22d6ee.png"},616:function(e,t,n){e.exports=n.p+"img/image16.6185c1db.png"},737:function(e,t,n){e.exports=n.p+"img/image17.f8fce666.png"},222:function(e,t,n){e.exports=n.p+"img/image18.a0d0d069.png"},711:function(e,t,n){e.exports=n.p+"img/image19.651128ed.png"},679:function(e,t,n){e.exports=n.p+"img/image2.cd258f7d.png"},583:function(e,t,n){e.exports=n.p+"img/image20.e2294aee.png"},246:function(e,t,n){e.exports=n.p+"img/image21.d1e36589.png"},366:function(e,t,n){e.exports=n.p+"img/image3.a58c0fcd.png"},377:function(e,t,n){e.exports=n.p+"img/image4.6de42739.png"},512:function(e,t,n){e.exports=n.p+"img/image5.b821f2be.png"},787:function(e,t,n){e.exports=n.p+"img/image6.659baa39.png"},210:function(e,t,n){e.exports=n.p+"img/image7.10d250ef.png"},69:function(e,t,n){e.exports=n.p+"img/image8.d7b76b85.png"},124:function(e,t,n){e.exports=n.p+"img/image9.6d95c967.png"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,l){if(!i){var o=1/0;for(g=0;g<e.length;g++){i=e[g][0],a=e[g][1],l=e[g][2];for(var r=!0,s=0;s<i.length;s++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(r=!1,l<o&&(o=l));if(r){e.splice(g--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var g=e.length;g>0&&e[g-1][2]>l;g--)e[g]=e[g-1];e[g]=[i,a,l]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/urs-art-gallery/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,l,o=i[0],r=i[1],s=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(s)var g=s(n)}for(t&&t(i);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(g)},i=self["webpackChunkurs_art_gallery"]=self["webpackChunkurs_art_gallery"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(202)}));i=n.O(i)})();
//# sourceMappingURL=app.8e159a22.js.map
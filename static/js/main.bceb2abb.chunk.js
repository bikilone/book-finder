(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(55)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=(n(24),n(5)),s=n(6),l=n(12),u=n(16),m=n(13),h=n(17),p=n(59),d=n(58);n(25);function f(e){var t=e.inputText,n=e.onInputChange,a=e.onSubmit,o=e.clearInput,i=e.onClick;return r.a.createElement("div",null,r.a.createElement("h1",{className:"main-h1"},"Book | Finder"),r.a.createElement("form",{action:"",onSubmit:a},r.a.createElement("input",{className:"input",type:"text",onChange:n,value:t}),r.a.createElement("span",{onClick:o},"X"),r.a.createElement("button",{onClick:i,className:"search-button",type:"submit"},"Search")))}var g=n(56);n(26);function v(e){var t=e.card,n=t.title,a=t.author,o=t.publisher,i=(t.link,t.image),c=t.id;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:i,alt:""}),r.a.createElement("div",{className:"card-right"},r.a.createElement("div",{className:"card-rigth-top"},r.a.createElement("h1",null,n),r.a.createElement("svg",{onClick:e.saveInBookshelf},r.a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",className:"a",d:"M33.688,36.755h11.5l3.584-10.911L52.3,36.755H63.8l-9.307,6.739,3.53,10.965L48.771,47.72l-9.307,6.739,3.53-10.965Z",transform:"translate(-33.688 -25.844)"}))),r.a.createElement("p",{className:"author"},"By: ",a),r.a.createElement("p",{className:"publisher"},"Published By: ",o),r.a.createElement(g.a,{to:"/".concat(c)},r.a.createElement("button",{className:"button"},"See this Book"))))}n(29);function E(e){return r.a.createElement("div",{className:"card-list"},e.cards.map(function(t,n){return r.a.createElement(v,{card:t,key:t.id,id:t.id,saveInBookshelf:e.saveInBookshelf})}))}function w(e){return e.length>50?e.slice(0,40)+"...":e}var k=function e(t,n){Object(s.a)(this,e),this.title=t.title?w(t.title):t.title,this.author=t.authors?function(e){return e.length>1?w(e.join(", ")):w(e)}(t.authors):"Unknown author",this.publisher=t.publisher?w(t.publisher):"Unknown publisher",this.image=t.imageLinks?t.imageLinks.thumbnail:"https://image.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg",this.link=t.previewLink,this.id=n},b=n(14),y=n.n(b);n(51);function S(e){switch(e.error){case"empty input":return r.a.createElement("div",{className:"error"},"You must enter something in input");case"empty response":return r.a.createElement("div",{className:"error"},"There is no such book");case"something went wrong":return r.a.createElement("div",{className:"error"},"Something went wrong");default:return""}}n(52);function I(){return r.a.createElement("div",{className:"landing"},"Nothing yet :D")}function N(){return r.a.createElement("div",null,"sdsdfa")}n(53);var j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).saveInBookshelf=function(e){"white"===e.target.style.fill&&(e.target.style.fill="blue")},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(t){t.preventDefault();e.setState({loading:!0,error:!1,errorType:""}),0===e.state.input.length?e.setState({error:!0,errorType:"empty input"}):fetch("".concat("https://www.googleapis.com/books/v1/volumes?q="+e.state.input,"&key=").concat("AIzaSyAOaVBnu7fgtzZVvuSjWw9MaGmDE3P73sA","&maxResults=40&orderBy=relevance")).then(function(e){if(e.ok)return e.json();throw new S("Something went wrong")}).then(function(t){var n=[];console.log(t),0===t.totalItems?e.setState({error:!0,errorType:"empty response"}):(e.setState({error:!1,errorType:""}),t.items.forEach(function(e,t){n.push(new k(e.volumeInfo,e.id))})),e.setState({cards:n,loading:!1})}).catch(function(t){e.setState({error:!0,errorType:"something went wrong"})})},e.onClick=function(){e.setState({error:!1,errorType:""})},e.clearInput=function(){e.setState({input:""})},e.state={input:"",cards:[],loading:!1,error:!1,errorType:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{clearInput:this.clearInput,inputText:this.state.input,onInputChange:this.onInputChange,onSubmit:this.onSubmit,onClick:this.onClick}),this.state.error?r.a.createElement(S,{error:this.state.errorType}):this.state.loading?r.a.createElement("div",{style:{marginTop:"100px"}},r.a.createElement(y.a,(e={type:"Circles",color:"#ff6f00",marginTop:"100px"},Object(c.a)(e,"marginTop",100),Object(c.a)(e,"height",200),Object(c.a)(e,"width",200),Object(c.a)(e,"className","loader"),e))):this.state.cards.length>0?r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(E,{saveInBookshelf:t.saveInBookshelf,cards:t.state.cards,loading:t.state.loading})}}),r.a.createElement(d.a,{exact:!0,path:"/:id",component:N})):r.a.createElement(I,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(57);i.a.render(r.a.createElement(B.a,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.bceb2abb.chunk.js.map
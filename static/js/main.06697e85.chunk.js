(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},20:function(e,t,a){e.exports=a(60)},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),c=(a(26),a(5)),s=a(10),i=a(7),u=a(14),h=a(18),m=a(15),f=a(19),p=a(64),g=a(63);a(12);function d(e){var t=e.inputText,a=e.onInputChange,n=e.onSubmit,o=e.clearInput,l=e.onClick;return r.a.createElement("div",null,r.a.createElement("form",{action:"",onSubmit:n},r.a.createElement("input",{className:"input",type:"text",onChange:a,value:t}),r.a.createElement("span",{onClick:o},"X"),r.a.createElement("button",{onClick:l,className:"search-button",type:"submit"},"Search")))}var k=a(61);a(27);function b(e){var t=e.card,a=t.title,n=t.author,o=t.publisher,l=(t.link,t.image),c=e.id,s=e.bookshelf,i="white";return s.length>0&&s.forEach(function(e){e.id!=c||(i="#ff3d02")}),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:l,alt:""}),r.a.createElement("div",{className:"card-right"},r.a.createElement("div",{className:"card-rigth-top"},r.a.createElement("h1",null,a),r.a.createElement("svg",{onClick:function(t){e.saveInBookshelf(t,e.id,s,e.card)}},r.a.createElement("path",{fill:i,xmlns:"http://www.w3.org/2000/svg",className:"a",d:"M33.688,36.755h11.5l3.584-10.911L52.3,36.755H63.8l-9.307,6.739,3.53,10.965L48.771,47.72l-9.307,6.739,3.53-10.965Z",transform:"translate(-33.688 -25.844)"}))),r.a.createElement("p",{className:"author"},"By: ",n),r.a.createElement("p",{className:"publisher"},"Published By: ",o),r.a.createElement(k.a,{to:"/".concat(c)},r.a.createElement("button",{className:"button"},"See this Book"))))}a(30),a(31);function v(e){return r.a.createElement("div",{className:"landing"},e.message?e.message:"Nothing yet")}function E(e){return r.a.createElement("div",{className:"card-list"},e.cards.length>0?e.cards.map(function(t,a){return r.a.createElement(b,{card:t,key:t.id,id:t.id,saveInBookshelf:e.saveInBookshelf,bookshelf:e.bookshelf})}):r.a.createElement(v,{message:"Empty bookshelf"}))}function S(e){return e.length>50?e.slice(0,40)+"...":e}var w=function e(t,a){Object(i.a)(this,e),this.title=t.title?S(t.title):t.title,this.author=t.authors?function(e){return e.length>1?S(e.join(", ")):S(e)}(t.authors):"Unknown author",this.publisher=t.publisher?S(t.publisher):"Unknown publisher",this.image=t.imageLinks?t.imageLinks.thumbnail:"https://image.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg",this.link=t.previewLink,this.id=a},y=a(16),I=a.n(y);a(53);function N(e){switch(e.error){case"empty input":return r.a.createElement("div",{className:"error"},"You must enter something in input");case"empty response":return r.a.createElement("div",{className:"error"},"There is no such book");case"something went wrong":return r.a.createElement("div",{className:"error"},"Something went wrong");default:return""}}function O(e){return r.a.createElement("div",null,"da")}function B(e){return r.a.createElement("div",{className:"header"},r.a.createElement(k.a,{to:"/",className:"main-h1"},"Book | Finder"),r.a.createElement(k.a,{className:"main-h1 bookshelf search-button",to:"/bookshelf"},"Bookshelf"))}a(54),a(55);var j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).saveInBookshelf=function(t,a,n,r){if(n.length>0)if(void 0==n.find(function(e){return e.id==a})){var o=JSON.parse(localStorage.getItem("bookshelf"));o.push(Object(s.a)({id:a},r)),localStorage.setItem("bookshelf",JSON.stringify(o)),e.checkLocalStorage()}else{var l=JSON.parse(localStorage.getItem("bookshelf"));l=l.filter(function(e){return e.id!==a}),localStorage.setItem("bookshelf",JSON.stringify(l)),e.checkLocalStorage()}else{var c=[];c.push(Object(s.a)({id:a},r)),localStorage.setItem("bookshelf",JSON.stringify(c)),e.checkLocalStorage()}},e.checkLocalStorage=function(){if(null!==localStorage.getItem("bookshelf")){var t=JSON.parse(localStorage.getItem("bookshelf"));e.setState({bookshelf:t})}else e.setState({bookshelf:[]})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.fetchingData=function(){fetch("".concat("https://www.googleapis.com/books/v1/volumes?q="+e.state.input,"&key=").concat("AIzaSyAOaVBnu7fgtzZVvuSjWw9MaGmDE3P73sA","&maxResults=40&orderBy=relevance")).then(function(e){if(e.ok)return e.json();throw new N("Something went wrong")}).then(function(t){var a=[];0===t.totalItems?e.setState({error:!0,errorType:"empty response"}):(e.setState({error:!1,errorType:""}),t.items.forEach(function(e,t){a.push(new w(e.volumeInfo,e.id))})),e.setState({cards:a,loading:!1})}).catch(function(t){e.setState({error:!0,errorType:"something went wrong"})})},e.onSubmit=function(t){t.preventDefault(),e.setState({loading:!0,error:!1,errorType:""}),0===e.state.input.length?e.setState({error:!0,errorType:"empty input"}):e.fetchingData()},e.onClick=function(){e.setState({error:!1,errorType:""})},e.clearInput=function(){e.setState({input:""})},e.state={input:"",cards:[],loading:!1,error:!1,errorType:"",bookshelf:[],mark:""},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.checkLocalStorage()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(p.a,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(){var t;return r.a.createElement("div",null,r.a.createElement(d,{clearInput:e.clearInput,inputText:e.state.input,onInputChange:e.onInputChange,onSubmit:e.onSubmit,onClick:e.onClick}),e.state.error?r.a.createElement(N,{error:e.state.errorType}):e.state.loading?r.a.createElement("div",{style:{marginTop:"100px"}},r.a.createElement(I.a,(t={type:"Circles",color:"#ff6f00",marginTop:"100px"},Object(c.a)(t,"marginTop",100),Object(c.a)(t,"height",200),Object(c.a)(t,"width",200),Object(c.a)(t,"className","loader"),t))):e.state.cards.length>0?r.a.createElement(E,{bookshelf:e.state.bookshelf,saveInBookshelf:e.saveInBookshelf,cards:e.state.cards,loading:e.state.loading}):r.a.createElement(v,null))}}),r.a.createElement(g.a,{exact:!0,path:"/bookshelf",render:function(){return r.a.createElement(E,{bookshelf:e.state.bookshelf,saveInBookshelf:e.saveInBookshelf,cards:e.state.bookshelf,loading:e.state.loading})}}),r.a.createElement(g.a,{path:"/:id",render:function(e){return r.a.createElement(O,null)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(62);l.a.render(r.a.createElement(C.a,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.06697e85.chunk.js.map
(this.webpackJsonpproject3_frontend=this.webpackJsonpproject3_frontend||[]).push([[0],{101:function(e,t){},120:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),l=a.n(c),s=(a(59),a(5)),o=(a(60),a(4)),i=a(3),m=a(11),u=a.n(m),p=a(15),h=a(6),E=a.n(h),d=(a(24),function(e){var t=e.name,a=e.images,c=e.description,l=e.total_episodes,i=e.external_urls,m=e.explicit,u=e.publisher,p=Object(n.useState)(!1),h=Object(s.a)(p,2),d=h[0],f=h[1];return r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"card",onClick:function(){return f(!d)}},a.length?r.a.createElement("img",{width:"100%",src:a[0].url,alt:""}):r.a.createElement("div",null,"No Image")),r.a.createElement(o.d,{isOpen:d},r.a.createElement(o.g,{toggle:function(){return f(!d)}},t),r.a.createElement(o.e,{className:"text-center"},a.length?r.a.createElement("img",{width:"50%",src:a[1].url,alt:""}):r.a.createElement("div",null,"No Image")),r.a.createElement(o.e,{className:"text-center"},c),r.a.createElement(o.e,{className:"text-center",style:{color:!0===m?"red":"green"}},!0===m?"EXPLICIT":"CLEAN"),r.a.createElement(o.e,{className:"text-center"},"Published by: ",u),r.a.createElement(o.e,{className:"text-center"},"Total Episodes: ",l),r.a.createElement(o.f,null,r.a.createElement("div",{className:"spotify-button"},r.a.createElement("a",{href:i.spotify,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/images/Listen-on-Spotify-badge@2x.png",width:"100%",alt:"listen on spotify button"}))),r.a.createElement(o.a,{color:"success",onClick:function(e){e.preventDefault(),E.a.post("http://localhost:8000/playlists",{name:t,images:a,description:c,explicit:m,total_episodes:l,publisher:u,external_urls:i}),f(!d)}},"Add to Favorites"))))}),f=(a(34),function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],m=o[1],h=Object(n.useState)("Podcast Name"),f=Object(s.a)(h,2),g=f[0],N=f[1],b=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Mjk3Zjk5YjUwMjVhNGEwZGE2ODkwZDI3NmZlOWNmNzc6NTE5MTUwNDZjZDM1NGNkYjg0OTI4NjA0ZmUwNDBlOTI","https://accounts.spotify.com/api/token",t={headers:{Authorization:"Basic Mjk3Zjk5YjUwMjVhNGEwZGE2ODkwZDI3NmZlOWNmNzc6NTE5MTUwNDZjZDM1NGNkYjg0OTI4NjA0ZmUwNDBlOTI"},form:{grant_type:"client_credentials"},json:!0},e.next=5,E.a.post("https://accounts.spotify.com/api/token","grant_type=client_credentials",t);case 5:return a=e.sent,n=a.data,e.abrupt("return",n.access_token);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b();case 3:return n=e.sent,e.next=6,E.a.get("https://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},params:{q:a,type:"show",market:"US"}});case 6:r=e.sent,c=r.data,m(c.shows.items),N("Podcast Name");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search-form"},r.a.createElement("form",{className:"search-background",onSubmit:v},r.a.createElement("input",{className:"search-input",type:"text",placeholder:g,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"search-button",type:"submit"},"Search"),r.a.createElement("input",{className:"search-button",type:"reset",value:"Clear",onClick:function(e){c(""),m([])}})),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"search-results"},"search: ",a)),r.a.createElement(r.a.Fragment,null,i.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))}),g=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="Mjk3Zjk5YjUwMjVhNGEwZGE2ODkwZDI3NmZlOWNmNzc6NTE5MTUwNDZjZDM1NGNkYjg0OTI4NjA0ZmUwNDBlOTI",console.log(t),"https://accounts.spotify.com/api/token",a={headers:{Authorization:"Basic "+t},form:{grant_type:"client_credentials"},json:!0},e.next=6,E.a.post("https://accounts.spotify.com/api/token","grant_type=client_credentials",a);case 6:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r.access_token);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("searchShows"),t=Math.floor(20*Math.random()+1),a=t.toString(),e.next=5,l();case 5:return n=e.sent,console.log(n),e.next=9,E.a.get("https://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},params:{q:"%25a%25",type:"show",market:"US",include_external:"audio",limit:"50",offset:a}});case 9:r=e.sent,s=r.data,console.log(s.shows.items),c(s.shows.items);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.length>0?r.a.createElement("div",null,r.a.createElement("h5",{className:"random"},"Enter A New Search Or Browse These Random Podcasts!"),r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"No Podcasts Available"))},N=(a(81),a(120),function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){E.a.get("http://localhost:8000/podcasts",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){c(e.data)}))}),[]),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("br",null),r.a.createElement("p",null),r.a.createElement(g,null)):r.a.createElement("div",{className:"sign-up-prompt"},r.a.createElement("h5",{className:"unauthorized"}," ","Please ",r.a.createElement("a",{href:"/signin"},"Sign In")," to View This Page"),r.a.createElement("h6",{className:"unauthorized"}," ","Don't have an account? ",r.a.createElement("a",{href:"/signup"},"Sign Up")))}),b=function(e){var t=e.name,a=e.images,c=e.description,l=e.total_episodes,i=e.external_urls,m=e.explicit,u=e.publisher,p=e._id,h=Object(n.useState)(!1),d=Object(s.a)(h,2),f=d[0],g=d[1];return r.a.createElement("div",{className:"cards user-cards"},r.a.createElement("div",{className:"card",onClick:function(){return g(!f)}},a.length?r.a.createElement("img",{width:"100%",src:a[0].url,alt:""}):r.a.createElement("div",null,"No Image")),r.a.createElement(o.d,{isOpen:f},r.a.createElement(o.g,{toggle:function(){return g(!f)}},t),r.a.createElement(o.e,{className:"text-center"},a.length?r.a.createElement("img",{width:"50%",src:a[1].url,alt:""}):r.a.createElement("div",null,"No Image")),r.a.createElement(o.e,{className:"text-center"},c),r.a.createElement(o.e,{className:"text-center",style:{color:!0===m?"red":"green"}},!0===m?"EXPLICIT":"CLEAN"),r.a.createElement(o.e,{className:"text-center"},"Published by: ",u),r.a.createElement(o.e,{className:"text-center"},"Total Episodes: ",l),r.a.createElement(o.f,null,r.a.createElement("div",{className:"spotify-button"},r.a.createElement("a",{href:i.spotify,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/images/Listen-on-Spotify-badge@2x.png",width:"100%",alt:"listen on spotify button"}))),r.a.createElement(o.a,{color:"success",onClick:function(){E.a.delete("http://localhost:8000/playlists/".concat(p)),window.location.reload()}},"Remove"))))},v=E.a.create({baseURL:"http://localhost:8000/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),j=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){v.get("http://localhost:8000/playlists").then((function(e){c(e.data)}))}),[]),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"favorites-podcasts"},r.a.createElement("h5",{className:"random"},"My Favorite Podcasts!")),a.map((function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}))):r.a.createElement("div",null,r.a.createElement("p",{className:"unauthorized"}," Please ",r.a.createElement("a",{href:"/"},"Sign In")," to View Add To This List "))},y=(a(49),function(e){e.userEmail,e.setUserEmail;var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),u=m[0],p=m[1],h=Object(i.f)(),d={"Content-Type":"application/json"};return r.a.createElement("div",{className:"center-everything"},r.a.createElement("div",{className:"signin"},r.a.createElement("h3",null,"Welcome! Please sign in."),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),E.a.post("http://localhost:8000/api/signin",{email:c,password:u},{headers:d}).then((function(e){localStorage.setItem("token",e.data.token),h("/home",{replace:!0})})),l(""),p("")}(e)}},r.a.createElement("input",{type:"text",placeholder:"Email Address",value:c,onChange:function(e){e.preventDefault(),l(e.target.value)}})," ",r.a.createElement("input",{type:"text",placeholder:"Password",value:u,onChange:function(e){e.preventDefault(),p(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Sign In"}),r.a.createElement("h6",{className:"unauthorized"}," Don't have an account? ",r.a.createElement("a",{href:"/signup"},"Sign Up")))))}),O=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),u=m[0],p=m[1],h=Object(i.f)();return r.a.createElement(o.c,null,r.a.createElement("div",{className:"center-everything"},r.a.createElement("form",{className:"signup",onSubmit:function(e){e.preventDefault(),E.a.post("http://localhost:8000/api/signup",{email:a,password:u}),h("/signin",{replace:!0}),c(""),p("")}},r.a.createElement("h5",null,"Please register with an email address and password below"),r.a.createElement("input",{type:"text",placeholder:"Email Address",value:a,onChange:function(e){e.preventDefault(),c(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Password",value:u,onChange:function(e){e.preventDefault(),p(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Sign Up"}))))},w=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("span",{className:"font-link"},r.a.createElement(o.k,{className:"nav-bar",color:"",expand:"md",fixed:"top",dark:!0},r.a.createElement(o.l,{href:"/"},r.a.createElement("img",{src:"/images/airpods-white-small.png",alt:"airpods logo"})),r.a.createElement(o.n,{className:"me-2",onClick:function(){return c(!a)}}),r.a.createElement(o.b,{navbar:!0,isOpen:a},r.a.createElement(o.h,{className:"me-auto",navbar:!0},r.a.createElement(o.i,null,r.a.createElement(o.j,{href:"/home"},"| Home |")),r.a.createElement(o.i,null,r.a.createElement(o.j,{href:"/mypodcasts"},"| My Podcasts |"))),r.a.createElement(o.j,{href:"/signin",onClick:function(){localStorage.clear()}},r.a.createElement(o.m,null,"Log Out")),r.a.createElement(o.m,null,r.a.createElement("img",{src:"/images/poweredby.png",alt:"spotify logo"}))))),r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(N,null)}),r.a.createElement(i.a,{path:"/home",element:r.a.createElement(N,null)}),r.a.createElement(i.a,{path:"/mypodcasts",element:r.a.createElement(j,null)}),r.a.createElement(i.a,{path:"/signin",element:r.a.createElement(y,null)}),r.a.createElement(i.a,{path:"/signup",element:r.a.createElement(O,null)}))))},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,129)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))},x=(a(121),a(18));l.a.render(r.a.createElement(x.a,null,r.a.createElement(w,null)),document.getElementById("root")),k()},24:function(e,t,a){},34:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){e.exports=a(122)},59:function(e,t,a){},60:function(e,t,a){},99:function(e,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.01fd9289.chunk.js.map
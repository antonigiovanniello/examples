/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonprealworld_app=window.dojoWebpackJsonprealworld_app||[]).push([["src/widgets/Article"],{53:function(e,t,s){"use strict";s.r(t);var a={"":["<em>","</em>"],_:["<strong>","</strong>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function c(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function n(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}t.default=function e(t){var s,o,r,l,i,b=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,g=[],u="",m=0,d={};function j(e){var t=a[e.replace(/\*/g,"_")[1]||""],s=g[g.length-1]==e;return t?t[1]?(g[s?"pop":"push"](e),t[0|s]):t[0]:e}function p(){for(var e="";g.length;)e+=j(g[g.length-1]);return e}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,t,s){return d[t.toLowerCase()]=s,""}).replace(/^\n+|\n+$/g,"");r=b.exec(t);)o=t.substring(m,r.index),m=b.lastIndex,s=r[0],o.match(/[^\\](\\\\)*\\$/)||(r[3]||r[4]?s='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'">'+c(n(r[3]||r[4]).replace(/^\n+|\n+$/g,""))+"</pre>":r[6]?((i=r[6]).match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),l=e(c(r[5].replace(/^\s*[>*+.-]/gm,""))),">"===i?i="blockquote":(i=i.match(/\./)?"ol":"ul",l=l.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),s="<"+i+">"+l+"</"+i+">"):r[8]?s='<img src="'+n(r[8])+'" alt="'+n(r[7])+'">':r[10]?(u=u.replace("<a>",'<a href="'+n(r[11]||d[o.toLowerCase()])+'">'),s=p()+"</a>"):r[9]?s="<a>":r[12]||r[14]?s="<"+(i="h"+(r[14]?r[14].length:"="===r[13][0]?1:2))+">"+e(r[12]||r[15])+"</"+i+">":r[16]?s="<code>"+n(r[16])+"</code>":(r[17]||r[1])&&(s=j(r[17]||"--"))),u+=o,u+=s;return(u+t.substring(m)+p()).trim()}},57:function(e,t,s){"use strict";s.r(t);var a=s(18),c=s(19),n=s(23);const o=Object(a.a)({}).properties()(function({properties:e}){const{slug:t,comment:s,loggedInUser:c,deleteComment:o}=e();return Object(a.g)("div",{classes:["card"]},Object(a.g)("div",{classes:["card-block"]},Object(a.g)("p",{classes:["card-text"]},s.body)),Object(a.g)("div",{classes:["card-footer"]},Object(a.g)(n.b,{to:"user",classes:["comment-author"],params:{username:s.author.username}},Object(a.g)("img",{src:s.author.image,classes:["comment-author-img"]})),Object(a.g)(n.b,{to:"user",classes:["comment-author"],params:{username:s.author.username}},` ${s.author.username}`),Object(a.g)("div",{classes:"date-posted"},new Date(s.createdAt).toDateString()),c===s.author.username&&Object(a.g)("div",{classes:["mod-options"]},Object(a.g)("i",{onclick:()=>{o({slug:t,id:s.id})},classes:["ion-trash-a"]}))))});const r=Object(a.a)({}).properties()(function({properties:e}){const{favoritesCount:t,slug:s,favoriteArticle:c,favorited:n,following:o,authorUsername:r,followUser:l}=e();return Object(a.g)("span",null,Object(a.g)("button",{onclick:()=>{l({username:r,following:o})},classes:["btn","btn-sm",o?"btn-secondary":"btn-outline-secondary"]},Object(a.g)("i",{classes:["ioc-plus-round"]}),`${o?" Unfollow":" Follow"} ${r}`),Object(a.g)("button",{onclick:()=>{c({slug:s,favorited:n})},classes:["btn","btn-sm",n?"btn-primary":"btn-outline-primary"]},Object(a.g)("i",{classes:["ion-heart"]}),`${n?" Unfavorite":" Favorite"}`,Object(a.g)("span",{classes:["counter"]},`(${t})`)))});const l=Object(a.a)({}).properties()(function({properties:e}){const{slug:t,deleteArticle:s}=e();return Object(a.g)("span",null,Object(a.g)(n.a,{to:"edit-post",params:{slug:t},classes:["btn","btn-sm","btn-outline-secondary"]},Object(a.g)("i",{classes:["ion-edit"]})," Edit Article"),Object(a.g)("button",{classes:["btn","btn-sm","btn-outline-danger"],onclick:()=>{s({slug:t})}},Object(a.g)("i",{classes:["ion-trash-a"]})," Delete Article"))});const i=Object(a.a)({}).properties()(function({properties:e}){const{article:t,isAuthenticated:s,currentUser:c,favoriteArticle:o,followUser:i,deleteArticle:b}=e(),{author:g,slug:u,createdAt:m,favorited:d,favoritesCount:j}=t;return Object(a.g)("div",{classes:["article-meta"]},Object(a.g)(n.a,{to:"user",params:{username:g.username}},Object(a.g)("img",{src:g.image})),Object(a.g)("div",{classes:["info"]},Object(a.g)(n.a,{to:"user",params:{username:g.username},classes:["author"]},g.username),Object(a.g)("span",{classes:["date"]},new Date(m).toDateString())),s&&(c===g.username?Object(a.g)(l,{slug:u,deleteArticle:b}):Object(a.g)(r,{favorited:d,followUser:i,favoriteArticle:o,favoritesCount:j,slug:u,following:g.following,authorUsername:g.username})))});var b=s(20),g=s(21),u=s(22),m=s(25);const d=Object(u.a)(({path:e,payload:{slug:t}})=>[Object(g.c)(e("article",t,"item"),void 0),Object(g.c)(e("article",t,"comments"),[]),Object(g.c)(e("article",t,"isLoading"),!0),Object(g.c)(e("article",t,"isLoaded"),!1)]),j=Object(u.a)(async({get:e,path:t,payload:{slug:s}})=>{const a=e(t("session","token")),c=await fetch(`${m.a}/articles/${s}`,{headers:Object(u.b)(a)}),n=await c.json();return[Object(g.c)(t("article",s,"item"),n.article),Object(g.c)(t("article",s,"isLoading"),!1),Object(g.c)(t("article",s,"isLoaded"),!0)]}),p=Object(u.a)(async({get:e,path:t,payload:{slug:s,favorited:a}})=>{const c=e(t("session","token")),n=await fetch(`${m.a}/articles/${s}/favorite`,{method:a?"delete":"post",headers:Object(u.b)(c)}),o=await n.json();return[Object(g.c)(t("article",s,"item"),o.article)]}),O=Object(u.a)(async({get:e,path:t,payload:{slug:s,username:a,following:c}})=>{const n=e(t("session","token")),o=await fetch(`${m.a}/profiles/${a}/follow`,{method:c?"delete":"post",headers:Object(u.b)(n)}),r=await o.json(),l=e(t("article",s,"item"));return[Object(g.c)(t("article",s,"item"),Object.assign({},l,{author:r.profile}))]}),f=Object(u.a)(async({get:e,path:t,payload:{slug:s}})=>{const a=e(t("session","token")),c=await fetch(`${m.a}/articles/${s}/comments`,{headers:Object(u.b)(a)}),n=await c.json();return[Object(g.c)(t("article",s,"comments"),n.comments)]}),h=Object(u.a)(async({get:e,path:t,payload:{slug:s,newComment:a}})=>{const c=e(t("session","token")),n={comment:{body:a}},o=await fetch(`${m.a}/articles/${s}/comments`,{method:"post",headers:Object(u.b)(c),body:JSON.stringify(n)}),r=await o.json(),l=e(t("article",s,"comments"));return[Object(g.c)(t("article",s,"comments"),[...l,r.comment]),Object(g.c)(t("article",s,"newComment"),"")]}),w=Object(u.a)(async({at:e,get:t,path:s,payload:{slug:a,id:c}})=>{const n=t(s("session","token"));await fetch(`${m.a}/articles/${a}/comments/${c}`,{method:"delete",headers:Object(u.b)(n)});const o=t(s("article",a,"comments"));let r=-1;for(let e=0;e<o.length;e++)if(o[e].id===c){r=e;break}return-1!==r?[Object(g.b)(e(s("article",a,"comments"),r))]:[]}),v=Object(u.a)(({path:e,payload:{newComment:t,slug:s}})=>[Object(g.c)(e("article",s,"newComment"),t)]),y=Object(u.a)(async({get:e,path:t,payload:{slug:s}})=>{const a=e(t("session","token"));return await fetch(`${m.a}/articles/${s}`,{method:"delete",headers:Object(u.b)(a)}),[Object(g.c)(t("routing","outlet"),"home")]}),$=Object(b.b)("get-article",[d,[j,f]]),k=Object(b.b)("delete-comment",[w]),A=Object(b.b)("add-comment",[h]),C=Object(b.b)("new-comment-input",[v]),U=Object(b.b)("fav-article",[p]),L=Object(b.b)("follow-user",[O]),x=Object(b.b)("delete-article",[y]);s.d(t,"Article",function(){return D});const _=s(53),D=Object(a.a)({store:c.a}).properties()(function({middleware:{store:e},properties:t}){const{get:s,path:c,executor:n}=e,{slug:r}=t(),l=s(c("article",r,"item")),b=s(c("article",r,"comments"))||[],g=s(c("article",r,"newComment")),u=s(c("article",r,"isLoaded")),m=s(c("article",r,"isLoading")),d=!!s(c("session","token")),j=s(c("session","username")),p=s(c("session","username"));if(l||m||n($)({slug:r}),!u)return Object(a.g)("div",{classes:["article-page"]},Object(a.g)("div",{classes:["banner"]}));const{favorited:O}=l,f=Object(a.g)(i,{article:l,isAuthenticated:d,currentUser:p,favoriteArticle:()=>{n(U)({favorited:O,slug:r})},followUser:()=>{n(L)({slug:r,username:l.author.username,following:l.author.following})},deleteArticle:()=>{n(x)({slug:r})}});return Object(a.g)("div",{classes:["article-page"]},Object(a.g)("div",{key:"banner",classes:["banner"]},Object(a.g)("div",{classes:["container"]},Object(a.g)("h1",null,l.title),f)),Object(a.g)("div",{key:"page",classes:["container","page"]},Object(a.g)("div",{classes:["row","article-content"]},Object(a.g)("div",{classes:["col-xs-12"]},Object(a.g)("div",{innerHTML:_.default(l.body)}),Object(a.g)("ul",{classes:["tag-list"]},l.tagList.map(e=>Object(a.g)("li",{classes:["tag-default","tag-pill","tag-outline"]},e))))),Object(a.g)("hr",null),Object(a.g)("div",{key:"actions",classes:["article-actions"]},f),Object(a.g)("div",{key:"row",classes:["row"]},Object(a.g)("div",{classes:["col-xs-12","col-md-8","offset-md-2"]},d?Object(a.g)("form",{classes:["card","comment-form"]},Object(a.g)("div",{classes:["card-block"]},Object(a.g)("textarea",{value:g,classes:["form-control"],placeholder:"Write a comment...",rows:3,oninput:e=>{const t=e.target;n(C)({slug:r,newComment:t.value})}})),Object(a.g)("div",{classes:["card-footer"]},Object(a.g)("img",{classes:["comment-author-img"],src:""}),Object(a.g)("button",{onclick:()=>{n(A)({slug:r,newComment:g})},classes:["btn","btn-sm","btn-primary"]},"Post Comment"))):Object(a.g)("p",null),Object(a.g)("div",null,b.map((e,t)=>Object(a.g)(o,{key:t,comment:e,loggedInUser:j,deleteComment:()=>{n(k)({slug:r,id:e.id})},slug:r})))))))});t.default=D}}]);
//# sourceMappingURL=Article.5dd1b7cc2f71412409d5.bundle.js.map
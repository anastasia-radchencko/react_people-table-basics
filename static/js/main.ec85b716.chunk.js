(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(10),r=(c(36),c(37),c(3)),s=(c(38),c(4)),j=c(27),i=c(7),o=c(5),b=c(0),l=(c(39),c(2)),h=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})};function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var x=c(14),O=c.n(x),u=function(e){var t=e.person;return Object(l.jsx)(a.b,{to:"/people/".concat(t.slug),className:O()({"has-text-danger":"f"===t.sex}),children:t.name})},p=function(e){var t=e.person,c=Object(r.q)().slug,n=void 0===c?"":c,a=t.sex,s=t.born,j=t.died,i=t.motherName,o=t.fatherName,b=t.mother,h=t.father,d=n===t.slug;return Object(l.jsxs)("tr",{"data-cy":"person",className:O()({"has-background-warning":d}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(u,{person:t})}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:j}),Object(l.jsx)("td",{children:b?Object(l.jsx)(u,{person:b}):i||"-"}),Object(l.jsx)("td",{children:h?Object(l.jsx)(u,{person:h}):o||"-"})]})},m=function(e){var t=e.people;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(p,{person:e},e.slug)}))})]})},f=function(e,t){if(t)return e.find((function(e){return e.name===t}))},v=function(){var e=Object(b.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),r=Object(o.a)(a,2),x=r[0],O=r[1],u=Object(b.useState)(!1),p=Object(o.a)(u,2),v=p[0],g=p[1],N=!c.length&&!x&&!v,w=Object(b.useCallback)(Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,d();case 4:t=e.sent,c=t.map((function(e){var c=Object(j.a)({},e);return c.mother=f(t,e.motherName),c.father=f(t,e.fatherName),c})),n(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g(!0);case 12:return e.prev=12,O(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),[]);return Object(b.useEffect)((function(){w()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[x&&Object(l.jsx)(h,{}),!x&&!N&&Object(l.jsx)(m,{people:c}),v&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),N&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})},g=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},N=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},w=function(e){var t=e.to,c=e.text;return Object(l.jsx)(a.c,{className:function(e){var t=e.isActive;return O()("navbar-item",{"navbar-item has-background-grey-lighter":t})},to:t,children:c})},y=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(w,{to:"/",text:"Home"}),Object(l.jsx)(w,{to:"/people",text:"People"})]})})})},k=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(y,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/",element:Object(l.jsx)(g,{})}),Object(l.jsx)(r.b,{path:"home",element:Object(l.jsx)(r.a,{to:"/",replace:!0})}),Object(l.jsxs)(r.b,{path:"people",children:[Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(v,{})}),Object(l.jsx)(r.b,{path:":slug",element:Object(l.jsx)(v,{})})]}),Object(l.jsx)(r.b,{path:"*",element:Object(l.jsx)(N,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(k,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ec85b716.chunk.js.map
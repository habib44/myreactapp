(this["webpackJsonparjs-react-viewer-app"]=this["webpackJsonparjs-react-viewer-app"]||[]).push([[0],{126:function(e,t,r){"use strict";r.r(t);var n=r(3),c=r(1),i=r.n(c),s=r(35),o=r.n(s),a=(r(69),r(19),r(11)),j=r(15),l=r(10),p=r(4);var d=function(){return Object(n.jsx)("div",{id:"viewer-host",children:Object(n.jsx)(a.a,{report:{Uri:"report.rdlx-json"}})})};var h=function(){return Object(n.jsx)("div",{id:"viewer-host",children:Object(n.jsx)(a.a,{report:{Uri:"report2.rdlx-json"}})})};var b=function(){return Object(n.jsx)("div",{id:"viewer-host",children:Object(n.jsx)(a.a,{report:{Uri:"charginglistRpt1.rdlx-json"}})})};var u=function(){return Object(n.jsx)("div",{id:"viewer-host",children:Object(n.jsx)(a.a,{report:{Uri:"charginglistRpt2grpby.rdlx-json"}})})};var x=function(){return Object(n.jsx)("div",{id:"viewer-host",children:Object(n.jsx)(a.a,{report:{Uri:"charginglistRpt2grpbysingleentry.rdlx-json"}})})};var O=function(){return Object(n.jsx)("div",{id:"viewer-host",children:Object(n.jsx)(a.a,{report:{Uri:"charginglistRpt2grpbylocplanandamount.rdlx-json"}})})},m=r(18),R=r.n(m),g=r(48),f=r(37),v=r(36),y=r.n(v),N=r(44),w=r.n(N);function M(e){return U.apply(this,arguments)}function U(){return(U=Object(f.a)(R.a.mark((function e(t){var r,n,c,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Headers,n=new Request("https://epmcore.practiceehr.com/cptutilization"+t,{headers:r}),e.next=5,fetch(n);case 5:return c=e.sent,e.next=8,c.json();case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(R.a.mark((function e(){var t,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("CPTutilization.rdlx-json");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=Object(c.useState)(new Date),t=Object(g.a)(e,2),r=t[0],s=t[1],o=Object(c.useState)(new Date),j=Object(g.a)(o,2),l=j[0],p=j[1],d=i.a.useRef();function h(){return(h=Object(f.a)(R.a.mark((function e(){var t,n,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="?param="+y()(r).format("DD-MM-YYYY")+","+y()(l).format("DD-MM-YYYY"),e.next=3,M(t);case 3:return n=e.sent,e.next=6,F();case 6:(c=e.sent).DataSources[0].ConnectionProperties.ConnectString="jsondata="+JSON.stringify(n),d.current.Viewer.open(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsxs)("div",{id:"viewer-host",children:[Object(n.jsx)(w.a,{onChange:s,value:r,format:"dd-MM-yyyy"}),Object(n.jsx)(w.a,{onChange:p,value:l,format:"dd-MM-yyyy"}),Object(n.jsx)("button",{onClick:function(){return h.apply(this,arguments)},children:"Load  Report"}),Object(n.jsx)(a.a,{ref:d})]})};var C=function(){return j.Core.setLicenseKey("Sequel Tech,E175478515393748#B0fauZ5bRV7QDFmNoFmY4hERUFnVw2WMW5GMYR6cy3WYIZWU4lVQppXOrV4MUlHSNl5KydnZrNzSH94SYp4L0NlSE96NalzNtp7ZIBFdaJ6T6ZHeipVSpZnNw9UN6FWQmF4NFFEOIhEaaJlUr8WdEVmb9lzStxmcrBFbmFGStVHNBdWQ6l6RrZnN6d6N4YTaIxEVTdUQsJTaVtCciF6VwFHZZtUcpJUcjh4ZzRUZqlXTidnWqhkZ9dFN8UTVMRUem34M98GWwZ4ND5UNiR6YHFmYaVmYZF5ThJXdWVlRxUTQ6IUMPN5dJhTWplzTOlkTiojITJCLiEzN9IjQFZ4NiojIIJCLxUzNygTMwUjN0IicfJye#4Xfd5nIJZVQFJiOiMkIsIiMWByUKRncvBXZSVmdpR7YBJiOi8kI1tlOiQmcQJCLicjMyADMxACOxEDMxIDMyIiOiQncDJCLicTMyATMyAjMiojIwhXRiwiIoNWZUBCblVXclNlI0ISYONkIsUWdyRnOiwmdFJCLigDN7MTOzUTM5gzN4UzNxIiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnBTVJZkcu3ySlRTMjVVSMR6KExGM9R5N5hGOm9EU6FUSBFTZHFHWqlHaER6dEFERQhmQK3CePVHd426LGJVThhkeSZlRjl4MEJ6LSN4LBdzUj3mVzo6TNlFWl3kZ7hmTHJWWO5ZbuJ"),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsxs)("ul",{id:"sidemenu",className:"box_style",style:{height:"57px"},children:[Object(n.jsx)("li",{id:"Report1",children:Object(n.jsx)(l.b,{to:"/Report",className:"home_icon active",children:Object(n.jsx)("strong",{children:"Detailed Report"})})}),Object(n.jsx)("li",{id:"Report2",children:Object(n.jsx)(l.b,{to:"/Report2",className:"home_icon active",children:Object(n.jsx)("strong",{children:"Group Report Response from server"})})}),Object(n.jsx)("li",{id:"Report3",children:Object(n.jsx)(l.b,{to:"/Report3",className:"home_icon active",children:Object(n.jsx)("strong",{children:"Charging list"})})}),Object(n.jsx)("li",{id:"Report4",children:Object(n.jsx)(l.b,{to:"/Report4",className:"home_icon active",children:Object(n.jsx)("strong",{children:"Charging list group by Rpt"})})}),Object(n.jsx)("li",{id:"Report5",children:Object(n.jsx)(l.b,{to:"/Report5",className:"home_icon active",children:Object(n.jsx)("strong",{children:"Charging list group by loc Rpt (Single entry)"})})}),Object(n.jsx)("li",{id:"Report6",children:Object(n.jsx)(l.b,{to:"/Report6",className:"home_icon active",children:Object(n.jsx)("strong",{children:"Charging list group by loc,plan and plan amount Rpt"})})}),Object(n.jsx)("li",{id:"Report7",children:Object(n.jsx)(l.b,{to:"/Report7",className:"home_icon active",children:Object(n.jsx)("strong",{children:"CPT Utilization"})})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{path:"/Report",component:d}),Object(n.jsx)(p.a,{path:"/Report2",component:h}),Object(n.jsx)(p.a,{path:"/Report3",component:b}),Object(n.jsx)(p.a,{path:"/Report4",component:u}),Object(n.jsx)(p.a,{path:"/Report5",component:x}),Object(n.jsx)(p.a,{path:"/Report6",component:O}),Object(n.jsx)(p.a,{path:"/Report7",component:I})]})]})})},J=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,128)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),i(e),s(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),J()},19:function(e,t,r){},69:function(e,t,r){},77:function(e,t){}},[[126,1,2]]]);
//# sourceMappingURL=main.eebf04f0.chunk.js.map
(this["webpackJsonpperf-analytics-dashboard"]=this["webpackJsonpperf-analytics-dashboard"]||[]).push([[0],{255:function(e,t,n){e.exports={"base-layout":"styles_base-layout__1tdqy"}},279:function(e,t,n){e.exports={"title-widget":"styles_title-widget__iXp_I"}},296:function(e,t,n){},452:function(e,t,n){},453:function(e,t,n){},454:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(41),s=n.n(c),i=(n(296),n(56)),o=n.n(i),l=n(102),u=n(36),d=n(254),j=n.n(d).a.create({baseURL:"https://perfanalytics-api-ht.herokuapp.com",headers:{"Content-Type":"application/json"}});function b(e,t){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/api/metrics",{params:{start:t,end:n}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/api/metrics-by-url",{params:{start:t,end:n}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=n(8),m=Object(r.createContext)({});function O(e){var t=e.children,n=Object(r.useState)([]),a=Object(u.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)([]),d=Object(u.a)(i,2),j=d[0],f=d[1],x=Object(r.useState)([]),O=Object(u.a)(x,2),g=O[0],v=O[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,b();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=f,e.next=8,h();case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then()}),[]);var y={metrics:c,setMetrics:s,urlMetrics:j,setUrlMetrics:f,selectedUrls:g,setSelectedUrls:v};return Object(p.jsx)(m.Provider,{value:y,children:t})}var g=function(){return Object(r.useContext)(m)};var v=function(e){var t=e.children;return Object(p.jsx)(O,{children:t})},y=n(130),T=n(68),k=n(457),S=n(164),w=n.n(S),U=n(255),L=n.n(U),I=k.a.Footer,F=k.a.Content,C=w.a.bind(L.a);var R=function(e){var t=e.children;return Object(p.jsxs)(k.a,{className:C("base-layout"),children:[Object(p.jsx)(F,{children:Object(p.jsx)(y.a,{justify:"center",style:{paddingTop:25},children:Object(p.jsx)(T.a,{lg:{span:18},children:t})})}),Object(p.jsx)(I,{children:Object(p.jsxs)(y.a,{justify:"center",children:[Object(p.jsxs)("p",{children:["Made by"," ",Object(p.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/hasantezcan",children:["@hasantezcan"," "]})]}),Object(p.jsx)("p",{}),Object(p.jsxs)("p",{children:[", Source code"," ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/hasantezcan/PerfAnalytics-Dashboard",children:"in GitHub"})]})]})})]})},D=n(458),P=n(459),H=n(284),_=n(463),A=n(273),M=n(274),B=n(153),E=n(466),z=n(85),W=function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var r="#",a=0;a<3;a++){r+=("00"+(t>>8*a&255).toString(16)).substr(-2)}return r},N=n(38),K=n.n(N);var Y=function(e){var t=e.data,n=e.selectedUrls,r=e.title;return Object(p.jsx)(T.a,{xs:{span:24},md:{span:12},children:Object(p.jsx)(E.a,{title:r,children:n.length>0?Object(p.jsx)(D.a,{width:"100%",height:220,children:Object(p.jsxs)(P.a,{margin:{top:5,right:20,bottom:5,left:20},children:[null===t||void 0===t?void 0:t.filter((function(e){return n.includes(e.url)})).map((function(e){return Object(p.jsx)(H.a,{type:"monotone",stroke:W(e.url),dot:!1,dataKey:"value",name:e.url,data:e.data},e.url)})),Object(p.jsx)(_.a,{stroke:"#ccc",strokeDasharray:"3 3"}),Object(p.jsx)(A.a,{domain:["auto","auto"],dataKey:"time",name:"Time",type:"number",tickFormatter:function(e){return K()(e).format("HH:mm:ss")}}),Object(p.jsx)(M.a,{dataKey:"value",type:"number",tickFormatter:function(e){return"".concat(e," ms")}}),Object(p.jsx)(B.a,{labelFormatter:function(e){return K()(e).format("HH:mm")}})]})}):Object(p.jsx)(z.a,{})})})};var G=function(){var e=g(),t=e.urlMetrics,n=e.selectedUrls,r=function(e){return t.map((function(t){return{url:t.URL,data:t[e].map((function(e){return{value:e.value,time:new Date(e.time).getTime()}}))}}))};return Object(p.jsxs)(y.a,{gutter:[16,16],children:[Object(p.jsx)(Y,{data:r("TTFB"),title:"TTFB",selectedUrls:n}),Object(p.jsx)(Y,{data:r("FCP"),title:"FCP",selectedUrls:n}),Object(p.jsx)(Y,{data:r("DomLoad"),title:"DomLoad",selectedUrls:n}),Object(p.jsx)(Y,{data:r("WindowLoad"),title:"WindowLoad",selectedUrls:n})]})},X=n(467),J=n(468),V=n(209),q=n(464),Z=n(83),Q=X.a.Title;var $=function(e){var t=e.setTimeRange,n=Object(r.useState)(K()().format("YYYY-MM-DD")),a=Object(u.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(K()().subtract(30,"minutes").format("HH:mm:ss")),o=Object(u.a)(i,2),l=o[0],d=o[1],j=Object(r.useState)(K()().format("HH:mm:ss")),b=Object(u.a)(j,2),f=b[0],h=b[1];return Object(p.jsxs)(J.a,{children:[Object(p.jsx)(Q,{level:3,children:"Select Time Range"}),Object(p.jsx)(J.a.Item,{children:Object(p.jsx)(V.a,{onChange:function(e,t){return s(t)},defaultValue:K()()})}),Object(p.jsx)(J.a.Item,{children:Object(p.jsx)(q.a.RangePicker,{onChange:function(e,t){d(t[0]),h(t[1])},defaultValue:[K()().subtract(30,"minutes"),K()()]})}),Object(p.jsx)(J.a.Item,{children:Object(p.jsx)(Z.a,{type:"primary",onClick:function(){var e=K()("".concat(c," ").concat(l)).toISOString(),n=K()("".concat(c," ").concat(f)).toISOString();t(e,n)},children:"Get Metrics"})})]})},ee=n(149),te=n(76);function ne(e,t){return e.length>t?Object(p.jsxs)(te.a,{title:e,children:[e.substr(0,t),"..."]}):e}var re=X.a.Title,ae=ee.a.Group;var ce=function(e){var t=e.urls,n=e.onSelect,r=e.selectedUrls,a=t.map((function(e){return{label:ne(e,40),value:e}}));return Object(p.jsxs)(J.a,{children:[Object(p.jsx)(re,{level:3,children:"Select URL"}),t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(J.a.Item,{labelCol:{span:6,offset:6},children:Object(p.jsx)(ee.a,{indeterminate:r.length>0&&r.length!==t.length,onChange:function(e){n(e.target.checked?t:[])},checked:r.length>0,children:"Check all"})}),Object(p.jsx)(J.a.Item,{children:Object(p.jsx)(ae,{options:a,value:r,onChange:function(e){n(e)}})})]}):Object(p.jsx)(z.a,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:60},description:Object(p.jsx)("span",{children:"There is not metric found in this time range"}),children:Object(p.jsx)(Z.a,{href:"https://github.com/hasantezcan/PerfAnalytics-Dashboard#:~:text=You%20can%20create%20analytics%20metric%20data%20from%20those%20sites:",target:"_blank",rel:"noreferrer",type:"primary",children:"Create Now"})})]})};var se=function(){var e=g(),t=e.setUrlMetrics,n=e.setMetrics,a=e.urlMetrics,c=e.setSelectedUrls,s=e.selectedUrls,i=a.map((function(e){return e.URL})),u=function(){var e=Object(l.a)(o.a.mark((function e(r,a){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r,a);case 2:return c=e.sent,e.next=5,b(r,a);case 5:s=e.sent,t(c),n(s);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c(i)}),[a]),Object(p.jsx)(E.a,{children:Object(p.jsxs)(y.a,{gutter:16,children:[Object(p.jsx)(T.a,{md:12,children:Object(p.jsx)($,{setTimeRange:u})}),Object(p.jsx)(T.a,{md:12,children:Object(p.jsx)(ce,{urls:i,onSelect:c,selectedUrls:s})})]})})},ie=n(465),oe=(n(452),X.a.Title);var le=function(e){var t=e.metrics,n=e.selectedUrls,a=Object(r.useState)([]),c=Object(u.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)([]),l=Object(u.a)(o,2),d=l[0],j=l[1],b=[{title:"Url",dataIndex:"URL",key:"URL",ellipsis:{showTitle:!1},render:function(e){return Object(p.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:ne(e,65)})},sorter:function(e,t){return e.URL.length-t.URL.length}},{title:"UserAgent",dataIndex:"UserAgent",key:"UserAgent",ellipsis:{showTitle:!1},render:function(e){return ne(e,20)}},{title:"FCP",dataIndex:"FCP",key:"FCP",ellipsis:!0,render:function(e){return ne(e.toString(),9)},sorter:function(e,t){return e.FCP-t.FCP}},{title:"TTFB",dataIndex:"TTFB",key:"TTFB",ellipsis:!0,render:function(e){return ne(e.toString(),9)},sorter:function(e,t){return e.TTFB-t.TTFB}},{title:"DomLoad",dataIndex:"DomLoad",key:"DomLoad",ellipsis:!0,render:function(e){return ne(e.toString(),9)},sorter:function(e,t){return e.DomLoad-t.DomLoad}},{title:"WindowLoad",dataIndex:"WindowLoad",key:"WindowLoad",ellipsis:!0,render:function(e){return ne(e.toString(),9)},sorter:function(e,t){return e.WindowLoad-t.WindowLoad}},{title:"Time",dataIndex:"createdAt",key:"createdAt",render:function(e){return K()(e).format("HH:mm:ss")},sorter:function(e,t){var n=K()(e.createdAt).format("X"),r=K()(t.createdAt).format("X");return parseInt(n)-parseInt(r)}}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(oe,{level:2,children:"Metrics and Entries"}),Object(p.jsx)(ie.a,{rowKey:"_id",className:"table-striped-rows",columns:b,expandable:{expandedRowRender:function(){var e=[{title:"Name",dataIndex:"name",key:"name",ellipsis:{showTitle:!1},render:function(e){return Object(p.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:ne(e,50)})}},{title:"Initiator Type",dataIndex:"initiatorType",key:"initiatorType"},{title:"Response End",dataIndex:"responseEnd",key:"responseEnd",ellipsis:!0},{title:"Transfer Size",dataIndex:"transferSize",key:"transferSize",render:function(e){return"".concat(e," B")}},{title:"Time",dataIndex:"createdAt",key:"createdAt",render:function(e){return K()(e).format("HH:mm:ss")}}];return Object(p.jsx)(ie.a,{columns:e,dataSource:d,pagination:!1,tableLayout:"auto"})}},dataSource:null===t||void 0===t?void 0:t.filter((function(e){return n.includes(e.URL)})),expandedRowKeys:s,onExpand:function(e,t){var n=[];e&&n.push(t._id),j(t.Entries),i(n)},scroll:{y:400,x:1024},tableLayout:"auto"})]})};var ue=function(){var e=g(),t=e.metrics,n=e.selectedUrls;return Object(p.jsx)(le,{metrics:t,selectedUrls:n})},de=n(279),je=n.n(de),be=X.a.Title,fe=w.a.bind(je.a);var he=function(){return Object(p.jsx)(be,{className:fe("title-widget"),children:"PerfAnalytics Dashboard"})};var xe=function(){return Object(p.jsx)(R,{children:Object(p.jsxs)(y.a,{gutter:[16,16],children:[Object(p.jsx)(T.a,{span:24,children:Object(p.jsx)(he,{})}),Object(p.jsx)(T.a,{span:24,children:Object(p.jsx)(se,{})}),Object(p.jsx)(T.a,{span:24,children:Object(p.jsx)(G,{})}),Object(p.jsx)(T.a,{span:24,children:Object(p.jsx)(ue,{})})]})})};n(453);var pe=function(){return Object(p.jsx)(v,{children:Object(p.jsx)(xe,{})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,470)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(pe,{})}),document.getElementById("root")),me()}},[[454,1,2]]]);
//# sourceMappingURL=main.8fb754c1.chunk.js.map
"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[80356],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(45072),a=n(95656),o=(n(11504),n(95788)),i=["components"],s={id:"integration-tests"},l="Integration Tests",u={unversionedId:"development/integration-tests",id:"version-v11.1.0/development/integration-tests",title:"Integration Tests",description:"Cumulus has a comprehensive set of integration tests that tests the framework on",source:"@site/versioned_docs/version-v11.1.0/development/integration-tests.md",sourceDirName:"development",slug:"/development/integration-tests",permalink:"/cumulus/docs/v11.1.0/development/integration-tests",draft:!1,tags:[],version:"v11.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"integration-tests"}},c={},p=[{value:"Running integration tests on AWS",id:"running-integration-tests-on-aws",level:2},{value:"Running integration tests on Bamboo",id:"running-integration-tests-on-bamboo",level:2}],g={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,a.c)(e,i);return(0,o.yg)(m,(0,r.c)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"integration-tests"},"Integration Tests"),(0,o.yg)("p",null,"Cumulus has a comprehensive set of integration tests that tests the framework on\nan active AWS account. As long as you have an AWS account with valid credentials\nyou can run the tests as described below:"),(0,o.yg)("h2",{id:"running-integration-tests-on-aws"},"Running integration tests on AWS"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run bootstrap\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Deploy your instance integrations on AWS and run tests by following the steps\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/example/README.md"},"here")))),(0,o.yg)("h2",{id:"running-integration-tests-on-bamboo"},"Running integration tests on Bamboo"),(0,o.yg)("p",null,"Integration tests are run by default on Bamboo builds for the master branch,\na tagged release, and branches with an open PR. If you want to skip the\nintegration tests for a given commit for a PR branch, include ",(0,o.yg)("inlineCode",{parentName:"p"},"[skip-integration-tests]"),"\nin the commit message."),(0,o.yg)("p",null,"If you create a new stack and want to be able to run integration tests against\nit in CI, you will need to add it to\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/bamboo/select-stack.js"},"bamboo/select-stack.js"),"."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[2366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"integration-tests"},l="Integration Tests",u={unversionedId:"development/integration-tests",id:"version-v16.1.1/development/integration-tests",title:"Integration Tests",description:"Cumulus has a comprehensive set of integration tests that tests the framework on",source:"@site/versioned_docs/version-v16.1.1/development/integration-tests.md",sourceDirName:"development",slug:"/development/integration-tests",permalink:"/cumulus/docs/v16.1.1/development/integration-tests",draft:!1,tags:[],version:"v16.1.1",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1691427107,formattedLastUpdatedAt:"Aug 7, 2023",frontMatter:{id:"integration-tests"}},c={},p=[{value:"Running integration tests on AWS",id:"running-integration-tests-on-aws",level:2},{value:"Running integration tests on Bamboo",id:"running-integration-tests-on-bamboo",level:2}],m={toc:p},g="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,o.kt)("p",null,"Cumulus has a comprehensive set of integration tests that tests the framework on\nan active AWS account. As long as you have an AWS account with valid credentials\nyou can run the tests as described below:"),(0,o.kt)("h2",{id:"running-integration-tests-on-aws"},"Running integration tests on AWS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run bootstrap\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy your instance integrations on AWS and run tests by following the steps\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/example/README.md"},"here")))),(0,o.kt)("h2",{id:"running-integration-tests-on-bamboo"},"Running integration tests on Bamboo"),(0,o.kt)("p",null,"Integration tests are run by default on Bamboo builds for the master branch,\na tagged release, and branches with an open PR. If you want to skip the\nintegration tests for a given commit for a PR branch, include ",(0,o.kt)("inlineCode",{parentName:"p"},"[skip-integration-tests]"),"\nin the commit message."),(0,o.kt)("p",null,"If you create a new stack and want to be able to run integration tests against\nit in CI, you will need to add it to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/bamboo/select-stack.js"},"bamboo/select-stack.js"),"."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[97334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"quality-and-coverage"},u="Code Coverage and Quality",c={unversionedId:"development/quality-and-coverage",id:"version-v9.0.0/development/quality-and-coverage",title:"Code Coverage and Quality",description:"Code Coverage",source:"@site/versioned_docs/version-v9.0.0/development/quality-and-coverage.md",sourceDirName:"development",slug:"/development/quality-and-coverage",permalink:"/cumulus/docs/v9.0.0/development/quality-and-coverage",draft:!1,tags:[],version:"v9.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"quality-and-coverage"}},p={},d=[{value:"Code Coverage",id:"code-coverage",level:2},{value:"Code quality checking",id:"code-quality-checking",level:2},{value:"Documentation quality checking",id:"documentation-quality-checking",level:2},{value:"Audit",id:"audit",level:2}],s={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-coverage-and-quality"},"Code Coverage and Quality"),(0,o.kt)("h2",{id:"code-coverage"},"Code Coverage"),(0,o.kt)("p",null,"Code coverage is checked using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/istanbuljs/nyc"},"nyc"),". The\nBamboo build tests coverage. A summary can be viewed in the unit test build's output."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm test")," command will output code coverage data for the entire Cumulus\nrepository. To create an html report, run ",(0,o.kt)("inlineCode",{parentName:"p"},"nyc report --reporter html")," and open\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file in the coverage folder."),(0,o.kt)("p",null,"To run code coverage on an individual package during development, run\n",(0,o.kt)("inlineCode",{parentName:"p"},"npm run test"),". This will output the coverage in the terminal."),(0,o.kt)("h2",{id:"code-quality-checking"},"Code quality checking"),(0,o.kt)("p",null,"This project uses ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"eslint")," to check code style and quality.\nThe configured eslint rules can be found in the project's\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/.eslintrc.json"},".eslintrc.json"),"\nfile."),(0,o.kt)("p",null,"To check the configured linting, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run lint"),"."),(0,o.kt)("h2",{id:"documentation-quality-checking"},"Documentation quality checking"),(0,o.kt)("p",null,"This project uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdownlint-cli"},"markdownlint-cli"),"\nas a frontend to ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdownlint"},"markdownlint")," to check\nall of our markdown for style and formatting.   The configured rules can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/.markdownlint.json"},"here"),"."),(0,o.kt)("p",null,"To run linting on the markdown files, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run lint-md"),"."),(0,o.kt)("h2",{id:"audit"},"Audit"),(0,o.kt)("p",null,"This project uses ",(0,o.kt)("inlineCode",{parentName:"p"},"audit-ci")," to run a security audit on the package dependency\ntree.   This must pass prior to merge.   The configured rules for ",(0,o.kt)("inlineCode",{parentName:"p"},"audit-ci")," can be\nfound ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/audit-ci.json"},"here"),"."),(0,o.kt)("p",null,"To execute an audit, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run audit"),"."))}h.isMDXComponent=!0}}]);
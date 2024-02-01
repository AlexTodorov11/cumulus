"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[78688],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14152:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(45072),a=t(95656),o=(t(11504),t(95788)),i=["components"],l={id:"quality-and-coverage"},c="Code Coverage and Quality",u={unversionedId:"development/quality-and-coverage",id:"version-v16.1.3/development/quality-and-coverage",title:"Code Coverage and Quality",description:"Code Coverage",source:"@site/versioned_docs/version-v16.1.3/development/quality-and-coverage.md",sourceDirName:"development",slug:"/development/quality-and-coverage",permalink:"/cumulus/docs/v16.1.3/development/quality-and-coverage",draft:!1,tags:[],version:"v16.1.3",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1706031284,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"quality-and-coverage"}},p={},d=[{value:"Code Coverage",id:"code-coverage",level:2},{value:"Code quality checking",id:"code-quality-checking",level:2},{value:"Documentation quality checking",id:"documentation-quality-checking",level:2},{value:"Audit",id:"audit",level:2}],s={toc:d},m="wrapper";function g(e){var n=e.components,t=(0,a.c)(e,i);return(0,o.yg)(m,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"code-coverage-and-quality"},"Code Coverage and Quality"),(0,o.yg)("h2",{id:"code-coverage"},"Code Coverage"),(0,o.yg)("p",null,"Code coverage is checked using ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/istanbuljs/nyc"},"nyc"),". The\nBamboo build tests coverage. A summary can be viewed in the unit test build's output."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"npm test")," command will output code coverage data for the entire Cumulus\nrepository. To create an html report, run ",(0,o.yg)("inlineCode",{parentName:"p"},"nyc report --reporter html")," and open\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"index.html")," file in the coverage folder."),(0,o.yg)("p",null,"To run code coverage on an individual package during development, run\n",(0,o.yg)("inlineCode",{parentName:"p"},"npm run test"),". This will output the coverage in the terminal."),(0,o.yg)("h2",{id:"code-quality-checking"},"Code quality checking"),(0,o.yg)("p",null,"This project uses ",(0,o.yg)("a",{parentName:"p",href:"https://eslint.org/"},"eslint")," to check code style and quality.\nThe configured eslint rules can be found in the project's\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/.eslintrc.js"},".eslintrc.js"),"\nfile."),(0,o.yg)("p",null,"To check the configured linting, run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run lint"),"."),(0,o.yg)("h2",{id:"documentation-quality-checking"},"Documentation quality checking"),(0,o.yg)("p",null,"This project uses ",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdownlint-cli"},"markdownlint-cli"),"\nas a frontend to ",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdownlint"},"markdownlint")," to check\nall of our markdown for style and formatting. The configured rules can be found\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/.markdownlint.json"},"here"),"."),(0,o.yg)("p",null,"To run linting on the markdown files, run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run lint-md"),"."),(0,o.yg)("h2",{id:"audit"},"Audit"),(0,o.yg)("p",null,"This project uses ",(0,o.yg)("inlineCode",{parentName:"p"},"audit-ci")," to run a security audit on the package dependency\ntree. This must pass prior to merge. The configured rules for ",(0,o.yg)("inlineCode",{parentName:"p"},"audit-ci")," can be\nfound ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/audit-ci.json"},"here"),"."),(0,o.yg)("p",null,"To execute an audit, run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run audit"),"."))}g.isMDXComponent=!0}}]);
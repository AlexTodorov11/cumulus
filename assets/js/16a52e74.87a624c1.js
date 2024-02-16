"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[35430],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(58168),i=n(98587),o=(n(96540),n(15680)),r=["components"],s={id:"docs-how-to",title:"Cumulus Documentation: How To's",hide_title:!1},d=void 0,l={unversionedId:"docs-how-to",id:"version-v11.1.0/docs-how-to",title:"Cumulus Documentation: How To's",description:"Cumulus Docs Installation",source:"@site/versioned_docs/version-v11.1.0/docs-how-to.md",sourceDirName:".",slug:"/docs-how-to",permalink:"/cumulus/docs/v11.1.0/docs-how-to",draft:!1,tags:[],version:"v11.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"docs-how-to",title:"Cumulus Documentation: How To's",hide_title:!1},sidebar:"docs",previous:{title:"Contributing a Task",permalink:"/cumulus/docs/v11.1.0/adding-a-task"},next:{title:"About Integrator Guide",permalink:"/cumulus/docs/v11.1.0/integrator-guide/about-int-guide"}},u={},c=[{value:"Cumulus Docs Installation",id:"cumulus-docs-installation",level:2},{value:"Run a Local Server",id:"run-a-local-server",level:3},{value:"Cumulus Documentation",id:"cumulus-documentation",level:3},{value:"Add a New Page and Sidebars",id:"add-a-new-page-and-sidebars",level:4},{value:"Versioning Docs",id:"versioning-docs",level:4},{value:"Search",id:"search",level:4},{value:"Add a new task",id:"add-a-new-task",level:4},{value:"Editing the tasks.md header or template",id:"editing-the-tasksmd-header-or-template",level:4},{value:"Editing diagrams",id:"editing-diagrams",level:4},{value:"Deployment",id:"deployment",level:3}],p={toc:c},m="wrapper";function g(e){var t=e.components,n=(0,i.A)(e,r);return(0,o.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"cumulus-docs-installation"},"Cumulus Docs Installation"),(0,o.yg)("h3",{id:"run-a-local-server"},"Run a Local Server"),(0,o.yg)("p",null,"Environment variables ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_API_KEY")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_INDEX_NAME")," must be set for search to work. At the moment, search is only truly functional on prod because that is the only website we have registered to be indexed with DocSearch (see below on search)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:nasa/cumulus\ncd cumulus\nnpm run docs-install\nnpm run docs-serve\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"docs-build")," will build the documents into ",(0,o.yg)("inlineCode",{parentName:"p"},"website/build"),"."),(0,o.yg)("h3",{id:"cumulus-documentation"},"Cumulus Documentation"),(0,o.yg)("p",null,"Our project documentation is hosted on ",(0,o.yg)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages"),". The resources published to this website are housed in ",(0,o.yg)("inlineCode",{parentName:"p"},"docs/")," directory at the top of the Cumulus repository. Those resources primarily consist of markdown files and images."),(0,o.yg)("p",null,"We use the open-source static website generator ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," to build html files from our markdown documentation, add some organization and navigation, and provide some other niceties in the final website (search, easy templating, etc.)."),(0,o.yg)("h4",{id:"add-a-new-page-and-sidebars"},"Add a New Page and Sidebars"),(0,o.yg)("p",null,"Adding a new page should be as simple as writing some documentation in markdown, placing it under the correct directory in the ",(0,o.yg)("inlineCode",{parentName:"p"},"docs/")," folder and adding some configuration values wrapped by ",(0,o.yg)("inlineCode",{parentName:"p"},"---")," at the top of the file. There are many files that already have this header which can be used as reference."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-markdown"},"---\nid: doc-unique-id    # unique id for this document. This must be unique across ALL documentation under docs/\ntitle: Title Of Doc  # Whatever title you feel like adding. This will show up as the index to this page on the sidebar.\nhide_title: false\n---\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," To have the new page show up in a sidebar the designated ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," must be added to a sidebar in the ",(0,o.yg)("inlineCode",{parentName:"p"},"website/sidebars.js")," file. Docusaurus has an in depth explanation of sidebars ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/en/navigation"},"here"),"."),(0,o.yg)("h4",{id:"versioning-docs"},"Versioning Docs"),(0,o.yg)("p",null,"We lean heavily on Docusaurus for versioning. Their suggestions and walk-through can be found ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/en/versioning"},"here"),". It is worth noting that we would like the Documentation versions to match up directly with release versions. Cumulus versioning is explained in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/docs/development/release.md"},"Versioning Docs"),"."),(0,o.yg)("h4",{id:"search"},"Search"),(0,o.yg)("p",null,"Search on our documentation site is taken care of by ",(0,o.yg)("a",{parentName:"p",href:"https://community.algolia.com/docsearch/"},"DocSearch"),". We have been provided with an ",(0,o.yg)("inlineCode",{parentName:"p"},"apiKey")," and an ",(0,o.yg)("inlineCode",{parentName:"p"},"indexName")," by DocSearch that we include in our ",(0,o.yg)("inlineCode",{parentName:"p"},"website/siteConfig.js")," file. The rest, indexing and actual searching, we leave to DocSearch. Our builds expect environment variables for both these values to exist - ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_API_KEY")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_NAME_INDEX"),"."),(0,o.yg)("h4",{id:"add-a-new-task"},"Add a new task"),(0,o.yg)("p",null,"The tasks list in docs/tasks.md is generated from the list of task package in the task folder. Do not edit the docs/tasks.md file directly."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v11.1.0/adding-a-task"},"Read more about adding a new task.")),(0,o.yg)("h4",{id:"editing-the-tasksmd-header-or-template"},"Editing the tasks.md header or template"),(0,o.yg)("p",null,"Look at the ",(0,o.yg)("inlineCode",{parentName:"p"},"bin/build-tasks-doc.js")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"bin/tasks-header.md")," files to edit the output of the tasks build script."),(0,o.yg)("h4",{id:"editing-diagrams"},"Editing diagrams"),(0,o.yg)("p",null,"For some diagrams included in the documentation, the raw source is included in the ",(0,o.yg)("inlineCode",{parentName:"p"},"docs/assets/raw")," directory to allow for easy updating in the future:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"assets/interfaces.svg")," -> ",(0,o.yg)("inlineCode",{parentName:"li"},"assets/raw/interfaces.drawio")," (generated using ",(0,o.yg)("a",{parentName:"li",href:"https://www.draw.io/"},"draw.io"),")")),(0,o.yg)("h3",{id:"deployment"},"Deployment"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"master")," branch is automatically built and deployed to ",(0,o.yg)("inlineCode",{parentName:"p"},"gh-pages")," branch. The ",(0,o.yg)("inlineCode",{parentName:"p"},"gh-pages")," branch is served by Github Pages. Do not make edits to the ",(0,o.yg)("inlineCode",{parentName:"p"},"gh-pages")," branch."))}g.isMDXComponent=!0}}]);
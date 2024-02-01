"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[52544],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var a=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=i,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(45072),i=t(95656),o=(t(11504),t(95788)),r=["components"],s={id:"docs-how-to",title:"Cumulus Documentation: How To's",hide_title:!1},d=void 0,l={unversionedId:"docs-how-to",id:"version-v17.0.0/docs-how-to",title:"Cumulus Documentation: How To's",description:"Cumulus Docs Installation",source:"@site/versioned_docs/version-v17.0.0/docs-how-to.md",sourceDirName:".",slug:"/docs-how-to",permalink:"/cumulus/docs/v17.0.0/docs-how-to",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1692022753,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"docs-how-to",title:"Cumulus Documentation: How To's",hide_title:!1},sidebar:"docs",previous:{title:"Contributing a Task",permalink:"/cumulus/docs/v17.0.0/adding-a-task"},next:{title:"Integrator Guide",permalink:"/cumulus/docs/v17.0.0/category/integrator-guide"}},u={},c=[{value:"Cumulus Docs Installation",id:"cumulus-docs-installation",level:2},{value:"Run a Local Server",id:"run-a-local-server",level:3},{value:"Cumulus Documentation",id:"cumulus-documentation",level:3},{value:"Add a New Page and Sidebars",id:"add-a-new-page-and-sidebars",level:4},{value:"Versioning Docs",id:"versioning-docs",level:4},{value:"Search",id:"search",level:4},{value:"Add a new task",id:"add-a-new-task",level:4},{value:"Editing the tasks.md header or template",id:"editing-the-tasksmd-header-or-template",level:4},{value:"Editing diagrams",id:"editing-diagrams",level:4},{value:"Deployment",id:"deployment",level:3}],p={toc:c},m="wrapper";function g(e){var n=e.components,t=(0,i.c)(e,r);return(0,o.yg)(m,(0,a.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"cumulus-docs-installation"},"Cumulus Docs Installation"),(0,o.yg)("h3",{id:"run-a-local-server"},"Run a Local Server"),(0,o.yg)("p",null,"Environment variables ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_APP_ID"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_API_KEY")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_INDEX_NAME")," must be set for search to work. At the moment, search is only truly functional on prod because that is the only website we have registered to be indexed with DocSearch (see below on search)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:nasa/cumulus\ncd cumulus\nnpm run docs-install\nnpm run docs-serve\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"docs-build")," will build the documents into ",(0,o.yg)("inlineCode",{parentName:"p"},"website/build"),".\n",(0,o.yg)("inlineCode",{parentName:"p"},"docs-clear")," will clear the documents.")),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Fix any broken links reported by Docusaurus if you see the following messages during build."),(0,o.yg)("p",{parentName:"admonition"},"[INFO]"," Docusaurus found broken links!"),(0,o.yg)("p",{parentName:"admonition"},"Exhaustive list of all broken links found:")),(0,o.yg)("h3",{id:"cumulus-documentation"},"Cumulus Documentation"),(0,o.yg)("p",null,"Our project documentation is hosted on ",(0,o.yg)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages"),". The resources published to this website are housed in ",(0,o.yg)("inlineCode",{parentName:"p"},"docs/")," directory at the top of the Cumulus repository. Those resources primarily consist of markdown files and images."),(0,o.yg)("p",null,"We use the open-source static website generator ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Docusaurus")," to build html files from our markdown documentation, add some organization and navigation, and provide some other niceties in the final website (search, easy templating, etc.)."),(0,o.yg)("h4",{id:"add-a-new-page-and-sidebars"},"Add a New Page and Sidebars"),(0,o.yg)("p",null,"Adding a new page should be as simple as writing some documentation in markdown, placing it under the correct directory in the ",(0,o.yg)("inlineCode",{parentName:"p"},"docs/")," folder and adding some configuration values wrapped by ",(0,o.yg)("inlineCode",{parentName:"p"},"---")," at the top of the file. There are many files that already have this header which can be used as reference."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-markdown"},"---\nid: doc-unique-id    # unique id for this document. This must be unique across ALL documentation under docs/\ntitle: Title Of Doc  # Whatever title you feel like adding. This will show up as the index to this page on the sidebar.\nhide_title: false\n---\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"To have the new page show up in a sidebar the designated ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," must be added to a sidebar in the ",(0,o.yg)("inlineCode",{parentName:"p"},"website/sidebars.js")," file. Docusaurus has an in depth explanation of sidebars ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/en/navigation"},"here"),".")),(0,o.yg)("h4",{id:"versioning-docs"},"Versioning Docs"),(0,o.yg)("p",null,"We lean heavily on Docusaurus for versioning. Their suggestions and walk-through can be found ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/versioning"},"here"),". Docusaurus v2 uses snapshot approach for documentation versioning. Every versioned docs does not depends on other version.\nIt is worth noting that we would like the Documentation versions to match up directly with release versions. However, a new versioned docs can take up a lot of repo space and require maintenance, we suggest to update existing versioned docs for minor releases when there are no significant functionality changes.  Cumulus versioning is explained in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/docs/development/release.md"},"Versioning Docs"),"."),(0,o.yg)("h4",{id:"search"},"Search"),(0,o.yg)("p",null,"Search on our documentation site is taken care of by ",(0,o.yg)("a",{parentName:"p",href:"https://docsearch.algolia.com/"},"DocSearch"),". We have been provided with an ",(0,o.yg)("inlineCode",{parentName:"p"},"apiId"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"apiKey")," and an ",(0,o.yg)("inlineCode",{parentName:"p"},"indexName")," by DocSearch that we include in our ",(0,o.yg)("inlineCode",{parentName:"p"},"website/docusaurus.config.js")," file. The rest, indexing and actual searching, we leave to DocSearch. Our builds expect environment variables for these values to exist - ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_APP_ID"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_API_KEY")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"DOCSEARCH_NAME_INDEX"),"."),(0,o.yg)("h4",{id:"add-a-new-task"},"Add a new task"),(0,o.yg)("p",null,"The tasks list in docs/tasks.md is generated from the list of task package in the task folder. Do not edit the docs/tasks.md file directly."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v17.0.0/adding-a-task"},"Read more about adding a new task.")),(0,o.yg)("h4",{id:"editing-the-tasksmd-header-or-template"},"Editing the tasks.md header or template"),(0,o.yg)("p",null,"Look at the ",(0,o.yg)("inlineCode",{parentName:"p"},"bin/build-tasks-doc.js")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"bin/tasks-header.md")," files to edit the output of the tasks build script."),(0,o.yg)("h4",{id:"editing-diagrams"},"Editing diagrams"),(0,o.yg)("p",null,"For some diagrams included in the documentation, the raw source is included in the ",(0,o.yg)("inlineCode",{parentName:"p"},"docs/assets/raw")," directory to allow for easy updating in the future:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"assets/interfaces.svg")," -> ",(0,o.yg)("inlineCode",{parentName:"li"},"assets/raw/interfaces.drawio")," (generated using ",(0,o.yg)("a",{parentName:"li",href:"https://www.draw.io/"},"draw.io"),")")),(0,o.yg)("h3",{id:"deployment"},"Deployment"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"master")," branch is automatically built and deployed to ",(0,o.yg)("inlineCode",{parentName:"p"},"gh-pages")," branch. The ",(0,o.yg)("inlineCode",{parentName:"p"},"gh-pages")," branch is served by Github Pages. Do not make edits to the ",(0,o.yg)("inlineCode",{parentName:"p"},"gh-pages")," branch."))}g.isMDXComponent=!0}}]);
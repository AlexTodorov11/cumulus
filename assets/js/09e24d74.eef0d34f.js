"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[35577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"forked-pr"},s="Issuing PR From Forked Repos",p={unversionedId:"development/forked-pr",id:"version-v9.9.0/development/forked-pr",title:"Issuing PR From Forked Repos",description:"Fork the Repo",source:"@site/versioned_docs/version-v9.9.0/development/forked-pr.md",sourceDirName:"development",slug:"/development/forked-pr",permalink:"/cumulus/docs/v9.9.0/development/forked-pr",draft:!1,tags:[],version:"v9.9.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"forked-pr"}},u={},c=[{value:"Fork the Repo",id:"fork-the-repo",level:2},{value:"Create a Pull Request",id:"create-a-pull-request",level:2},{value:"Reviewing PRs from Forked Repos",id:"reviewing-prs-from-forked-repos",level:2}],m={toc:c},d="wrapper";function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"issuing-pr-from-forked-repos"},"Issuing PR From Forked Repos"),(0,a.kt)("h2",{id:"fork-the-repo"},"Fork the Repo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fork the Cumulus repo"),(0,a.kt)("li",{parentName:"ul"},"Create a new branch from the branch you'd like to contribute to"),(0,a.kt)("li",{parentName:"ul"},"If an issue does't already exist, submit one (see above)")),(0,a.kt)("h2",{id:"create-a-pull-request"},"Create a Pull Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://help.github.com/articles/creating-a-pull-request/"},"Create a pull request")," from your fork into the target branch of the nasa/cumulus repo"),(0,a.kt)("li",{parentName:"ul"},"Also read Github's documentation on how to work with forks ",(0,a.kt)("a",{parentName:"li",href:"https://help.github.com/articles/working-with-forks/"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"Be sure to ",(0,a.kt)("a",{parentName:"li",href:"https://help.github.com/articles/closing-issues-using-keywords/"},"mention the corresponding issue number"),' in the PR description, i.e. "Fixes Issue #10"')),(0,a.kt)("h2",{id:"reviewing-prs-from-forked-repos"},"Reviewing PRs from Forked Repos"),(0,a.kt)("p",null,"Upon submission of a pull request, the Cumulus development team will review the code."),(0,a.kt)("p",null,"Once the code passes an initial review, the team will run the CI tests against the proposed update."),(0,a.kt)("p",null,"The request will then either be merged, declined, or an adjustment to the code will be requested via the issue opened with the original PR request."),(0,a.kt)("p",null,"PRs from forked repos cannot directly merged to master. Cumulus reviews must follow the following steps before completing the review process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new branch:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  git checkout -b from-<name-of-the-branch> master\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Push the new branch to GitHub")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the destination of the forked PR to the new branch that was just pushed"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1933118/46869547-80d31480-ce2c-11e8-9d2f-b8e1ea01fdb6.png",alt:"Screenshot of Github interface showing how to change the base branch of a pull request"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After code review and approval, merge the forked PR to the new branch.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a PR for the new branch to master.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the CI tests pass, merge the new branch to master and close the issue.   If the CI tests do not pass, request an amended PR from the original author/ or resolve failures as appropriate."))))}h.isMDXComponent=!0}}]);
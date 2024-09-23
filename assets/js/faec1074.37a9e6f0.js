"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[79170],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(58168),o=n(98587),r=(n(96540),n(15680)),i=["components"],s={id:"choice-states",title:"Choice States",hide_title:!1},l=void 0,p={unversionedId:"data-cookbooks/choice-states",id:"version-v19.0.0/data-cookbooks/choice-states",title:"Choice States",description:"Cumulus supports AWS Step Function Choice states. A Choice state enables branching logic in Cumulus workflows.",source:"@site/versioned_docs/version-v19.0.0/data-cookbooks/choice-states.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/choice-states",permalink:"/cumulus/docs/data-cookbooks/choice-states",draft:!1,tags:[],version:"v19.0.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724951961,formattedLastUpdatedAt:"Aug 29, 2024",frontMatter:{id:"choice-states",title:"Choice States",hide_title:!1},sidebar:"docs",previous:{title:"Error Handling in Workflows",permalink:"/cumulus/docs/data-cookbooks/error-handling"},next:{title:"Ingest Browse Generation",permalink:"/cumulus/docs/data-cookbooks/browse-generation"}},c={},u=[{value:"Example",id:"example",level:2},{value:"Advanced: Loops in Cumulus Workflows",id:"advanced-loops-in-cumulus-workflows",level:2},{value:"Further documentation",id:"further-documentation",level:2}],d={toc:u},m="wrapper";function g(e){var t=e.components,s=(0,o.A)(e,i);return(0,r.yg)(m,(0,a.A)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Cumulus supports AWS Step Function ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html"},(0,r.yg)("inlineCode",{parentName:"a"},"Choice"))," states. A ",(0,r.yg)("inlineCode",{parentName:"p"},"Choice")," state enables branching logic in Cumulus workflows."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Choice")," state definitions include a list of ",(0,r.yg)("inlineCode",{parentName:"p"},"Choice Rule"),"s. Each ",(0,r.yg)("inlineCode",{parentName:"p"},"Choice Rule")," defines a logical operation which compares an input value against a value using a comparison operator. For available comparison operators, review ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html"},"the AWS docs"),"."),(0,r.yg)("p",null,"If the comparison evaluates to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"Next")," state is followed."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"In ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/parse_pdr_workflow.tf"},"examples/cumulus-tf/parse_pdr_workflow.tf")," the ",(0,r.yg)("inlineCode",{parentName:"p"},"ParsePdr")," workflow uses a ",(0,r.yg)("inlineCode",{parentName:"p"},"Choice")," state, ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckAgainChoice"),", to terminate the workflow once ",(0,r.yg)("inlineCode",{parentName:"p"},"meta.isPdrFinished: true")," is returned by the ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckStatus")," state."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckAgainChoice")," state definition requires an input object of the following structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "meta": {\n    "isPdrFinished": false\n  }\n}\n')),(0,r.yg)("p",null,"Given the above input to the ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckAgainChoice")," state, the workflow would transition to the ",(0,r.yg)("inlineCode",{parentName:"p"},"PdrStatusReport")," state."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"CheckAgainChoice": {\n  "Type": "Choice",\n  "Choices": [\n    {\n      "Variable": "$.meta.isPdrFinished",\n      "BooleanEquals": false,\n      "Next": "PdrStatusReport"\n    },\n    {\n      "Variable": "$.meta.isPdrFinished",\n      "BooleanEquals": true,\n      "Next": "WorkflowSucceeded"\n    }\n  ],\n  "Default": "WorkflowSucceeded"\n}\n')),(0,r.yg)("h2",{id:"advanced-loops-in-cumulus-workflows"},"Advanced: Loops in Cumulus Workflows"),(0,r.yg)("p",null,"Understanding the complete ",(0,r.yg)("inlineCode",{parentName:"p"},"ParsePdr")," workflow is not necessary to understanding how ",(0,r.yg)("inlineCode",{parentName:"p"},"Choice")," states work, but ",(0,r.yg)("inlineCode",{parentName:"p"},"ParsePdr")," provides an example of how ",(0,r.yg)("inlineCode",{parentName:"p"},"Choice")," states can be used to create a loop in a Cumulus workflow."),(0,r.yg)("p",null,"In the complete ",(0,r.yg)("inlineCode",{parentName:"p"},"ParsePdr")," workflow definition, the state ",(0,r.yg)("inlineCode",{parentName:"p"},"QueueGranules")," is followed by ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckStatus"),". From ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckStatus")," a loop starts: Given ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckStatus")," returns ",(0,r.yg)("inlineCode",{parentName:"p"},"meta.isPdrFinished: false"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckStatus")," is followed by ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckAgainChoice")," is followed by ",(0,r.yg)("inlineCode",{parentName:"p"},"PdrStatusReport")," is followed by ",(0,r.yg)("inlineCode",{parentName:"p"},"WaitForSomeTime"),", which returns to ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckStatus"),". Once ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckStatus")," returns ",(0,r.yg)("inlineCode",{parentName:"p"},"meta.isPdrFinished: true"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckAgainChoice")," proceeds to ",(0,r.yg)("inlineCode",{parentName:"p"},"WorkflowSucceeded"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Execution graph of SIPS ParsePdr workflow in AWS Step Functions console",src:n(82848).A,width:"682",height:"562"})),(0,r.yg)("h2",{id:"further-documentation"},"Further documentation"),(0,r.yg)("p",null,"For complete details on ",(0,r.yg)("inlineCode",{parentName:"p"},"Choice")," state configuration options, see ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html"},"the Choice state documentation"),"."))}g.isMDXComponent=!0},82848:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sips-parse-pdr-a8b1649e0c226d9552b36f8c790f8059.png"}}]);
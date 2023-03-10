"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[60868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"cmr-operations",title:"CMR Operations",hide_title:!1},l=void 0,p={unversionedId:"operator-docs/cmr-operations",id:"version-v13.0.0/operator-docs/cmr-operations",title:"CMR Operations",description:"This document will outline basic procedures to interact with CMR on a per-granule basis, both via the Cumulus Dashboard, and Cumulus API requests.",source:"@site/versioned_docs/version-v13.0.0/operator-docs/cmr-operations.md",sourceDirName:"operator-docs",slug:"/operator-docs/cmr-operations",permalink:"/cumulus/docs/v13.0.0/operator-docs/cmr-operations",draft:!1,tags:[],version:"v13.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"cmr-operations",title:"CMR Operations",hide_title:!1},sidebar:"Operator Docs",previous:{title:"Bulk Operations",permalink:"/cumulus/docs/v13.0.0/operator-docs/bulk-operations"},next:{title:"Naming Executions",permalink:"/cumulus/docs/v13.0.0/operator-docs/naming-executions"}},u={},c=[{value:"Publishing a granule to CMR",id:"publishing-a-granule-to-cmr",level:2},{value:"Setting granule access constraints in CMR Metadata",id:"setting-granule-access-constraints-in-cmr-metadata",level:2},{value:"Additional Operations",id:"additional-operations",level:2},{value:"Bulk CMR operations",id:"bulk-cmr-operations",level:2}],d={toc:c},m="wrapper";function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)(m,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document will outline basic procedures to interact with CMR on a per-granule basis, both via the Cumulus Dashboard, and Cumulus API requests.\nWe rely on the Cumulus API's ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplyWorkflow")," functionality to accomplish these actions."),(0,r.kt)("h2",{id:"publishing-a-granule-to-cmr"},"Publishing a granule to CMR"),(0,r.kt)("p",null,"Publishing a granule requires your Cumulus deployment have a workflow that contains only the ",(0,r.kt)("inlineCode",{parentName:"p"},"PostToCmr")," task provided by Cumulus Core. The rest of this section will assume you have created this workflow under the name ",(0,r.kt)("inlineCode",{parentName:"p"},"PublishGranule"),"."),(0,r.kt)("p",null,"Using either method below, Cumulus will take an unpublished granule and publish it to CMR:"),(0,r.kt)("p",null,"To do this via the dashboard, use the dashboard's ",(0,r.kt)("inlineCode",{parentName:"p"},"Execute")," button to open the workflow popup shown below and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"PublishGranule")," workflow:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot showing workflow popup window with a dropdown containing &#39;PublishGranule&#39; selected",src:n(18110).Z,width:"2396",height:"1452"})),(0,r.kt)("p",null,"An example invocation of the API to perform this action is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl --request PUT https://example.com/granules/MOD11A1.A2017137.h19v16.006.2017138085750 \\\n--header \'Authorization: Bearer ReplaceWithTheToken\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{ "action": "applyWorkflow", "workflow": "PublishGranule" }\'\n')),(0,r.kt)("h2",{id:"setting-granule-access-constraints-in-cmr-metadata"},"Setting granule access constraints in CMR Metadata"),(0,r.kt)("p",null,"Updating metadata access constraints can be accomplished using the applyWorkflow functionality.\nFor this, we use a workflow composed of the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCmrAccessConstraints")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PostToCmr")," tasks.\n",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCmrAccessConstraints")," will update CMR metadata file contents on S3, and ",(0,r.kt)("inlineCode",{parentName:"p"},"PostToCmr")," will push the updates to CMR.\nThe rest of this section will assume you have created this workflow under the name ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCmrAccessConstraints"),"."),(0,r.kt)("p",null,"Once created and deployed, the workflow is available in the Cumulus dashboard's ",(0,r.kt)("inlineCode",{parentName:"p"},"Execute")," workflow selector.\nHowever, note that additional configuration is required for this request, to supply an access constraint integer value and optional description to the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCmrAccessConstraints")," workflow, by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Custom Workflow Meta")," option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Execute")," popup, as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot showing granule execute popup with &#39;updateCmrAccessConstraints&#39; selected and configuration values shown in a collapsible JSON field",src:n(82088).Z,width:"2396",height:"1456"})),(0,r.kt)("p",null,"An example invocation of the API to perform this action is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl --request PUT https://example.com/granules/MOD11A1.A2017137.h19v16.006.2017138085750 \\\n--header \'Authorization: Bearer ReplaceWithTheToken\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n  "action": "applyWorkflow",\n  "workflow": "updateCmrAccessConstraints",\n  "meta": {\n    accessConstraints: {\n      value: 5,\n      description: "sample access constraint"\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"Supported CMR metadata formats for the above operation are Echo10XML and UMMG-JSON, which will populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"RestrictionFlag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RestrictionComment")," fields in Echo10XML, or the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessConstraints")," values in UMMG-JSON."),(0,r.kt)("h2",{id:"additional-operations"},"Additional Operations"),(0,r.kt)("p",null,"At this time Cumulus does not, out of the box, support additional operations on CMR metadata. However, given the examples shown above, we recommend working with your integrators to develop additional workflows that perform any required operations."),(0,r.kt)("h2",{id:"bulk-cmr-operations"},"Bulk CMR operations"),(0,r.kt)("p",null,"In order to perform the above operations in bulk, Cumulus supports the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplyWorkflow")," in an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncOperation"),". These are accessed via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Bulk Operation")," button on the dashboard, or the ",(0,r.kt)("inlineCode",{parentName:"p"},"/granules/bulk")," endpoint on the Cumulus API."),(0,r.kt)("p",null,"More information on bulk operations are in the ",(0,r.kt)("a",{parentName:"p",href:"../operator-docs/bulk-operations"},"bulk operations operator doc"),"."))}h.isMDXComponent=!0},18110:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cd_execute_publish-0e7caba46843cc9076dcff14f2fa23e6.png"},82088:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cd_execute_updateconstraints-7fa1c9115cc78f43829b77859ac635fa.png"}}]);
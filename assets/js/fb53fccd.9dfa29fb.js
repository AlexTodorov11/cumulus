"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[12099],{15680:(e,s,a)=>{a.d(s,{xA:()=>i,yg:()=>g});var u=a(96540);function t(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function r(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);s&&(u=u.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,u)}return a}function l(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?r(Object(a),!0).forEach((function(s){t(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}function m(e,s){if(null==e)return{};var a,u,t=function(e,s){if(null==e)return{};var a,u,t={},r=Object.keys(e);for(u=0;u<r.length;u++)a=r[u],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(u=0;u<r.length;u++)a=r[u],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var n=u.createContext({}),c=function(e){var s=u.useContext(n),a=s;return e&&(a="function"==typeof e?e(s):l(l({},s),e)),a},i=function(e){var s=c(e.components);return u.createElement(n.Provider,{value:s},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var s=e.children;return u.createElement(u.Fragment,{},s)}},o=u.forwardRef((function(e,s){var a=e.components,t=e.mdxType,r=e.originalType,n=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),p=c(a),o=t,g=p["".concat(n,".").concat(o)]||p[o]||h[o]||r;return a?u.createElement(g,l(l({ref:s},i),{},{components:a})):u.createElement(g,l({ref:s},i))}));function g(e,s){var a=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=o;var m={};for(var n in s)hasOwnProperty.call(s,n)&&(m[n]=s[n]);m.originalType=e,m[p]="string"==typeof e?e:t,l[1]=m;for(var c=2;c<r;c++)l[c]=a[c];return u.createElement.apply(null,l)}return u.createElement.apply(null,a)}o.displayName="MDXCreateElement"},94975:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>n,default:()=>g,frontMatter:()=>m,metadata:()=>c,toc:()=>p});var u=a(58168),t=a(98587),r=(a(96540),a(15680)),l=["components"],m={id:"tasks",title:"Cumulus Tasks",hide_title:!1},n=void 0,c={unversionedId:"tasks",id:"version-v17.0.0/tasks",title:"Cumulus Tasks",description:"A list of reusable Cumulus tasks. Add your own.",source:"@site/versioned_docs/version-v17.0.0/tasks.md",sourceDirName:".",slug:"/tasks",permalink:"/cumulus/docs/v17.0.0/tasks",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1692022753,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"tasks",title:"Cumulus Tasks",hide_title:!1},sidebar:"docs",previous:{title:"Workflow Tasks",permalink:"/cumulus/docs/v17.0.0/category/workflow-tasks"},next:{title:"Cumulus Tasks: Message Flow",permalink:"/cumulus/docs/v17.0.0/workflows/cumulus-task-message-flow"}},i={},p=[{value:"Tasks",id:"tasks",level:2},{value:"@cumulus/add-missing-file-checksums",id:"cumulusadd-missing-file-checksums",level:3},{value:"@cumulus/discover-granules",id:"cumulusdiscover-granules",level:3},{value:"@cumulus/discover-pdrs",id:"cumulusdiscover-pdrs",level:3},{value:"@cumulus/files-to-granules",id:"cumulusfiles-to-granules",level:3},{value:"@cumulus/hello-world",id:"cumulushello-world",level:3},{value:"@cumulus/hyrax-metadata-updates",id:"cumulushyrax-metadata-updates",level:3},{value:"@cumulus/lzards-backup",id:"cumuluslzards-backup",level:3},{value:"@cumulus/move-granules",id:"cumulusmove-granules",level:3},{value:"@cumulus/parse-pdr",id:"cumulusparse-pdr",level:3},{value:"@cumulus/pdr-status-check",id:"cumuluspdr-status-check",level:3},{value:"@cumulus/post-to-cmr",id:"cumuluspost-to-cmr",level:3},{value:"@cumulus/queue-granules",id:"cumulusqueue-granules",level:3},{value:"@cumulus/queue-pdrs",id:"cumulusqueue-pdrs",level:3},{value:"@cumulus/queue-workflow",id:"cumulusqueue-workflow",level:3},{value:"@cumulus/sf-sqs-report",id:"cumulussf-sqs-report",level:3},{value:"@cumulus/sync-granule",id:"cumulussync-granule",level:3},{value:"@cumulus/test-processing",id:"cumulustest-processing",level:3},{value:"@cumulus/update-cmr-access-constraints",id:"cumulusupdate-cmr-access-constraints",level:3},{value:"@cumulus/update-granules-cmr-metadata-file-links",id:"cumulusupdate-granules-cmr-metadata-file-links",level:3}],h={toc:p},o="wrapper";function g(e){var s=e.components,a=(0,t.A)(e,l);return(0,r.yg)(o,(0,u.A)({},h,a,{components:s,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"A list of reusable Cumulus tasks. ",(0,r.yg)("a",{parentName:"p",href:"/cumulus/docs/v17.0.0/adding-a-task"},"Add your own.")),(0,r.yg)("h2",{id:"tasks"},"Tasks"),(0,r.yg)("h3",{id:"cumulusadd-missing-file-checksums"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/add-missing-file-checksums#readme"},"@cumulus/add-missing-file-checksums")),(0,r.yg)("p",null,"Add checksums to files in S3 which don't have one"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/add-missing-file-checksums#readme/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/add-missing-file-checksums"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/add-missing-file-checksums#readme"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusdiscover-granules"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-granules"},"@cumulus/discover-granules")),(0,r.yg)("p",null,"Discover Granules in FTP/HTTP/HTTPS/SFTP/S3 endpoints"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-granules/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/discover-granules"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-granules"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusdiscover-pdrs"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-pdrs"},"@cumulus/discover-pdrs")),(0,r.yg)("p",null,"Discover PDRs in FTP and HTTP endpoints"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-pdrs/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/discover-pdrs"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-pdrs"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusfiles-to-granules"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/files-to-granules"},"@cumulus/files-to-granules")),(0,r.yg)("p",null,"Converts array-of-files input into a granules object by extracting granuleId from filename"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/files-to-granules/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/files-to-granules"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/files-to-granules"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulushello-world"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/hello-world"},"@cumulus/hello-world")),(0,r.yg)("p",null,"Example task"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/hello-world/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/hello-world"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/hello-world"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulushyrax-metadata-updates"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/hyrax-metadata-updates"},"@cumulus/hyrax-metadata-updates")),(0,r.yg)("p",null,"Update granule metadata with hooks to OPeNDAP URL"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/hyrax-metadata-updates/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/hyrax-metadata-updates"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/hyrax-metadata-updates"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumuluslzards-backup"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/lzards-backup#readme"},"@cumulus/lzards-backup")),(0,r.yg)("p",null,"Run LZARDS backup"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/lzards-backup#readme/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/lzards-backup"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/lzards-backup#readme"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusmove-granules"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/move-granules"},"@cumulus/move-granules")),(0,r.yg)("p",null,"Move granule files from staging to final location"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/move-granules/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/move-granules"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/move-granules"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusparse-pdr"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/parse-pdr"},"@cumulus/parse-pdr")),(0,r.yg)("p",null,"Download and Parse a given PDR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/parse-pdr/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/parse-pdr"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/parse-pdr"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumuluspdr-status-check"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/pdr-status-check"},"@cumulus/pdr-status-check")),(0,r.yg)("p",null,"Checks execution status of granules in a PDR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/pdr-status-check/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/pdr-status-check"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/pdr-status-check"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumuluspost-to-cmr"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/post-to-cmr"},"@cumulus/post-to-cmr")),(0,r.yg)("p",null,"Post a given granule to CMR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/post-to-cmr/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/post-to-cmr"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/post-to-cmr"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusqueue-granules"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-granules"},"@cumulus/queue-granules")),(0,r.yg)("p",null,"Add discovered granules to the queue"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-granules/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/queue-granules"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-granules"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusqueue-pdrs"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-pdrs"},"@cumulus/queue-pdrs")),(0,r.yg)("p",null,"Add discovered PDRs to a queue"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-pdrs/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/queue-pdrs"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-pdrs"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusqueue-workflow"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-workflow"},"@cumulus/queue-workflow")),(0,r.yg)("p",null,"Add workflow to the queue"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-workflow/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/queue-workflow"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-workflow"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulussf-sqs-report"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/sf-sqs-report"},"@cumulus/sf-sqs-report")),(0,r.yg)("p",null,"Sends an incoming Cumulus message to SQS"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sf-sqs-report/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/sf-sqs-report"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sf-sqs-report"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulussync-granule"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/sync-granule"},"@cumulus/sync-granule")),(0,r.yg)("p",null,"Download a given granule"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sync-granule/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/sync-granule"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sync-granule"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulustest-processing"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/test-processing"},"@cumulus/test-processing")),(0,r.yg)("p",null,"Fake processing task used for integration tests"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/test-processing/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/test-processing"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/test-processing"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusupdate-cmr-access-constraints"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-cmr-access-constraints#readme"},"@cumulus/update-cmr-access-constraints")),(0,r.yg)("p",null,"Updates CMR metadata to set access constraints"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-cmr-access-constraints#readme/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/update-cmr-access-constraints"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-cmr-access-constraints#readme"},"web"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusupdate-granules-cmr-metadata-file-links"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-granules-cmr-metadata-file-links"},"@cumulus/update-granules-cmr-metadata-file-links")),(0,r.yg)("p",null,"Update CMR metadata files with correct online access urls and etags and transfer etag info to granules' CMR files"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-granules-cmr-metadata-file-links/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/update-granules-cmr-metadata-file-links"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-granules-cmr-metadata-file-links"},"web"))))}g.isMDXComponent=!0}}]);
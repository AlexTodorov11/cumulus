"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[68124],{95788:(e,a,s)=>{s.d(a,{Iu:()=>i,yg:()=>g});var t=s(11504);function u(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function r(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function l(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){u(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function m(e,a){if(null==e)return{};var s,t,u=function(e,a){if(null==e)return{};var s,t,u={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||(u[s]=e[s]);return u}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(u[s]=e[s])}return u}var n=t.createContext({}),c=function(e){var a=t.useContext(n),s=a;return e&&(s="function"==typeof e?e(a):l(l({},a),e)),s},i=function(e){var a=c(e.components);return t.createElement(n.Provider,{value:a},e.children)},o="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var s=e.components,u=e.mdxType,r=e.originalType,n=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),o=c(s),h=u,g=o["".concat(n,".").concat(h)]||o[h]||p[h]||r;return s?t.createElement(g,l(l({ref:a},i),{},{components:s})):t.createElement(g,l({ref:a},i))}));function g(e,a){var s=arguments,u=a&&a.mdxType;if("string"==typeof e||u){var r=s.length,l=new Array(r);l[0]=h;var m={};for(var n in a)hasOwnProperty.call(a,n)&&(m[n]=a[n]);m.originalType=e,m[o]="string"==typeof e?e:u,l[1]=m;for(var c=2;c<r;c++)l[c]=s[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,s)}h.displayName="MDXCreateElement"},61760:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>g,frontMatter:()=>m,metadata:()=>c,toc:()=>o});var t=s(45072),u=s(95656),r=(s(11504),s(95788)),l=["components"],m={id:"tasks",title:"Cumulus Tasks",hide_title:!1},n=void 0,c={unversionedId:"tasks",id:"version-v13.4.0/tasks",title:"Cumulus Tasks",description:"A list of reusable Cumulus tasks. Add your own.",source:"@site/versioned_docs/version-v13.4.0/tasks.md",sourceDirName:".",slug:"/tasks",permalink:"/cumulus/docs/v13.4.0/tasks",draft:!1,tags:[],version:"v13.4.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"tasks",title:"Cumulus Tasks",hide_title:!1},sidebar:"docs",previous:{title:"Contributing a Task",permalink:"/cumulus/docs/v13.4.0/adding-a-task"},next:{title:"Discover Granules",permalink:"/cumulus/docs/v13.4.0/workflow_tasks/discover_granules"}},i={},o=[{value:"Tasks",id:"tasks",level:2},{value:"@cumulus/add-missing-file-checksums",id:"cumulusadd-missing-file-checksums",level:3},{value:"@cumulus/discover-granules",id:"cumulusdiscover-granules",level:3},{value:"@cumulus/discover-pdrs",id:"cumulusdiscover-pdrs",level:3},{value:"@cumulus/files-to-granules",id:"cumulusfiles-to-granules",level:3},{value:"@cumulus/hello-world",id:"cumulushello-world",level:3},{value:"@cumulus/hyrax-metadata-updates",id:"cumulushyrax-metadata-updates",level:3},{value:"@cumulus/lzards-backup",id:"cumuluslzards-backup",level:3},{value:"@cumulus/move-granules",id:"cumulusmove-granules",level:3},{value:"@cumulus/parse-pdr",id:"cumulusparse-pdr",level:3},{value:"@cumulus/pdr-status-check",id:"cumuluspdr-status-check",level:3},{value:"@cumulus/post-to-cmr",id:"cumuluspost-to-cmr",level:3},{value:"@cumulus/queue-granules",id:"cumulusqueue-granules",level:3},{value:"@cumulus/queue-pdrs",id:"cumulusqueue-pdrs",level:3},{value:"@cumulus/queue-workflow",id:"cumulusqueue-workflow",level:3},{value:"@cumulus/sf-sqs-report",id:"cumulussf-sqs-report",level:3},{value:"@cumulus/sync-granule",id:"cumulussync-granule",level:3},{value:"@cumulus/test-processing",id:"cumulustest-processing",level:3},{value:"@cumulus/update-cmr-access-constraints",id:"cumulusupdate-cmr-access-constraints",level:3},{value:"@cumulus/update-granules-cmr-metadata-file-links",id:"cumulusupdate-granules-cmr-metadata-file-links",level:3}],p={toc:o},h="wrapper";function g(e){var a=e.components,s=(0,u.c)(e,l);return(0,r.yg)(h,(0,t.c)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"A list of reusable Cumulus tasks. ",(0,r.yg)("a",{parentName:"p",href:"/cumulus/docs/v13.4.0/adding-a-task"},"Add your own.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE:")," For a detailed description of each task, visit the task's ",(0,r.yg)("inlineCode",{parentName:"p"},"README.md"),". Information on the  input or output of a task is specified in the task's ",(0,r.yg)("inlineCode",{parentName:"p"},"schemas")," directory.")),(0,r.yg)("h2",{id:"tasks"},"Tasks"),(0,r.yg)("h3",{id:"cumulusadd-missing-file-checksums"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/add-missing-file-checksums#readme"},"@cumulus/add-missing-file-checksums")),(0,r.yg)("p",null,"Add checksums to files in S3 which don't have one"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/add-missing-file-checksums#readme"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/add-missing-file-checksums#readme/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/add-missing-file-checksums"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusdiscover-granules"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-granules"},"@cumulus/discover-granules")),(0,r.yg)("p",null,"Discover Granules in FTP/HTTP/HTTPS/SFTP/S3 endpoints"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-granules"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-granules/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/discover-granules"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusdiscover-pdrs"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-pdrs"},"@cumulus/discover-pdrs")),(0,r.yg)("p",null,"Discover PDRs in FTP and HTTP endpoints"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-pdrs"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-pdrs/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/discover-pdrs"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusfiles-to-granules"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/files-to-granules"},"@cumulus/files-to-granules")),(0,r.yg)("p",null,"Converts array-of-files input into a granules object by extracting granuleId from filename"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/files-to-granules"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/files-to-granules/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/files-to-granules"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulushello-world"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/hello-world"},"@cumulus/hello-world")),(0,r.yg)("p",null,"Example task"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/hello-world"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/hello-world/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/hello-world"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulushyrax-metadata-updates"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/hyrax-metadata-updates"},"@cumulus/hyrax-metadata-updates")),(0,r.yg)("p",null,"Update granule metadata with hooks to OPeNDAP URL"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/hyrax-metadata-updates"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/hyrax-metadata-updates/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/hyrax-metadata-updates"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumuluslzards-backup"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/lzards-backup#readme"},"@cumulus/lzards-backup")),(0,r.yg)("p",null,"Run LZARDS backup"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/lzards-backup#readme"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/lzards-backup#readme/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/lzards-backup"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusmove-granules"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/move-granules"},"@cumulus/move-granules")),(0,r.yg)("p",null,"Move granule files from staging to final location"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/move-granules"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/move-granules/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/move-granules"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusparse-pdr"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/parse-pdr"},"@cumulus/parse-pdr")),(0,r.yg)("p",null,"Download and Parse a given PDR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/parse-pdr"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/parse-pdr/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/parse-pdr"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"),".")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumuluspdr-status-check"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/pdr-status-check"},"@cumulus/pdr-status-check")),(0,r.yg)("p",null,"Checks execution status of granules in a PDR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/pdr-status-check"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/pdr-status-check/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/pdr-status-check"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumuluspost-to-cmr"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/post-to-cmr"},"@cumulus/post-to-cmr")),(0,r.yg)("p",null,"Post a given granule to CMR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/post-to-cmr"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/post-to-cmr/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/post-to-cmr"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusqueue-granules"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-granules"},"@cumulus/queue-granules")),(0,r.yg)("p",null,"Add discovered granules to the queue"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-granules"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-granules/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/queue-granules"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusqueue-pdrs"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-pdrs"},"@cumulus/queue-pdrs")),(0,r.yg)("p",null,"Add discovered PDRs to a queue"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-pdrs"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-pdrs/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/queue-pdrs"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusqueue-workflow"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-workflow"},"@cumulus/queue-workflow")),(0,r.yg)("p",null,"Add workflow to the queue"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-workflow"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-workflow/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/queue-workflow"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulussf-sqs-report"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/sf-sqs-report"},"@cumulus/sf-sqs-report")),(0,r.yg)("p",null,"Sends an incoming Cumulus message to SQS"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sf-sqs-report"},"README")," for additonal information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sf-sqs-report/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/sf-sqs-report"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulussync-granule"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/sync-granule"},"@cumulus/sync-granule")),(0,r.yg)("p",null,"Download a given granule"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sync-granule"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sync-granule/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/sync-granule"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulustest-processing"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/test-processing"},"@cumulus/test-processing")),(0,r.yg)("p",null,"Fake processing task used for integration tests"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/test-processing"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/test-processing/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/test-processing"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusupdate-cmr-access-constraints"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-cmr-access-constraints#readme"},"@cumulus/update-cmr-access-constraints")),(0,r.yg)("p",null,"Updates CMR metadata to set access constraints"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-cmr-access-constraints#readme"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-cmr-access-constraints#readme/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/update-cmr-access-constraints"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cumulusupdate-granules-cmr-metadata-file-links"},(0,r.yg)("a",{parentName:"h3",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-granules-cmr-metadata-file-links"},"@cumulus/update-granules-cmr-metadata-file-links")),(0,r.yg)("p",null,"Update CMR metadata files with correct online access urls and etags and transfer etag info to granules' CMR files"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Readme: Check out the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-granules-cmr-metadata-file-links"},"README")," for additional information."),(0,r.yg)("li",{parentName:"ul"},"Schemas: See this module's ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/update-granules-cmr-metadata-file-links/schemas"},"schema definitions"),"."),(0,r.yg)("li",{parentName:"ul"},"Resources: ",(0,r.yg)("a",{parentName:"li",href:"https://npmjs.com/package/@cumulus/update-granules-cmr-metadata-file-links"},"npm")," | ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"source"))))}g.isMDXComponent=!0}}]);
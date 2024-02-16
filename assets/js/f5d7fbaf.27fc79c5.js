"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[61526],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var r=a(96540);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=s,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},713:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=a(58168),s=a(98587),n=(a(96540),a(15680)),i=["components"],o={id:"architecture",title:"Architecture",hide_title:!1},l=void 0,u={unversionedId:"architecture",id:"version-v13.4.0/architecture",title:"Architecture",description:"Architecture",source:"@site/versioned_docs/version-v13.4.0/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/cumulus/docs/v13.4.0/architecture",draft:!1,tags:[],version:"v13.4.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"architecture",title:"Architecture",hide_title:!1},sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/cumulus/docs/v13.4.0/faqs"},next:{title:"Interfaces",permalink:"/cumulus/docs/v13.4.0/interfaces"}},c={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Data Distribution",id:"data-distribution",level:3},{value:"Data search",id:"data-search",level:4},{value:"Data ingest",id:"data-ingest",level:3},{value:"Workflows",id:"workflows",level:4},{value:"Data persistence",id:"data-persistence",level:4},{value:"Data discovery",id:"data-discovery",level:4},{value:"Database",id:"database",level:4},{value:"PostgreSQL Database Schema Diagram",id:"postgresql-database-schema-diagram",level:5},{value:"Maintenance",id:"maintenance",level:3},{value:"Deployment Structure",id:"deployment-structure",level:2},{value:"Cumulus",id:"cumulus",level:3},{value:"Data persistence",id:"data-persistence-1",level:3},{value:"Other modules",id:"other-modules",level:3}],d={toc:p},m="wrapper";function h(e){var t=e.components,o=(0,s.A)(e,i);return(0,n.yg)(m,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"architecture"},"Architecture"),(0,n.yg)("p",null,"Below, find a diagram with the components that comprise an instance of Cumulus."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Architecture diagram of a Cumulus deployment",src:a(2573).A,width:"2427",height:"2200"})),(0,n.yg)("p",null,"This diagram details all of the major architectural  components of a Cumulus deployment."),(0,n.yg)("p",null,"While the diagram can feel complex, it can easily be digested in several major components:"),(0,n.yg)("h3",{id:"data-distribution"},"Data Distribution"),(0,n.yg)("p",null,"End Users can access data via Cumulus's ",(0,n.yg)("inlineCode",{parentName:"p"},"distribution")," submodule, which includes ASF's ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app"},"thin egress application"),", this provides authenticated data egress, temporary S3 links and other statistics features."),(0,n.yg)("h4",{id:"data-search"},"Data search"),(0,n.yg)("p",null,"End user exposure of Cumulus's holdings is expected to be provided by an external service."),(0,n.yg)("p",null,"For NASA use, this is assumed to be ",(0,n.yg)("a",{parentName:"p",href:"https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/cmr"},"CMR")," in this diagram."),(0,n.yg)("h3",{id:"data-ingest"},"Data ingest"),(0,n.yg)("h4",{id:"workflows"},"Workflows"),(0,n.yg)("p",null,"The core of the ingest and processing capabilities in Cumulus is built into the deployed AWS ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/step-functions/"},"Step Function")," workflows.    Cumulus rules trigger workflows via either Cloud Watch rules, Kinesis streams, SNS topic, or SQS queue.   The workflows then run with a configured ",(0,n.yg)("a",{parentName:"p",href:"./workflows/cumulus-task-message-flow"},"Cumulus message"),", utilizing built-in processes to report status of granules, PDRs, executions, etc to the ",(0,n.yg)("a",{parentName:"p",href:"#data-persistence"},"Data Persistence")," components."),(0,n.yg)("p",null,"Workflows can optionally report granule metadata to ",(0,n.yg)("a",{parentName:"p",href:"https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/cmr"},"CMR"),", and workflow steps can report metrics information to a shared SNS topic, which could be subscribed to for near real time granule, execution, and PDR status. This could be used for metrics reporting using an external ELK stack, for example."),(0,n.yg)("h4",{id:"data-persistence"},"Data persistence"),(0,n.yg)("p",null,"Cumulus entity state data is stored in a set of ",(0,n.yg)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," compatible database, and is exported to an Elasticsearch instance for non-authoritative querying/state data for the API and other applications that require more complex queries. Currently the entity state data is replicated in DynamoDB and this will be removed in a future release."),(0,n.yg)("h4",{id:"data-discovery"},"Data discovery"),(0,n.yg)("p",null,"Discovering data for ingest is handled via workflow step components using Cumulus ",(0,n.yg)("inlineCode",{parentName:"p"},"provider")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"collection")," configurations and various triggers.    Data can be ingested from AWS S3, FTP, HTTPS and more."),(0,n.yg)("h4",{id:"database"},"Database"),(0,n.yg)("p",null,"Cumulus utilizes a user-provided PostgreSQL database backend. For improved API search query efficiency Cumulus provides data replication to an Elasticsearch instance.   For legacy reasons, Cumulus is currently also deploying a DynamoDB datastore, and writes are replicated in parallel with the PostgreSQL database writes.   The DynamoDB replicated tables and parallel writes will be removed in future releases."),(0,n.yg)("h5",{id:"postgresql-database-schema-diagram"},"PostgreSQL Database Schema Diagram"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"ERD of the Cumulus Database",src:a(93307).A,width:"1509",height:"1741"})),(0,n.yg)("h3",{id:"maintenance"},"Maintenance"),(0,n.yg)("p",null,"System maintenance personnel have access to manage ingest and various portions of Cumulus via an ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/api-gateway/"},"AWS API gateway"),", as well as the operator ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-dashboard"},"dashboard"),"."),(0,n.yg)("h2",{id:"deployment-structure"},"Deployment Structure"),(0,n.yg)("p",null,"Cumulus is deployed via ",(0,n.yg)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," and is organized internally into two separate top-level modules, as well as several external modules."),(0,n.yg)("h3",{id:"cumulus"},"Cumulus"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/cumulus"},"Cumulus module"),", which contains multiple internal submodules, deploys all of the Cumulus components that are not part of the ",(0,n.yg)("inlineCode",{parentName:"p"},"Data Persistence")," portion of this diagram."),(0,n.yg)("h3",{id:"data-persistence-1"},"Data persistence"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/data-persistence"},"data persistence")," module provides the ",(0,n.yg)("inlineCode",{parentName:"p"},"Data Persistence")," portion of the diagram."),(0,n.yg)("h3",{id:"other-modules"},"Other modules"),(0,n.yg)("p",null,"Other modules are provided as artifacts on the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"release")," page for use in users configuring their own deployment and contain extracted subcomponents of the ",(0,n.yg)("a",{parentName:"p",href:"#cumulus"},"cumulus")," module.  For more on these components see the ",(0,n.yg)("a",{parentName:"p",href:"deployment/components"},"components documentation"),"."),(0,n.yg)("p",null,"For more on the specific structure, examples of use and how to deploy and more, please see the ",(0,n.yg)("a",{parentName:"p",href:"deployment"},"deployment")," docs as well as the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy"},"cumulus-template-deploy")," repo\n."))}h.isMDXComponent=!0},2573:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cumulus-arch-diagram-7f281e6b6bf7224f947f0eff08280e08.png"},93307:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/relationships.real.large-d45a4d01bb881a3c7f449cf204a7333d.png"}}]);
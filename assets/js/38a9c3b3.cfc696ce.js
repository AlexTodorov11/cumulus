"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[83944],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>d});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=r,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(45072),r=n(95656),i=(n(11504),n(95788)),o=["components"],s={id:"thin_egress_app",title:"Using the Thin Egress App (TEA) for Cumulus Distribution",hide_title:!1},p=void 0,l={unversionedId:"deployment/thin_egress_app",id:"version-v16.1.3/deployment/thin_egress_app",title:"Using the Thin Egress App (TEA) for Cumulus Distribution",description:"The Thin Egress App (TEA) is an app running in Lambda that allows retrieving data from S3 using temporary links and provides URS integration.",source:"@site/versioned_docs/version-v16.1.3/deployment/thin-egress-app.md",sourceDirName:"deployment",slug:"/deployment/thin_egress_app",permalink:"/cumulus/docs/v16.1.3/deployment/thin_egress_app",draft:!1,tags:[],version:"v16.1.3",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1706031284,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"thin_egress_app",title:"Using the Thin Egress App (TEA) for Cumulus Distribution",hide_title:!1},sidebar:"docs",previous:{title:"APIs",permalink:"/cumulus/docs/v16.1.3/deployment/apis-introduction"},next:{title:"Using the Cumulus Distribution API",permalink:"/cumulus/docs/v16.1.3/deployment/cumulus_distribution"}},u={},m=[{value:"Configuring a TEA Deployment",id:"configuring-a-tea-deployment",level:2},{value:"Create a Secret for Signing Thin Egress App JWTs",id:"create-a-secret-for-signing-thin-egress-app-jwts",level:3},{value:"Bucket_map.yaml",id:"bucket_mapyaml",level:3},{value:"Optionally Configure a Custom Bucket Map",id:"optionally-configure-a-custom-bucket-map",level:4},{value:"bucket_map.yaml",id:"bucket_mapyaml-1",level:5},{value:"Optionally Configure Shared Variables",id:"optionally-configure-shared-variables",level:3}],c={toc:m},g="wrapper";function d(e){var t=e.components,n=(0,r.c)(e,o);return(0,i.yg)(g,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app"},"Thin Egress App (TEA)")," is an app running in Lambda that allows retrieving data from S3 using temporary links and provides URS integration."),(0,i.yg)("h2",{id:"configuring-a-tea-deployment"},"Configuring a TEA Deployment"),(0,i.yg)("p",null,"TEA is deployed using ",(0,i.yg)("a",{parentName:"p",href:"https://terraform.io"},"Terraform")," modules. Refer to ",(0,i.yg)("a",{parentName:"p",href:"./components"},"these instructions")," for guidance on how to integrate new components with your deployment."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"cumulus-template-deploy")," repository ",(0,i.yg)("inlineCode",{parentName:"p"},"cumulus-tf/main.tf")," contains a ",(0,i.yg)("inlineCode",{parentName:"p"},"thin_egress_app")," for distribution."),(0,i.yg)("p",null,"The TEA module provides ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app/blob/devel/NGAP-DEPLOY-README.MD"},"these instructions"),"\nshowing how to add it to your deployment and the following are instructions to configure the ",(0,i.yg)("inlineCode",{parentName:"p"},"thin_egress_app")," module in your Cumulus deployment."),(0,i.yg)("h3",{id:"create-a-secret-for-signing-thin-egress-app-jwts"},"Create a Secret for Signing Thin Egress App JWTs"),(0,i.yg)("p",null,"The Thin Egress App uses JSON Web Tokens (JWTs) internally to authenticate requests and requires a secret stored in AWS Secrets Manager containing SSH keys that are used to sign the JWTs."),(0,i.yg)("p",null,"See the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app#jwt-cookie-secret"},"Thin Egress App documentation")," on how to create this secret with the correct values. It will be used later to set the ",(0,i.yg)("inlineCode",{parentName:"p"},"thin_egress_jwt_secret_name")," variable when deploying the Cumulus module."),(0,i.yg)("h3",{id:"bucket_mapyaml"},"Bucket_map.yaml"),(0,i.yg)("p",null,"The Thin Egress App uses a ",(0,i.yg)("inlineCode",{parentName:"p"},"bucket_map.yaml")," file to determine which buckets to\nserve. Documentation of the file format is available ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app#bucket-map"},"here"),"."),(0,i.yg)("p",null,"The default Cumulus module generates a file at ",(0,i.yg)("inlineCode",{parentName:"p"},"s3://${system_bucket}/distribution_bucket_map.json"),"."),(0,i.yg)("p",null,"The configuration file is a simple JSON mapping of the form:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "daac-public-data-bucket": "/path/to/this/kind/of/data"\n}\n')),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Cumulus only supports a one-to-one mapping of bucket->TEA path for 'distribution' buckets.")),(0,i.yg)("h4",{id:"optionally-configure-a-custom-bucket-map"},"Optionally Configure a Custom Bucket Map"),(0,i.yg)("p",null,"A simple configuration would look something like this:"),(0,i.yg)("h5",{id:"bucket_mapyaml-1"},"bucket_map.yaml"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"MAP:\n  my-protected: my-protected\n  my-public: my-public\n\nPUBLIC_BUCKETS:\n  - my-public\n")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Your custom bucket map ",(0,i.yg)("strong",{parentName:"p"},"must include mappings for all of the ",(0,i.yg)("inlineCode",{parentName:"strong"},"protected")," and ",(0,i.yg)("inlineCode",{parentName:"strong"},"public")," buckets specified in the ",(0,i.yg)("inlineCode",{parentName:"strong"},"buckets")," variable in ",(0,i.yg)("inlineCode",{parentName:"strong"},"cumulus-tf/terraform.tfvars")),", otherwise Cumulus may not be able to determine the correct distribution URL for ingested files and you may encounter errors.")),(0,i.yg)("h3",{id:"optionally-configure-shared-variables"},"Optionally Configure Shared Variables"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"cumulus")," module deploys certain components that interact with TEA. As a result, the ",(0,i.yg)("inlineCode",{parentName:"p"},"cumulus")," module requires that if you are specifying a value for the ",(0,i.yg)("inlineCode",{parentName:"p"},"stage_name")," variable to the TEA module, you ",(0,i.yg)("strong",{parentName:"p"},"must use the same value for the ",(0,i.yg)("inlineCode",{parentName:"strong"},"tea_api_gateway_stage")," variable to the ",(0,i.yg)("inlineCode",{parentName:"strong"},"cumulus")," module"),"."),(0,i.yg)("p",null,"One way to keep these variable values in sync across the modules is to use ",(0,i.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/configuration/locals.html"},"Terraform local values")," to define values to use for the variables for both modules. This approach is shown in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/main.tf"},"Cumulus Core example deployment code"),"."))}d.isMDXComponent=!0}}]);
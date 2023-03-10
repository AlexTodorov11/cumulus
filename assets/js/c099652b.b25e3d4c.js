"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[14369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"thin_egress_app",title:"Using the Thin Egress App for Cumulus distribution",hide_title:!1},l=void 0,p={unversionedId:"deployment/thin_egress_app",id:"version-v11.0.0/deployment/thin_egress_app",title:"Using the Thin Egress App for Cumulus distribution",description:"The Thin Egress App (TEA) is an app running in Lambda that allows retrieving data from S3 using temporary links and provides URS integration.",source:"@site/versioned_docs/version-v11.0.0/deployment/thin-egress-app.md",sourceDirName:"deployment",slug:"/deployment/thin_egress_app",permalink:"/cumulus/docs/v11.0.0/deployment/thin_egress_app",draft:!1,tags:[],version:"v11.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"thin_egress_app",title:"Using the Thin Egress App for Cumulus distribution",hide_title:!1},sidebar:"docs",previous:{title:"Component-based Cumulus Deployment",permalink:"/cumulus/docs/v11.0.0/deployment/components"},next:{title:"Using the Cumulus Distribution API",permalink:"/cumulus/docs/v11.0.0/deployment/cumulus_distribution"}},u={},m=[{value:"Configuring a TEA deployment",id:"configuring-a-tea-deployment",level:2},{value:"Create a secret for signing Thin Egress App JWTs",id:"create-a-secret-for-signing-thin-egress-app-jwts",level:3},{value:"bucket_map.yaml",id:"bucket_mapyaml",level:3},{value:"Optionally configure a custom bucket map",id:"optionally-configure-a-custom-bucket-map",level:4},{value:"bucket_map.yaml",id:"bucket_mapyaml-1",level:5},{value:"Optionally configure shared variables",id:"optionally-configure-shared-variables",level:3}],c={toc:m},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app"},"Thin Egress App (TEA)")," is an app running in Lambda that allows retrieving data from S3 using temporary links and provides URS integration."),(0,o.kt)("h2",{id:"configuring-a-tea-deployment"},"Configuring a TEA deployment"),(0,o.kt)("p",null,"TEA is deployed using ",(0,o.kt)("a",{parentName:"p",href:"https://terraform.io"},"Terraform")," modules. Refer to ",(0,o.kt)("a",{parentName:"p",href:"./components"},"these instructions")," for guidance on how to integrate new components with your deployment."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus-template-deploy")," repository ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus-tf/main.tf")," contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"thin_egress_app")," for distribution."),(0,o.kt)("p",null,"The TEA module provides ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app/blob/devel/NGAP-DEPLOY-README.MD"},"these instructions"),"\nshowing how to add it to your deployment and the following are instructions to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"thin_egress_app")," module in your Cumulus deployment."),(0,o.kt)("h3",{id:"create-a-secret-for-signing-thin-egress-app-jwts"},"Create a secret for signing Thin Egress App JWTs"),(0,o.kt)("p",null,"The Thin Egress App uses JWTs internally to authenticate requests and requires a secret stored in AWS Secrets Manager containing SSH keys that are used to sign the JWTs."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app#jwt-cookie-secret"},"Thin Egress App documentation on how to create this secret with the correct values"),". It will be used later to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"thin_egress_jwt_secret_name")," variable when deploying the Cumulus module."),(0,o.kt)("h3",{id:"bucket_mapyaml"},"bucket_map.yaml"),(0,o.kt)("p",null,"The Thin Egress App uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket_map.yaml")," file to determine which buckets to\nserve. Documentation of the file format is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app#bucket-map"},"here"),"."),(0,o.kt)("p",null,"The default Cumulus module generates a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://${system_bucket}/distribution_bucket_map.json"),"."),(0,o.kt)("p",null,"The configuration file is a simple json mapping of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "daac-public-data-bucket": "/path/to/this/kind/of/data"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note: Cumulus only supports a one-to-one mapping of bucket->TEA path for 'distribution' buckets.")),(0,o.kt)("h4",{id:"optionally-configure-a-custom-bucket-map"},"Optionally configure a custom bucket map"),(0,o.kt)("p",null,"A simple config would look something like this:"),(0,o.kt)("h5",{id:"bucket_mapyaml-1"},"bucket_map.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"MAP:\n  my-protected: my-protected\n  my-public: my-public\n\nPUBLIC_BUCKETS:\n  - my-public\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note: your custom bucket map ",(0,o.kt)("strong",{parentName:"p"},"must include mappings for all of the ",(0,o.kt)("inlineCode",{parentName:"strong"},"protected")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"public")," buckets specified in the ",(0,o.kt)("inlineCode",{parentName:"strong"},"buckets")," variable in ",(0,o.kt)("inlineCode",{parentName:"strong"},"cumulus-tf/terraform.tfvars")),", otherwise Cumulus may not be able to determine the correct distribution URL for ingested files and you may encounter errors.")),(0,o.kt)("h3",{id:"optionally-configure-shared-variables"},"Optionally configure shared variables"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus")," module deploys certain components that interact with TEA. As a result, the ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus")," module requires that if you are specifying a value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"stage_name")," variable to the TEA module, you ",(0,o.kt)("strong",{parentName:"p"},"must use the same value for the ",(0,o.kt)("inlineCode",{parentName:"strong"},"tea_api_gateway_stage")," variable to the ",(0,o.kt)("inlineCode",{parentName:"strong"},"cumulus")," module"),"."),(0,o.kt)("p",null,"One way to keep these variable values in sync across the modules is to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/configuration/locals.html"},"Terraform local values")," to define values to use for the variables for both modules. This approach is shown in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/main.tf"},"Cumulus core example deployment code"),"."))}h.isMDXComponent=!0}}]);
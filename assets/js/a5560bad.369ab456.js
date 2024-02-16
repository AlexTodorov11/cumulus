"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[15181],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),c=["components"],i={id:"create_bucket",title:"Creating an S3 Bucket",hide_title:!1},l=void 0,s={unversionedId:"deployment/create_bucket",id:"version-v14.1.0/deployment/create_bucket",title:"Creating an S3 Bucket",description:"Buckets can be created on the command line with AWS CLI or via the web interface on the AWS console.",source:"@site/versioned_docs/version-v14.1.0/deployment/create_bucket.md",sourceDirName:"deployment",slug:"/deployment/create_bucket",permalink:"/cumulus/docs/v14.1.0/deployment/create_bucket",draft:!1,tags:[],version:"v14.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"create_bucket",title:"Creating an S3 Bucket",hide_title:!1},sidebar:"docs",previous:{title:"How to Deploy Cumulus",permalink:"/cumulus/docs/v14.1.0/deployment/"},next:{title:"Terraform Best Practices",permalink:"/cumulus/docs/v14.1.0/deployment/terraform-best-practices"}},u={},p=[{value:"Command Line",id:"command-line",level:2},{value:"Web Interface",id:"web-interface",level:2}],m={toc:p},d="wrapper";function g(e){var t=e.components,n=(0,a.A)(e,c);return(0,o.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Buckets can be created on the command line with ",(0,o.yg)("a",{parentName:"p",href:"https://aws.amazon.com/cli/",title:"Amazon Command Line Interface"},"AWS CLI")," or via the web interface on the ",(0,o.yg)("a",{parentName:"p",href:"http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html",title:"Amazon web console interface"},"AWS console"),"."),(0,o.yg)("p",null,"When creating a protected bucket (a bucket containing data which will be served through the distribution API), make sure to enable S3 server access logging. See ",(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v14.1.0/configuration/server_access_logging"},"S3 Server Access Logging")," for more details."),(0,o.yg)("h2",{id:"command-line"},"Command Line"),(0,o.yg)("p",null,"Using the ",(0,o.yg)("a",{parentName:"p",href:"https://aws.amazon.com/cli/",title:"Amazon Command Line Interface"},"AWS Command Line Tool")," ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/s3api/create-bucket.html"},"create-bucket")," ",(0,o.yg)("inlineCode",{parentName:"p"},"s3api")," subcommand:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ aws s3api create-bucket \\\n    --bucket foobar-internal \\\n    --region us-west-2 \\\n    --create-bucket-configuration LocationConstraint=us-west-2\n{\n    "Location": "/foobar-internal"\n}\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,o.yg)("strong",{parentName:"p"},"Note:")," The ",(0,o.yg)("inlineCode",{parentName:"p"},"region")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"create-bucket-configuration")," arguments are only necessary if you are creating a bucket outside of the ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east-1")," region.")),(0,o.yg)("p",null,"Please note security settings and other bucket options can be set via the options listed in the ",(0,o.yg)("inlineCode",{parentName:"p"},"s3api")," documentation."),(0,o.yg)("p",null,"Repeat the above step for each bucket to be created."),(0,o.yg)("h2",{id:"web-interface"},"Web Interface"),(0,o.yg)("p",null,"If you prefer to use the AWS web interface instead of the command line, see ",(0,o.yg)("a",{parentName:"p",href:"http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html",title:"Amazon web console interface"},'AWS "Creating a Bucket" documentation'),"."))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[6e4],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,m=c["".concat(l,".").concat(p)]||c[p]||g[p]||o;return t?n.createElement(m,s(s({ref:a},d),{},{components:t})):n.createElement(m,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},59956:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=t(58168),r=t(98587),o=(t(96540),t(15680)),s=["components"],i={id:"choosing_configuring_rds",title:"RDS: Choosing and Configuring Your Database Type",hide_title:!1},l=void 0,u={unversionedId:"deployment/choosing_configuring_rds",id:"version-v18.3.2/deployment/choosing_configuring_rds",title:"RDS: Choosing and Configuring Your Database Type",description:"Background",source:"@site/versioned_docs/version-v18.3.2/deployment/choosing_configuring_rds.md",sourceDirName:"deployment",slug:"/deployment/choosing_configuring_rds",permalink:"/cumulus/docs/deployment/choosing_configuring_rds",draft:!1,tags:[],version:"v18.3.2",lastUpdatedBy:"Paul Pilone",lastUpdatedAt:1722348174,formattedLastUpdatedAt:"Jul 30, 2024",frontMatter:{id:"choosing_configuring_rds",title:"RDS: Choosing and Configuring Your Database Type",hide_title:!1},sidebar:"docs",previous:{title:"PostgreSQL Database Deployment",permalink:"/cumulus/docs/deployment/postgres_database_deployment"},next:{title:"APIs",permalink:"/cumulus/docs/deployment/apis-introduction"}},d={},c=[{value:"Background",id:"background",level:2},{value:"Provisioned vs. Serverless",id:"provisioned-vs-serverless",level:2},{value:"General Configuration Guidelines",id:"general-configuration-guidelines",level:2},{value:"Cumulus Core Login Configuration",id:"cumulus-core-login-configuration",level:3},{value:"SSL encryption",id:"ssl-encryption",level:4},{value:"Self-Signed Certs",id:"self-signed-certs",level:4},{value:"Recommended Scaling Configuration for Aurora Serverless",id:"recommended-scaling-configuration-for-aurora-serverless",level:2},{value:"Cumulus Serverless RDS Cluster Module",id:"cumulus-serverless-rds-cluster-module",level:3},{value:"Optional: Manage RDS Database with pgAdmin",id:"optional-manage-rds-database-with-pgadmin",level:2},{value:"Setup SSM Port Forwarding",id:"setup-ssm-port-forwarding",level:3}],g={toc:c},p="wrapper";function m(e){var a=e.components,t=(0,r.A)(e,s);return(0,o.yg)(p,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"background"},"Background"),(0,o.yg)("p",null,"Cumulus uses a ",(0,o.yg)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," database as its primary data store\nfor operational and archive records (e.g. collections, granules, etc). The Cumulus\ncore deployment code expects this database to be provided by the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/rds/index.html"},"AWS RDS")," service; however, it is agnostic about the type of the RDS database."),(0,o.yg)("p",null,"RDS databases are broadly divided into two types:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Provisioned"),": Databases with a fixed capacity in terms of CPU and memory capacity. You can find\na list of the available database instance sizes in ",(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html"},"this AWS documentation"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Serverless"),": Databases that can scale their CPU and memory capacity up and down in response to database load. ",(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"},"Amazon Aurora")," is the service which provides serverless RDS databases.")),(0,o.yg)("h2",{id:"provisioned-vs-serverless"},"Provisioned vs. Serverless"),(0,o.yg)("p",null,"Generally speaking, the advantage of provisioned databases is that they ",(0,o.yg)("strong",{parentName:"p"},"don't have to scale"),".\nAs soon as they are deployed, they have the full capacity of your chosen instance size and are\nready for ingest operations. Of course, this advantage is also a downside: if you ever have a\nsudden spike in database traffic, your database ",(0,o.yg)("strong",{parentName:"p"},"can't scale")," to accommodate that increased\nload."),(0,o.yg)("p",null,"On the other hand, serverless databases are designed precisely to ",(0,o.yg)("strong",{parentName:"p"},"scale in response to load"),".\nWhile the ability of serverless databases to scale is quite useful, there can be complexity in\nsetting the scaling configuration to achieve the best results. Recommendations for Aurora serverless database scaling configuration are provided in the section ",(0,o.yg)("a",{parentName:"p",href:"#recommended-scaling-configuration-for-aurora-serverless"},"below"),"."),(0,o.yg)("p",null,"To decide whether a provisioned or a serverless database is appropriate for your ingest\noperations, you should consider the pattern of your data ingests."),(0,o.yg)("p",null,"If you have a fairly steady, continuous rate of data ingest, then a provisioned database\nmay be appropriate because your database capacity needs should be consistent and the lack of\nscaling shouldn't be an issue."),(0,o.yg)("p",null,"If you have occasional, bursty ingests of data where you go from ingesting very little data\nto suddenly ingesting quite a lot then a serverless database may be a better choice because it\nwill be able to handle the spikes in your database load."),(0,o.yg)("h2",{id:"general-configuration-guidelines"},"General Configuration Guidelines"),(0,o.yg)("h3",{id:"cumulus-core-login-configuration"},"Cumulus Core Login Configuration"),(0,o.yg)("p",null,"Cumulus Core uses a ",(0,o.yg)("inlineCode",{parentName:"p"},"admin_db_login_secret_arn")," and (optionally) ",(0,o.yg)("inlineCode",{parentName:"p"},"user_credentials_secret_arn")," as inputs that allow various Cumulus components to act as a database administrator and/or read/write user.   Those secrets should conform to the following format:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "database": "postgres",\n  "dbClusterIdentifier": "clusterName",\n  "engine": "postgres",\n  "host": "xxx",\n  "password": "defaultPassword",\n  "port": 5432,\n  "username": "xxx",\n  "disableSSL": false,\n  "rejectUnauthorized": false,\n}\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"database")," -- the PostgreSQL database used by the configured user"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"dbClusterIdentifier")," -- the value set by the  ",(0,o.yg)("inlineCode",{parentName:"li"},"cluster_identifier")," variable in the terraform module"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"engine")," -- the Aurora/RDS database engine"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"host")," -- the RDS service host for the database in the form (dbClusterIdentifier)-(AWS ID string).(region).rds.amazonaws.com"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"password")," -- the database password"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"username")," -- the account username"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"port")," -- The database connection port, should always be 5432"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"rejectUnauthorized")," -- If disableSSL is not set, set to false to allow self-signed certificates or non-supported CAs.  Defaults to false."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"disableSSL")," - If set to true, disable use of SSL with Core database connections.   Defaults to false.")),(0,o.yg)("h4",{id:"ssl-encryption"},"SSL encryption"),(0,o.yg)("p",null,"Current security policy/best practices require use of a SSL enabled configuration.   Cumulus by default expects a configuration that includes a datastore that requires an SSL connection with a recognized certificate authority (RDS managed databases configured to use SSL will automatically work as AWS provides AWS CA bundles in the Lambda runtime environment).    If deployed in an environment not making use of SSL, set ",(0,o.yg)("inlineCode",{parentName:"p"},"disableSSL")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," to disable this behavior."),(0,o.yg)("h4",{id:"self-signed-certs"},"Self-Signed Certs"),(0,o.yg)("p",null,"Cumulus can accommodate a self-signed/unrecognized cert by setting ",(0,o.yg)("inlineCode",{parentName:"p"},"rejectUnauthorized")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"false")," in the connection secret.  This will result Core allowing use of certs without a valid CA."),(0,o.yg)("h2",{id:"recommended-scaling-configuration-for-aurora-serverless"},"Recommended Scaling Configuration for Aurora Serverless"),(0,o.yg)("p",null,"If you are going to use an Aurora Serverless RDS database, we recommend the following scaling recommendations:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Set the autoscaling timeout to 1 minute (currently the lowest allowed value)"),(0,o.yg)("li",{parentName:"ul"},"Set the database to force capacity change if the autoscaling timeout is reached")),(0,o.yg)("p",null,"The reason for these recommendations requires an understanding of Aurora Serverless scaling.\nAurora Serverless scaling works as described in ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html"},"the Amazon Aurora documentation"),":"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"When it does need to perform a scaling operation, Aurora Serverless v1 first tries to identify a scaling point, a moment when no queries are being processed.")),(0,o.yg)("p",null,'However, during periods of heavy ingest, Cumulus will be continuously writing granules and other\nrecords to the database, so a "scaling point" will never be reached. This is where the\n"autoscaling timeout" setting becomes important. The "autoscaling timeout" is the amount of time\nthat Aurora will wait to find a "scaling point" before giving up.'),(0,o.yg)("p",null,'So with the above recommended settings, we are telling Aurora to only wait for a "scaling point"\nfor 1 minute and that if a "scaling point" cannot be found in that time, then we should\n',(0,o.yg)("strong",{parentName:"p"},"force the database to scale anyway"),". These settings effectively make the Aurora Serverless database scale as quickly as possible in response to increased database load."),(0,o.yg)("p",null,"With forced scaling on databases, there is a consequence that some running queries or transactions\nmay be dropped. However, Cumulus write operations are written with automatic retry logic, so any\nwrite operations that failed due to database scaling should be retried successfully."),(0,o.yg)("h3",{id:"cumulus-serverless-rds-cluster-module"},"Cumulus Serverless RDS Cluster Module"),(0,o.yg)("p",null,"Cumulus provides a Terraform module that will deploy an Aurora Serverless RDS cluster. If you are\nusing this module to create your RDS cluster, you can configure the autoscaling timeout action,\nthe cluster minimum and maximum capacity, and more as seen in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/6f104a89457be453809825ac2b4ac46985239365/tf-modules/cumulus-rds-tf/variables.tf"},"supported variables for the module"),"."),(0,o.yg)("p",null,"Unfortunately, Terraform currently doesn't allow specifying the autoscaling timeout itself, so\nthat value will have to be manually configured in the AWS console or CLI."),(0,o.yg)("h2",{id:"optional-manage-rds-database-with-pgadmin"},"Optional: Manage RDS Database with pgAdmin"),(0,o.yg)("h3",{id:"setup-ssm-port-forwarding"},"Setup SSM Port Forwarding"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"In order to perform this action you will need to deploy it within a VPC and have the credentials to access via NGAP protocols.")),(0,o.yg)("p",null,"For a walkthrough guide on how to utilize AWS's Session Manager for port forwarding to access the Cumulus RDS database go to the ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.earthdata.nasa.gov/display/CUMULUS/Accessing+Cumulus+RDS+database+via+SSM+Port+Forwarding"},"Accessing Cumulus RDS database via SSM Port Forwarding")," article."))}m.isMDXComponent=!0}}]);
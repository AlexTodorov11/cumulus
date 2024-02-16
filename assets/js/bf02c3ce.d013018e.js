"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[62443],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=a(58168),n=a(98587),o=(a(96540),a(15680)),s=["components"],l={id:"backup_and_restore",title:"Cumulus Backup and Restore",hide_title:!1},i=void 0,u={unversionedId:"features/backup_and_restore",id:"version-v9.9.0/features/backup_and_restore",title:"Cumulus Backup and Restore",description:"Deployment Backup and Restore",source:"@site/versioned_docs/version-v9.9.0/features/backup_and_restore.md",sourceDirName:"features",slug:"/features/backup_and_restore",permalink:"/cumulus/docs/v9.9.0/features/backup_and_restore",draft:!1,tags:[],version:"v9.9.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"backup_and_restore",title:"Cumulus Backup and Restore",hide_title:!1},sidebar:"docs",previous:{title:"Queue Granules",permalink:"/cumulus/docs/v9.9.0/workflow_tasks/queue_granules"},next:{title:"Cumulus Metadata in DynamoDB",permalink:"/cumulus/docs/v9.9.0/features/data_in_dynamodb"}},c={},d=[{value:"Deployment Backup and Restore",id:"deployment-backup-and-restore",level:2},{value:"Postgres Database",id:"postgres-database",level:2},{value:"Please note",id:"please-note",level:3},{value:"Backup and Restore",id:"backup-and-restore",level:3},{value:"Re-migration",id:"re-migration",level:4},{value:"Backup and Restore with AWS RDS",id:"backup-and-restore-with-aws-rds",level:4},{value:"Configuring Database Backups",id:"configuring-database-backups",level:5},{value:"Disaster Recovery",id:"disaster-recovery",level:5},{value:"cumulus-rds-tf examples",id:"cumulus-rds-tf-examples",level:5},{value:"<strong>1. Halt all ingest and remove access to the database to prevent Core processes from writing to the old cluster.</strong>",id:"1-halt-all-ingest-and-remove-access-to-the-database-to-prevent-core-processes-from-writing-to-the-old-cluster",level:4},{value:"Halt Ingest",id:"halt-ingest",level:5},{value:"Remove Database Cluster Access",id:"remove-database-cluster-access",level:5},{value:"<strong>2. Using the AWS CLI (see AWS PITR documentation for console instructions), making <em>certain</em> to use the same subnet groups and vpc-security-group IDs from your Core deployment, run the following command:</strong>",id:"2-using-the-aws-cli-see-aws-pitr-documentation-for-console-instructions-making-certain-to-use-the-same-subnet-groups-and-vpc-security-group-ids-from-your-core-deployment-run-the-following-command",level:4},{value:"3. Import cluster into terraform state",id:"3-import-cluster-into-terraform-state",level:4},{value:"4. Update module <code>terraform.tfvars</code> or your rds cluster module such that the cluster_identifier variable matches the <em>new</em> database cluster",id:"4-update-module-terraformtfvars-or-your-rds-cluster-module-such-that-the-cluster_identifier-variable-matches-the-new-database-cluster",level:4},{value:"5. Run a terraform plan.   <strong><em>Be very careful</em></strong> to ensure that the <code>module.rds_cluster.aws_rds_cluster.cumulus</code> resource is not being recreated as this will wipe the postgres database.    You should expect to see the cluster be modified, not replaced, and the rds_login secret <em>version</em> will be replaced, as the host name will change",id:"5-run-a-terraform-plan---be-very-careful-to-ensure-that-the-modulerds_clusteraws_rds_clustercumulus-resource-is-not-being-recreated-as-this-will-wipe-the-postgres-database----you-should-expect-to-see-the-cluster-be-modified-not-replaced-and-the-rds_login-secret-version-will-be-replaced-as-the-host-name-will-change",level:4},{value:"6. Redeploy Cumulus - you shouldn&#39;t need to reconfigure Core, as the secret ARN and the security group should not change, however double-check the configured values are as expected",id:"6-redeploy-cumulus---you-shouldnt-need-to-reconfigure-core-as-the-secret-arn-and-the-security-group-should-not-change-however-double-check-the-configured-values-are-as-expected",level:4},{value:"DynamoDB",id:"dynamodb",level:2},{value:"Backup and Restore with AWS",id:"backup-and-restore-with-aws",level:3},{value:"Enabling PITR during deployment",id:"enabling-pitr-during-deployment",level:3},{value:"Restoring with PITR",id:"restoring-with-pitr",level:3},{value:"Restoring a full deployment",id:"restoring-a-full-deployment",level:4},{value:"Restoring an individual table",id:"restoring-an-individual-table",level:4},{value:"Backup and Restore with cumulus-api CLI",id:"backup-and-restore-with-cumulus-api-cli",level:3},{value:"Backup with the CLI",id:"backup-with-the-cli",level:4},{value:"Restore with the CLI",id:"restore-with-the-cli",level:4},{value:"Data Backup and Restore",id:"data-backup-and-restore",level:2}],p={toc:d},m="wrapper";function h(e){var t=e.components,l=(0,n.A)(e,s);return(0,o.yg)(m,(0,r.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"deployment-backup-and-restore"},"Deployment Backup and Restore"),(0,o.yg)("p",null,"Most of your Cumulus deployment can be recovered by redeploying via Terraform.\nHowever, the Cumulus metadata including providers, collections, granules, rules,\nand executions that are stored in ",(0,o.yg)("a",{parentName:"p",href:"./data_in_dynamodb"},"DynamoDB"),", and\nconcurrently being written to the Core Postgres instance can only be\nrestored if backup was properly configured or enabled. If a deployment is lost,\nlogs and Step Function executions in the AWS console will be irrecoverable."),(0,o.yg)("h2",{id:"postgres-database"},"Postgres Database"),(0,o.yg)("h3",{id:"please-note"},"Please note"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},'Cumulus supports a "bring your own" Postgres instance approach, however\nour reference implementation utilizes a serverless Aurora/RDS database - as\nsuch this reference provides AWS RDS Aurora Serverless backup options.')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Data storage has transitioned from the use of a DynamoDB backed primary database\nto a Postgres instance with a reference Aurora/RDS Postgres\ncompatible module.     In this mode, the primary data records are still being\nwritten to DynamoDB (and replicated to Elastic Search), however replicated\nwrites are being written to the required Postgres instance.  As such, the\nprimary source of recovery should be considered to be a re-migration of data\nfrom the primary database."))),(0,o.yg)("h3",{id:"backup-and-restore"},"Backup and Restore"),(0,o.yg)("h4",{id:"re-migration"},"Re-migration"),(0,o.yg)("p",null,"The Postgres database is not the primary data store - as\nsuch, the simplest recovery approach is to re-deploy your database instance\n(e.g. your RDS cluster) and re-run the database data migration\nmodule to migrate Collections, Providers, etc, from a (possibly recovered\nDynamoDB instance) then begin active migration of Files and Granules records."),(0,o.yg)("p",null,"For larger datastores this approach may not work\ndue to migration time/other limitations.  In that case, utilizing an RDS recovery\napproach in conjunction with the Dynamo to RDS reconciliation tooling\nmay be appropriate."),(0,o.yg)("h4",{id:"backup-and-restore-with-aws-rds"},"Backup and Restore with AWS RDS"),(0,o.yg)("h5",{id:"configuring-database-backups"},"Configuring Database Backups"),(0,o.yg)("p",null,"For AWS RDS Aurora database deployments, AWS provides a host of database\nbackup/integrity options, including ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html"},"PITR (Point In Time\nRecovery)"),"\nbased on automated database backups and replay of transaction logs."),(0,o.yg)("p",null,"For further information on RDS backup procedures, see the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html"},"AWS documentation")),(0,o.yg)("h5",{id:"disaster-recovery"},"Disaster Recovery"),(0,o.yg)("p",null,"To recover a Cumulus Postgres database in a disaster or data-loss scenario, you should perform the following steps:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the Postgres database cluster exists/is still online, halt workflow\nactivity, then take the cluster offline/remove access."),(0,o.yg)("li",{parentName:"ul"},"If needed, recover the DynamoDB tables as noted in the\n",(0,o.yg)("a",{parentName:"li",href:"./backup_and_restore#dynamodb"},"DynamoDb")," section of this document."),(0,o.yg)("li",{parentName:"ul"},"Redeploy a new database cluster from your backup, matching as closely as possible to (but prior to) the DynamoDB restore time.   See ",(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html"},"AWS's PIT recovery\ninstructions"),"\nand ",(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.html"},"DB Snapshot recovery\ninstructions"),",\nor the examples below for more information."),(0,o.yg)("li",{parentName:"ul"},"Configure your Cumulus deployment to utilize the new database cluster and re-deploy."),(0,o.yg)("li",{parentName:"ul"},"Run DynamoDB/RDS reconciliation tools and resolve any discrepancies.")),(0,o.yg)("h5",{id:"cumulus-rds-tf-examples"},"cumulus-rds-tf examples"),(0,o.yg)("p",null,"The following sections provide a walk through of a few recovery scenarios for the provided ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus-rds-tf"),"\nserverless module."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"Point In Time Recovery"))),(0,o.yg)("p",null,"If you need recovery that exceeds the 1-day granularity of AWS's snapshots, you\neither must create and manually manage snapshots, or use Point In Time\nRecovery (PITR) if you still have the original cluster available."),(0,o.yg)("p",null,"Unfortunately as terraform does not yet support RDS PITR (see:\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/terraform-providers/terraform-provider-aws/issues/5286"},"github terraform-provider issue #5286"),"),\nthis requires a manual procedure."),(0,o.yg)("p",null,"If you are using the ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus-rds-tf")," module to deploy an RDS Aurora Serverless\nPostgres cluster, the following procedure can be used to successfully spin up a duplicate\ncluster from backup in recovery scenarios where the database cluster is still viable:"),(0,o.yg)("h4",{id:"1-halt-all-ingest-and-remove-access-to-the-database-to-prevent-core-processes-from-writing-to-the-old-cluster"},(0,o.yg)("strong",{parentName:"h4"},"1. Halt all ingest and remove access to the database to prevent Core processes from writing to the old cluster.")),(0,o.yg)("h5",{id:"halt-ingest"},"Halt Ingest"),(0,o.yg)("p",null,"Deactivate all Cumulus Rules, halt all clients that access the archive API and\nstop any other database accessor processes.   Ensure all active executions have\ncompleted before proceeding."),(0,o.yg)("h5",{id:"remove-database-cluster-access"},"Remove Database Cluster Access"),(0,o.yg)("p",null,"Depending on your database cluster configuration, there are several ways to limit access to the\ndatabase.   One example:"),(0,o.yg)("p",null,"Log in as the administrative user to your database cluster and run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"alter database my_database connection limit 0;\nselect pg_terminate_backend(pg_stat_activity.pid) from pg_stat_activity where pg_stat_activity.datname = 'database';\n")),(0,o.yg)("p",null,"This should block new connections to the Core database from the database user\nand cause database writes to fail."),(0,o.yg)("p",null,"Note that it is possible in the above scenario to remove access to your datastore for your ",(0,o.yg)("em",{parentName:"p"},"administrative user"),".   Use care."),(0,o.yg)("h4",{id:"2-using-the-aws-cli-see-aws-pitr-documentation-for-console-instructions-making-certain-to-use-the-same-subnet-groups-and-vpc-security-group-ids-from-your-core-deployment-run-the-following-command"},(0,o.yg)("strong",{parentName:"h4"},"2. Using the AWS CLI (see ",(0,o.yg)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PIT.html"},"AWS PITR documentation")," for console instructions), making ",(0,o.yg)("em",{parentName:"strong"},"certain")," to use the same subnet groups and vpc-security-group IDs from your Core deployment, run the following command:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'aws rds restore-db-cluster-to-point-in-time --source-db-cluster-identifier "<cluster-needing-restoration>" --restore-to-time "<time>" --vpc-security-group-ids "<security-group-1>" "<security-group-2>" --copy-tags-to-snapshot --db-cluster-identifier "<new-cluster-identifier>" --db-subnet-group-name "<db-subnet-group>"\n')),(0,o.yg)("p",null,"  You can get the configuration vales from the ",(0,o.yg)("a",{parentName:"p",href:"https://console.aws.amazon.com/rds/"},"RDS\nconsole")," ",(0,o.yg)("em",{parentName:"p"},"or")," by running the following\ncommand and parsing the outputs:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"aws rds describe-db-clusters\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"cluster-needing-restoration -- the name of the database cluster you're\nrestoring ",(0,o.yg)("em",{parentName:"p"},"from")," (",(0,o.yg)("inlineCode",{parentName:"p"},"DBClusterIdentifier")," from the AWS RDS CLI output)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"time - The time in UTC format (e.g. 2015-03-07T23:45:00Z)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"security-group-# - the security group IDs from your original deployment")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"new-cluster-identifier - The cluster name for the backup replica.   This\n",(0,o.yg)("em",{parentName:"p"},"must")," be different than the original")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"db-subnet-group - The db subnet group created for the original cluster\n(",(0,o.yg)("inlineCode",{parentName:"p"},"DBSubnetGroup")," from the AWS RDS CLI output)"),(0,o.yg)("p",{parentName:"li"},"Once this command is run, you should see the cluster appear in the RDS cluster\nlist with a ",(0,o.yg)("inlineCode",{parentName:"p"},"Creating")," status.  Verify the creating cluster has a configuration similar to the cluster it is replacing.   Once the cluster is online, manually validate\nthat it has the tables/data you expect, then proceed."))),(0,o.yg)("h4",{id:"3-import-cluster-into-terraform-state"},"3. Import cluster into terraform state"),(0,o.yg)("p",null,"Run the following commands to bring the new cluster into the\nterraform state file, where {module_name} is the title you've assigned to the module:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Remove the old cluster from your terraform state:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"terraform state rm module.{module_name}.aws_rds_cluster.cumulus\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add the restored cluster to your terraform state:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"terraform import module.{module_name}.aws_rds_cluster.cumulus <new cluster identifier>\n")),(0,o.yg)("h4",{id:"4-update-module-terraformtfvars-or-your-rds-cluster-module-such-that-the-cluster_identifier-variable-matches-the-new-database-cluster"},"4. Update module ",(0,o.yg)("inlineCode",{parentName:"h4"},"terraform.tfvars")," or your rds cluster module such that the cluster_identifier variable matches the ",(0,o.yg)("em",{parentName:"h4"},"new")," database cluster"),(0,o.yg)("h4",{id:"5-run-a-terraform-plan---be-very-careful-to-ensure-that-the-modulerds_clusteraws_rds_clustercumulus-resource-is-not-being-recreated-as-this-will-wipe-the-postgres-database----you-should-expect-to-see-the-cluster-be-modified-not-replaced-and-the-rds_login-secret-version-will-be-replaced-as-the-host-name-will-change"},"5. Run a terraform plan.   ",(0,o.yg)("strong",{parentName:"h4"},(0,o.yg)("em",{parentName:"strong"},"Be very careful"))," to ensure that the ",(0,o.yg)("inlineCode",{parentName:"h4"},"module.rds_cluster.aws_rds_cluster.cumulus")," resource is not being recreated as this will wipe the postgres database.    You should expect to see the cluster be modified, not replaced, and the rds_login secret ",(0,o.yg)("em",{parentName:"h4"},"version")," will be replaced, as the host name will change"),(0,o.yg)("p",null,"You should expect to see output that looks like the following (with sensitive identifiers removed):"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot of shell output showing module.rds_cluster.aws_rds_cluster.cumulus resource changes",src:a(59380).A,width:"2288",height:"2102"})),(0,o.yg)("p",null,"and"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot of shell output showing module.rds_cluster.aws_secretsmanager_secret_version resource changes",src:a(95427).A,width:"3265",height:"603"})),(0,o.yg)("p",null,"   Once everything looks acceptable, run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,o.yg)("h4",{id:"6-redeploy-cumulus---you-shouldnt-need-to-reconfigure-core-as-the-secret-arn-and-the-security-group-should-not-change-however-double-check-the-configured-values-are-as-expected"},"6. Redeploy Cumulus - you shouldn't need to reconfigure Core, as the secret ARN and the security group should not change, however double-check the configured values are as expected"),(0,o.yg)("p",null,"\xa0","\\\n",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"Snapshot Recovery"))),(0,o.yg)("p",null,"A RDS cluster can be recreated from a manually created snapshot\nor one of your automated backups.   These backups do not require a live cluster,\nand can be used for recovery in case of accidental deletion or full cluster/backup failure. The\nterraform  module supports the variable ",(0,o.yg)("inlineCode",{parentName:"p"},"snapshot identifier")," - this\nvariable, when set, will on cluster creation utilize an existing snapshot to\ncreate a new cluster."),(0,o.yg)("p",null,"To restore a snapshot as a new cluster:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Halt all ingest and remove access to the database to prevent Core processes from\nwriting to the old cluster.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set the ",(0,o.yg)("inlineCode",{parentName:"p"},"snapshot_identifier"),"\nvariable to the snapshot you wish to create, and configure the module like a new\ndeployment, with a unique ",(0,o.yg)("inlineCode",{parentName:"p"},"cluster_identifier"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Deploy the module using ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform apply"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Once deployed, verify the cluster has the expected data, then update Core to\nutilize the new cluster/security groups and redeploy."))),(0,o.yg)("h2",{id:"dynamodb"},"DynamoDB"),(0,o.yg)("h3",{id:"backup-and-restore-with-aws"},"Backup and Restore with AWS"),(0,o.yg)("p",null,"You can enable ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html"},"point-in-time recovery (PITR)")," as well as create an ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html"},"on-demand backup")," for your Amazon DynamoDB tables."),(0,o.yg)("p",null,"PITR provides continuous backups of your DynamoDB table data. PITR can be enabled through your Terraform deployment, the AWS console, or the AWS API. When enabled, DynamoDB maintains continuous backups of your table up to the last 35 days. You can recover a copy of that table to a previous state at any point in time from the moment you enable PITR, up to a maximum of the 35 preceding days. PITR provides continuous backups until you explicitly disable it."),(0,o.yg)("p",null,"On-demand backups allow you to create backups of DynamoDB table data and its settings. You can initiate an on-demand backup at any time with a single click from the AWS Management Console or a single API call. You can restore the backups to a new DynamoDB table in the same AWS Region at any time."),(0,o.yg)("p",null,"PITR gives your DynamoDB tables continuous protection from accidental writes and deletes. With PITR, you do not have to worry about creating, maintaining, or scheduling backups. You enable PITR on your table and your backup is available for restore at any point in time from the moment you enable it, up to a maximum of the 35 preceding days. For example, imagine a test script writing accidentally to a production DynamoDB table. You could recover your table to any point in time within the last 35 days."),(0,o.yg)("p",null,"On-demand backups help with long-term archival requirements for regulatory compliance. On-demand backups give you full-control of managing the lifecycle of your backups, from creating as many backups as you need to retaining these for as long as you need."),(0,o.yg)("h3",{id:"enabling-pitr-during-deployment"},"Enabling PITR during deployment"),(0,o.yg)("p",null,"By default, the Cumulus ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/data-persistence"},"data-persistence module")," enables PITR on the default tables listed in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/data-persistence/variables.tf"},"module's variable defaults")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_point_in_time_tables"),". At the time of writing, that list includes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"AsyncOperationsTable"),(0,o.yg)("li",{parentName:"ul"},"CollectionsTable"),(0,o.yg)("li",{parentName:"ul"},"ExecutionsTable"),(0,o.yg)("li",{parentName:"ul"},"FilesTable"),(0,o.yg)("li",{parentName:"ul"},"GranulesTable"),(0,o.yg)("li",{parentName:"ul"},"PdrsTable"),(0,o.yg)("li",{parentName:"ul"},"ProvidersTable"),(0,o.yg)("li",{parentName:"ul"},"RulesTable")),(0,o.yg)("p",null,"If you wish to change this list, simply update your deployment's ",(0,o.yg)("inlineCode",{parentName:"p"},"data_persistence")," module (",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy/blob/master/data-persistence-tf/main.tf"},"here")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"template-deploy")," repository) to pass the correct list of tables."),(0,o.yg)("h3",{id:"restoring-with-pitr"},"Restoring with PITR"),(0,o.yg)("h4",{id:"restoring-a-full-deployment"},"Restoring a full deployment"),(0,o.yg)("p",null,"If your deployment has been deleted all of your tables with PITR enabled will have had backups created automatically. You can locate these backups in the AWS console in the ",(0,o.yg)("a",{parentName:"p",href:"https://console.aws.amazon.com/dynamodb/home#backups:"},"DynamoDb Backups Page")," or through the CLI by running:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"aws dynamodb list-backups --backup-type SYSTEM\n")),(0,o.yg)("p",null,"You can restore your tables to your AWS account using the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"aws dynamodb restore-table-from-backup --target-table-name <prefix>-CollectionsTable --backup-arn <backup-arn>\n")),(0,o.yg)("p",null,"Where ",(0,o.yg)("inlineCode",{parentName:"p"},"prefix")," matches the ",(0,o.yg)("inlineCode",{parentName:"p"},"prefix")," from your data-persistence deployment. ",(0,o.yg)("inlineCode",{parentName:"p"},"backup-arn")," can be found in the AWS console or by listing the backups using the command above."),(0,o.yg)("p",null,"This will restore your tables to AWS. They will need to be linked to your Terraform deployment. After ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform init")," and ",(0,o.yg)("em",{parentName:"p"},"before")," ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform apply"),", run the following command for each table:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"terraform import module.data_persistence.aws_dynamodb_table.collections_table <prefix>-CollectionsTable\n")),(0,o.yg)("p",null,"replacing ",(0,o.yg)("inlineCode",{parentName:"p"},"collections_table")," with the table identifier in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/data-persistence/dynamo.tf"},"DynamoDB Terraform table definitions"),"."),(0,o.yg)("p",null,"Terraform will now manage these tables as part of the Terraform state. Run ",(0,o.yg)("inlineCode",{parentName:"p"},"terrform apply")," to generate the rest of the ",(0,o.yg)("inlineCode",{parentName:"p"},"data-persistence")," deployment and then follow the instructions to deploy the ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus")," deployment as normal."),(0,o.yg)("p",null,"At this point the data will be in DynamoDB, but not in Elasticsearch, so nothing will be returned on the Operator dashboard or through Operator API calls. To get the data into Elasticsearch, run an ",(0,o.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/#index-from-database"},(0,o.yg)("inlineCode",{parentName:"a"},"index-from-database")," operation")," via the Operator API. The status of this operation can be viewed on the dashboard. When Elasticsearch is switched to the recovery index the data will be visible on the dashboard and available via the Operator API."),(0,o.yg)("h4",{id:"restoring-an-individual-table"},"Restoring an individual table"),(0,o.yg)("p",null,"A table can be restored to a previous state using PITR. This is easily achievable via the AWS Console by visiting the ",(0,o.yg)("inlineCode",{parentName:"p"},"Backups")," tab for the table."),(0,o.yg)("p",null,"A table can only be recovered to a new table name. Following the restoration of the table, the new table must be imported into Terraform."),(0,o.yg)("p",null,"First, remove the old table from the Terraform state:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"terraform state rm module.data_persistence.aws_dynamodb_table.collections_table\n")),(0,o.yg)("p",null,"replacing ",(0,o.yg)("inlineCode",{parentName:"p"},"collections_table")," with the table identifier in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/data-persistence/dynamo.tf"},"DynamoDB Terraform table definitions"),"."),(0,o.yg)("p",null,"Then import the new table into the Terraform state:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"terraform import module.data_persistence.aws_dynamodb_table.collections_table <new-table-name>\n")),(0,o.yg)("p",null,"replacing ",(0,o.yg)("inlineCode",{parentName:"p"},"collections_table")," with the table identifier in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/data-persistence/dynamo.tf"},"DynamoDB Terraform table definitions"),"."),(0,o.yg)("p",null,"Your ",(0,o.yg)("inlineCode",{parentName:"p"},"data-persistence")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus")," deployments should be redeployed so that your instance of Cumulus uses this new table. After the deployment, your Elasticsearch instance will be out of sync with your new table if there is any change in data. To resync your Elasticsearch with your database run an ",(0,o.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/#index-from-database"},(0,o.yg)("inlineCode",{parentName:"a"},"index-from-database")," operation")," via the Operator API. The status of this operation can be viewed on the dashboard. When Elasticsearch is switched to the new index the DynamoDB tables and Elasticsearch instance will be in sync and the correct data will be reflected on the dashboard."),(0,o.yg)("h3",{id:"backup-and-restore-with-cumulus-api-cli"},"Backup and Restore with cumulus-api CLI"),(0,o.yg)("p",null,"cumulus-api CLI also includes a backup and restore command. The CLI backup command downloads the content of any of your DynamoDB tables to ",(0,o.yg)("inlineCode",{parentName:"p"},".json")," files. You can also use these ",(0,o.yg)("inlineCode",{parentName:"p"},".json")," files to restore the records to another DynamoDB table."),(0,o.yg)("h4",{id:"backup-with-the-cli"},"Backup with the CLI"),(0,o.yg)("p",null,"To backup a table with the CLI, install the ",(0,o.yg)("inlineCode",{parentName:"p"},"@cumulus/api")," package using ",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),", making sure to install the same version as your Cumulus deployment:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g @cumulus/api@version\n")),(0,o.yg)("p",null,"Then run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cumulus-api backup --table <table-name>\n")),(0,o.yg)("p",null,"the backup will be stored at ",(0,o.yg)("inlineCode",{parentName:"p"},"backups/<table-name>.json")),(0,o.yg)("h4",{id:"restore-with-the-cli"},"Restore with the CLI"),(0,o.yg)("p",null,"To restore data from a json file run the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cumulus-api restore backups/<table-name>.json --table <table-name>\n")),(0,o.yg)("p",null,"The restore can go to the in-use table and will update Elasticsearch. If an existing record exists in the table it will not be duplicated but will be updated with the record from the restore file."),(0,o.yg)("h2",{id:"data-backup-and-restore"},"Data Backup and Restore"),(0,o.yg)("p",null,"Cumulus provides no core functionality to backup data stored in S3. Data\ndisaster recovery is being developed in a separate effort\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/podaac/cumulus-disaster-recovery"},"here"),"."))}h.isMDXComponent=!0},59380:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/rds_cluster_update-b1c719eab573fa67b224f3747a23feb1.jpg"},95427:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/secrets_manager_update-42d0d8b5bf5bf8291d4002bb5b9b9772.jpg"}}]);
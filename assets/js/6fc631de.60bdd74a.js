"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[88424],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>g});var a=r(11504);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=s,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(g,n(n({ref:t},c),{},{components:r})):a.createElement(g,n({ref:t},c))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,n=new Array(o);n[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:s,n[1]=l;for(var i=2;i<o;i++)n[i]=r[i];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(45072),s=r(95656),o=(r(11504),r(95788)),n=["components"],l={id:"backup_and_restore",title:"Cumulus Backup and Restore",hide_title:!1},u=void 0,i={unversionedId:"features/backup_and_restore",id:"version-v16.0.0/features/backup_and_restore",title:"Cumulus Backup and Restore",description:"Deployment Backup and Restore",source:"@site/versioned_docs/version-v16.0.0/features/backup_and_restore.md",sourceDirName:"features",slug:"/features/backup_and_restore",permalink:"/cumulus/docs/v16.0.0/features/backup_and_restore",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1689363144,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"backup_and_restore",title:"Cumulus Backup and Restore",hide_title:!1},sidebar:"docs",previous:{title:"Features",permalink:"/cumulus/docs/v16.0.0/category/features"},next:{title:"Dead Letter Queues",permalink:"/cumulus/docs/v16.0.0/features/dead_letter_queues"}},c={},d=[{value:"Deployment Backup and Restore",id:"deployment-backup-and-restore",level:2},{value:"Postgres Database",id:"postgres-database",level:2},{value:"Please note",id:"please-note",level:3},{value:"Backup and Restore",id:"backup-and-restore",level:3},{value:"Backup and Restore with AWS RDS",id:"backup-and-restore-with-aws-rds",level:4},{value:"Configuring Database Backups",id:"configuring-database-backups",level:5},{value:"Disaster Recovery",id:"disaster-recovery",level:5},{value:"cumulus-rds-tf examples",id:"cumulus-rds-tf-examples",level:5},{value:"<strong>1. Halt all ingest and remove access to the database to prevent Core processes from writing to the old cluster.</strong>",id:"1-halt-all-ingest-and-remove-access-to-the-database-to-prevent-core-processes-from-writing-to-the-old-cluster",level:4},{value:"Halt Ingest",id:"halt-ingest",level:5},{value:"Remove Database Cluster Access",id:"remove-database-cluster-access",level:5},{value:"<strong>2. Using the AWS CLI (see AWS PITR documentation for console instructions), making <em>certain</em> to use the same subnet groups and vpc-security-group IDs from your Core deployment, run the following command:</strong>",id:"2-using-the-aws-cli-see-aws-pitr-documentation-for-console-instructions-making-certain-to-use-the-same-subnet-groups-and-vpc-security-group-ids-from-your-core-deployment-run-the-following-command",level:4},{value:"3. Import cluster into terraform state",id:"3-import-cluster-into-terraform-state",level:4},{value:"4. Update module <code>terraform.tfvars</code> or your rds cluster module such that the cluster_identifier variable matches the <em>new</em> database cluster",id:"4-update-module-terraformtfvars-or-your-rds-cluster-module-such-that-the-cluster_identifier-variable-matches-the-new-database-cluster",level:4},{value:"5. Run a terraform plan.   <strong><em>Be very careful</em></strong> to ensure that the <code>module.rds_cluster.aws_rds_cluster.cumulus</code> resource is not being recreated as this will wipe the postgres database.    You should expect to see the cluster be modified, not replaced, and the rds_login secret <em>version</em> will be replaced, as the host name will change",id:"5-run-a-terraform-plan---be-very-careful-to-ensure-that-the-modulerds_clusteraws_rds_clustercumulus-resource-is-not-being-recreated-as-this-will-wipe-the-postgres-database----you-should-expect-to-see-the-cluster-be-modified-not-replaced-and-the-rds_login-secret-version-will-be-replaced-as-the-host-name-will-change",level:4}],p={toc:d},m="wrapper";function g(e){var t=e.components,l=(0,s.c)(e,n);return(0,o.yg)(m,(0,a.c)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"deployment-backup-and-restore"},"Deployment Backup and Restore"),(0,o.yg)("p",null,"Most of your Cumulus deployment can be recovered by redeploying via Terraform.\nThe Cumulus metadata stored in your RDS database, including providers, collections, granules, rules,\nand executions, can only be\nrestored if backup was properly configured or enabled. If a deployment is lost,\nlogs and Step Function executions in the AWS console will be irrecoverable."),(0,o.yg)("h2",{id:"postgres-database"},"Postgres Database"),(0,o.yg)("h3",{id:"please-note"},"Please note"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'Cumulus supports a "bring your own" Postgres instance approach, however\nour reference implementation utilizes a serverless Aurora/RDS database - as\nsuch this reference provides AWS RDS Aurora Serverless backup options.')),(0,o.yg)("h3",{id:"backup-and-restore"},"Backup and Restore"),(0,o.yg)("h4",{id:"backup-and-restore-with-aws-rds"},"Backup and Restore with AWS RDS"),(0,o.yg)("h5",{id:"configuring-database-backups"},"Configuring Database Backups"),(0,o.yg)("p",null,"For AWS RDS Aurora database deployments, AWS provides a host of database\nbackup/integrity options, including ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html"},"PITR (Point In Time\nRecovery)"),"\nbased on automated database backups and replay of transaction logs."),(0,o.yg)("p",null,"For further information on RDS backup procedures, see the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html"},"AWS documentation")),(0,o.yg)("h5",{id:"disaster-recovery"},"Disaster Recovery"),(0,o.yg)("p",null,"To recover a Cumulus Postgres database in a disaster or data-loss scenario, you should perform the following steps:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the Postgres database cluster exists/is still online, halt workflow\nactivity, then take the cluster offline/remove access."),(0,o.yg)("li",{parentName:"ul"},"Redeploy a new database cluster from your backup. See ",(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html"},"AWS's PIT recovery\ninstructions"),"\nand ",(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.html"},"DB Snapshot recovery\ninstructions"),",\nor the examples below for more information."),(0,o.yg)("li",{parentName:"ul"},"Configure your Cumulus deployment to utilize the new database cluster and re-deploy.")),(0,o.yg)("h5",{id:"cumulus-rds-tf-examples"},"cumulus-rds-tf examples"),(0,o.yg)("p",null,"The following sections provide a walk through of a few recovery scenarios for the provided ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus-rds-tf"),"\nserverless module."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"Point In Time Recovery"))),(0,o.yg)("p",null,"If you need recovery that exceeds the 1-day granularity of AWS's snapshots, you\neither must create and manually manage snapshots, or use Point In Time\nRecovery (PITR) if you still have the original cluster available."),(0,o.yg)("p",null,"Unfortunately as terraform does not yet support RDS PITR (see:\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/terraform-providers/terraform-provider-aws/issues/5286"},"github terraform-provider issue #5286"),"),\nthis requires a manual procedure."),(0,o.yg)("p",null,"If you are using the ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus-rds-tf")," module to deploy an RDS Aurora Serverless\nPostgres cluster, the following procedure can be used to successfully spin up a duplicate\ncluster from backup in recovery scenarios where the database cluster is still viable:"),(0,o.yg)("h4",{id:"1-halt-all-ingest-and-remove-access-to-the-database-to-prevent-core-processes-from-writing-to-the-old-cluster"},(0,o.yg)("strong",{parentName:"h4"},"1. Halt all ingest and remove access to the database to prevent Core processes from writing to the old cluster.")),(0,o.yg)("h5",{id:"halt-ingest"},"Halt Ingest"),(0,o.yg)("p",null,"Deactivate all Cumulus Rules, halt all clients that access the archive API and\nstop any other database accessor processes. Ensure all active executions have\ncompleted before proceeding."),(0,o.yg)("h5",{id:"remove-database-cluster-access"},"Remove Database Cluster Access"),(0,o.yg)("p",null,"Depending on your database cluster configuration, there are several ways to limit access to the\ndatabase.   One example:"),(0,o.yg)("p",null,"Log in as the administrative user to your database cluster and run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"alter database my_database connection limit 0;\nselect pg_terminate_backend(pg_stat_activity.pid) from pg_stat_activity where pg_stat_activity.datname = 'database';\n")),(0,o.yg)("p",null,"This should block new connections to the Core database from the database user\nand cause database writes to fail."),(0,o.yg)("p",null,"Note that it is possible in the above scenario to remove access to your datastore for your ",(0,o.yg)("em",{parentName:"p"},"administrative user"),".   Use care."),(0,o.yg)("h4",{id:"2-using-the-aws-cli-see-aws-pitr-documentation-for-console-instructions-making-certain-to-use-the-same-subnet-groups-and-vpc-security-group-ids-from-your-core-deployment-run-the-following-command"},(0,o.yg)("strong",{parentName:"h4"},"2. Using the AWS CLI (see ",(0,o.yg)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PIT.html"},"AWS PITR documentation")," for console instructions), making ",(0,o.yg)("em",{parentName:"strong"},"certain")," to use the same subnet groups and vpc-security-group IDs from your Core deployment, run the following command:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'aws rds restore-db-cluster-to-point-in-time --source-db-cluster-identifier "<cluster-needing-restoration>" --restore-to-time "<time>" --vpc-security-group-ids "<security-group-1>" "<security-group-2>" --copy-tags-to-snapshot --db-cluster-identifier "<new-cluster-identifier>" --db-subnet-group-name "<db-subnet-group>"\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"cluster-needing-restoration -- the name of the database cluster you're\nrestoring ",(0,o.yg)("em",{parentName:"li"},"from")," (",(0,o.yg)("inlineCode",{parentName:"li"},"DBClusterIdentifier")," from the AWS RDS CLI output)"),(0,o.yg)("li",{parentName:"ul"},"time - The time in UTC format (e.g. 2015-03-07T23:45:00Z)"),(0,o.yg)("li",{parentName:"ul"},"security-group-# - the security group IDs from your original deployment"),(0,o.yg)("li",{parentName:"ul"},"new-cluster-identifier - The cluster name for the backup replica.   This\n",(0,o.yg)("em",{parentName:"li"},"must")," be different than the original"),(0,o.yg)("li",{parentName:"ul"},"db-subnet-group - The db subnet group created for the original cluster\n(",(0,o.yg)("inlineCode",{parentName:"li"},"DBSubnetGroup")," from the AWS RDS CLI output)")),(0,o.yg)("p",null,"You can get the configuration values from the ",(0,o.yg)("a",{parentName:"p",href:"https://console.aws.amazon.com/rds/"},"RDS\nconsole")," ",(0,o.yg)("em",{parentName:"p"},"or")," by running the following\ncommand and parsing the outputs:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"aws rds describe-db-clusters\n")),(0,o.yg)("p",null,"Once the restore command is run, you should see the cluster appear in the RDS cluster\nlist with a ",(0,o.yg)("inlineCode",{parentName:"p"},"Creating")," status.  Verify the creating cluster has a configuration similar to the cluster it is replacing.   Once the cluster is online, manually validate\nthat it has the tables/data you expect, then proceed."),(0,o.yg)("h4",{id:"3-import-cluster-into-terraform-state"},"3. Import cluster into terraform state"),(0,o.yg)("p",null,"Run the following commands to bring the new cluster into the\nterraform state file, where {module_name} is the title you've assigned to the module:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Remove the old cluster from your terraform state:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"terraform state rm module.{module_name}.aws_rds_cluster.cumulus\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add the restored cluster to your terraform state:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"terraform import module.{module_name}.aws_rds_cluster.cumulus <new cluster identifier>\n")),(0,o.yg)("h4",{id:"4-update-module-terraformtfvars-or-your-rds-cluster-module-such-that-the-cluster_identifier-variable-matches-the-new-database-cluster"},"4. Update module ",(0,o.yg)("inlineCode",{parentName:"h4"},"terraform.tfvars")," or your rds cluster module such that the cluster_identifier variable matches the ",(0,o.yg)("em",{parentName:"h4"},"new")," database cluster"),(0,o.yg)("h4",{id:"5-run-a-terraform-plan---be-very-careful-to-ensure-that-the-modulerds_clusteraws_rds_clustercumulus-resource-is-not-being-recreated-as-this-will-wipe-the-postgres-database----you-should-expect-to-see-the-cluster-be-modified-not-replaced-and-the-rds_login-secret-version-will-be-replaced-as-the-host-name-will-change"},"5. Run a terraform plan.   ",(0,o.yg)("strong",{parentName:"h4"},(0,o.yg)("em",{parentName:"strong"},"Be very careful"))," to ensure that the ",(0,o.yg)("inlineCode",{parentName:"h4"},"module.rds_cluster.aws_rds_cluster.cumulus")," resource is not being recreated as this will wipe the postgres database.    You should expect to see the cluster be modified, not replaced, and the rds_login secret ",(0,o.yg)("em",{parentName:"h4"},"version")," will be replaced, as the host name will change"),(0,o.yg)("p",null,"You should not need to reconfigure either, as the secret ARN and the security group should not change, however double-check the configured values are as expected."),(0,o.yg)("p",null,"You should expect to see output that looks like the following (with sensitive identifiers removed):"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot of shell output showing module.rds_cluster.aws_rds_cluster.cumulus resource changes",src:r(8125).c,width:"2288",height:"2102"})),(0,o.yg)("p",null,"and"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot of shell output showing module.rds_cluster.aws_secretsmanager_secret_version resource changes",src:r(19760).c,width:"3265",height:"603"})),(0,o.yg)("p",null,"   Once everything looks acceptable, run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"Snapshot Recovery"))),(0,o.yg)("p",null,"A RDS cluster can be recreated from a manually created snapshot\nor one of your automated backups.   These backups do not require a live cluster,\nand can be used for recovery in case of accidental deletion or full cluster/backup failure. The\n",(0,o.yg)("inlineCode",{parentName:"p"},"rds-cluster-tf")," terraform  module supports the variable ",(0,o.yg)("inlineCode",{parentName:"p"},"snapshot_identifier")," - this\nvariable, when set, will on cluster creation utilize an existing snapshot to\ncreate a new cluster."),(0,o.yg)("p",null,"To restore a snapshot as a new cluster:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Halt all ingest and remove access to the database to prevent Core processes from\nwriting to the old cluster.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set the ",(0,o.yg)("inlineCode",{parentName:"p"},"snapshot_identifier"),"\nvariable to the snapshot you wish to create, and configure the module like a new\ndeployment, with a unique ",(0,o.yg)("inlineCode",{parentName:"p"},"cluster_identifier"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Deploy the module using ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform apply"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Once deployed, verify the cluster has the expected data")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Redeploy the data persistence and Cumulus deployments - You should not need to reconfigure either, as the secret ARN and the security group should not change, however double-check the configured values are as expected"))))}g.isMDXComponent=!0},8125:(e,t,r)=>{r.d(t,{c:()=>a});const a=r.p+"assets/images/rds_cluster_update-b1c719eab573fa67b224f3747a23feb1.jpg"},19760:(e,t,r)=>{r.d(t,{c:()=>a});const a=r.p+"assets/images/secrets_manager_update-42d0d8b5bf5bf8291d4002bb5b9b9772.jpg"}}]);
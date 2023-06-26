"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[50472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"terraform-best-practices",title:"Terraform Best Practices",hide_title:!1},s=void 0,p={unversionedId:"deployment/terraform-best-practices",id:"version-v15.0.2/deployment/terraform-best-practices",title:"Terraform Best Practices",description:"How to Manage the Terraform State Bucket",source:"@site/versioned_docs/version-v15.0.2/deployment/terraform-best-practices.md",sourceDirName:"deployment",slug:"/deployment/terraform-best-practices",permalink:"/cumulus/docs/deployment/terraform-best-practices",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"terraform-best-practices",title:"Terraform Best Practices",hide_title:!1},sidebar:"docs",previous:{title:"Creating an S3 Bucket",permalink:"/cumulus/docs/deployment/create_bucket"},next:{title:"Choosing and Configuration Your RDS Database",permalink:"/cumulus/docs/deployment/choosing_configuring_rds"}},u={},c=[{value:"How to Manage the Terraform State Bucket",id:"how-to-manage-the-terraform-state-bucket",level:2},{value:"Enable Bucket Versioning",id:"enable-bucket-versioning",level:3},{value:"How to Recover from a Corrupted State File",id:"how-to-recover-from-a-corrupted-state-file",level:3},{value:"How to Recover from a Deleted State File",id:"how-to-recover-from-a-deleted-state-file",level:3},{value:"Via AWS Management Console",id:"via-aws-management-console",level:4},{value:"Via AWS CLI",id:"via-aws-cli",level:4},{value:"Deny DeleteBucket Action",id:"deny-deletebucket-action",level:3},{value:"Change Resources Only via Terraform",id:"change-resources-only-via-terraform",level:2},{value:"Avoid Changing Connectivity Resources",id:"avoid-changing-connectivity-resources",level:3},{value:"How to Reconcile Differences",id:"how-to-reconcile-differences",level:3},{value:"How to Destroy Everything",id:"how-to-destroy-everything",level:2}],m={toc:c},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-manage-the-terraform-state-bucket"},"How to Manage the Terraform State Bucket"),(0,o.kt)("h3",{id:"enable-bucket-versioning"},"Enable Bucket Versioning"),(0,o.kt)("p",null,"Since the Terraform state file for your Cumulus deployment is stored in S3, in\norder to guard against its corruption or loss, it is ",(0,o.kt)("strong",{parentName:"p"},"strongly recommended"),"\nthat versioning is enabled on the S3 bucket used for persisting your\ndeployment's Terraform state file."),(0,o.kt)("p",null,"To enable bucket versioning, either use the AWS CLI command given in\n",(0,o.kt)("a",{parentName:"p",href:"/cumulus/docs/deployment/#create-resources-for-terraform-state"},"Configuring the Cumulus deployment"),", or the AWS Management Console, as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the S3 service"),(0,o.kt)("li",{parentName:"ol"},"Go to the bucket used for storing Terraform state files"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Properties")," tab"),(0,o.kt)("li",{parentName:"ol"},"If the ",(0,o.kt)("strong",{parentName:"li"},"Versioning")," property is disabled, click ",(0,o.kt)("strong",{parentName:"li"},"Disabled")," to enable it,\nwhich should then show the property as ",(0,o.kt)("strong",{parentName:"li"},"Enabled"),", with a check mark next\nto it.")),(0,o.kt)("h3",{id:"how-to-recover-from-a-corrupted-state-file"},"How to Recover from a Corrupted State File"),(0,o.kt)("p",null,"If your state file appears to be corrupted, or in some invalid state, and the\ncontaining bucket has bucket versioning enabled, you may be able to recover by\n","[restoring a previous version]"," of the state file. There are two primary\napproaches, but the AWS documentation does not provide specific instructions\nfor either one:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Option 1:")," Copy a previous version of the state file into the same bucket"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Option 2:")," Permanently delete the current version of the file (i.e., the\ncorrupted one)")),(0,o.kt)("p",null,"For either approach, when using the ",(0,o.kt)("strong",{parentName:"p"},"AWS Management Console"),", the first steps\nare:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the S3 service"),(0,o.kt)("li",{parentName:"ol"},"Go to the appropriate bucket"),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Overview")," tab for the bucket, click the ",(0,o.kt)("strong",{parentName:"li"},"Show")," button to show\nobject versions"),(0,o.kt)("li",{parentName:"ol"},"Locate your state file")),(0,o.kt)("p",null,"Next, you can proceed to either option:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Option 1"),": To copy a previous version of your state file into the same bucket:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the desired (good) version of the state file that you wish to make\nthe latest version"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Download")," button"),(0,o.kt)("li",{parentName:"ol"},"Choose the location where you wish to save the file"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"IMPORTANT:")," Ensure the file name is identical to the name of the state\nfile in the bucket"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save")),(0,o.kt)("li",{parentName:"ol"},"Now click the ",(0,o.kt)("strong",{parentName:"li"},"Upload")," button"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Add files")," button"),(0,o.kt)("li",{parentName:"ol"},"Choose the file you just downloaded and click ",(0,o.kt)("strong",{parentName:"li"},"Open")),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Next")," button (multiple times), then click the ",(0,o.kt)("strong",{parentName:"li"},"Upload")," button")),(0,o.kt)("p",null,"Once the upload completes, the newly uploaded file (identical to the good\nversion you just downloaded) becomes the ",(0,o.kt)("strong",{parentName:"p"},"latest version")," of the state file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Option 2"),": Alternatively, if you simply wish to delete the latest (corrupted) version\nof the state file:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the latest version of the file (listed at the top)"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Actions")," button and select ",(0,o.kt)("strong",{parentName:"li"},"Delete")),(0,o.kt)("li",{parentName:"ol"},"On the dialog window, click the ",(0,o.kt)("strong",{parentName:"li"},"Delete")," button")),(0,o.kt)("p",null,"At this point, the previous version is now the latest version."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"Note:")," When attempting to delete the latest (corrupt) version of the file,\nyou must ",(0,o.kt)("em",{parentName:"p"},"explicitly")," choose the ",(0,o.kt)("strong",{parentName:"p"},"latest version"),". Otherwise, if you simply\nchoose the file when versions are hidden, deleting it will insert a\n",(0,o.kt)("em",{parentName:"p"},"delete marker")," as the latest version of the file. This means that all prior\nversions still exist, but the file ",(0,o.kt)("em",{parentName:"p"},"appears")," to be deleted. When you ",(0,o.kt)("strong",{parentName:"p"},"Show"),"\nthe versions, you will see all of the previous versions (including the corrupt\none), as well as a ",(0,o.kt)("em",{parentName:"p"},"delete marker")," as the current version.")),(0,o.kt)("h3",{id:"how-to-recover-from-a-deleted-state-file"},"How to Recover from a Deleted State File"),(0,o.kt)("p",null,"If your state file appears to be deleted, but the containing bucket has bucket\nversioning enabled, you ",(0,o.kt)("em",{parentName:"p"},"might")," be able to recover the file. This can occur\nwhen your state file is not ",(0,o.kt)("em",{parentName:"p"},"permanently")," deleted, but rather a ",(0,o.kt)("em",{parentName:"p"},"delete marker"),"\nis the latest version of your file, and thus the file ",(0,o.kt)("em",{parentName:"p"},"appears")," to be deleted."),(0,o.kt)("h4",{id:"via-aws-management-console"},"Via AWS Management Console"),(0,o.kt)("p",null,"To recover your deleted state file via the AWS Management Console, ",(0,o.kt)("strong",{parentName:"p"},"you may\nfollow one of the options detailed in the previous section")," because the\n",(0,o.kt)("em",{parentName:"p"},"delete marker")," is simply considered the latest version of your file, and thus\ncan be treated in the same manner as any other version of your file."),(0,o.kt)("h4",{id:"via-aws-cli"},"Via AWS CLI"),(0,o.kt)("p",null,"To handle this via the ",(0,o.kt)("strong",{parentName:"p"},"AWS CLI")," instead, first obtain the version ID of the\ndelete marker by replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"BUCKET")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"KEY")," as appropriate for the state file\nin question, in the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'aws s3api list-object-versions \\\n  --bucket BUCKET \\\n  --prefix KEY \\\n  --query "DeleteMarkers[?IsLatest].VersionId | [0]"\n')),(0,o.kt)("p",null,"If the output from this command is ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", then there is no delete marker, and\nyou may want to double-check your bucket and key values. If the bucket and key\nvalues are correct, then your state file is either ",(0,o.kt)("em",{parentName:"p"},"not")," marked as deleted or\ndoes not exist at all."),(0,o.kt)("p",null,"Otherwise, you may remove the delete marker so that the state file no longer\nappears deleted. This will restore the previous version of the file and make it\nthe latest version. Run the following command, using the same values for\n",(0,o.kt)("inlineCode",{parentName:"p"},"BUCKET")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"KEY")," as used in the previous command, and replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"VERSION_ID"),"\nwith the value output from the previous command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3api delete-object \\\n  --bucket BUCKET \\\n  --key KEY \\\n  --version-id VERSION_ID\n")),(0,o.kt)("h3",{id:"deny-deletebucket-action"},"Deny DeleteBucket Action"),(0,o.kt)("p",null,"As an additional measure to protect your Terraform state files from accidental\nloss, it is also recommended that you deny all users the ability to delete the\nbucket itself. At a later time, you may remove this protection when you are\nsure you want to delete the bucket."),(0,o.kt)("p",null,"To perform this action via the ",(0,o.kt)("strong",{parentName:"p"},"AWS Management Console"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the S3 service")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the bucket used for storing state files")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Permissions")," tab")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Bucket Policy"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following policy statement to ",(0,o.kt)("em",{parentName:"p"},"deny")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"s3:DeleteBucket")," action for\nall (",(0,o.kt)("inlineCode",{parentName:"p"},'"*"'),") principals, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"BUCKET_NAME")," with the name of the bucket:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Statement": [\n    {\n      "Sid": "DenyDeleteBucket",\n      "Effect": "Deny",\n      "Principal": "*",\n      "Action": "s3:DeleteBucket",\n      "Resource": "arn:aws:s3:::BUCKET_NAME"\n    }\n  ]\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save")))),(0,o.kt)("p",null,"To perform this action via the ",(0,o.kt)("strong",{parentName:"p"},"AWS CLI")," instead, save the JSON shown above\nto a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"policy.json")," and run the following command from the directory\nin which you saved ",(0,o.kt)("inlineCode",{parentName:"p"},"policy.json"),", replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"BUCKET_NAME")," with the name of the\nbucket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3api put-bucket-policy --policy file://policy.json --bucket BUCKET_NAME\n")),(0,o.kt)("p",null,"Afterwards, remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy.json")," file."),(0,o.kt)("h2",{id:"change-resources-only-via-terraform"},"Change Resources Only via Terraform"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All resource changes must be made via Terraform"),", otherwise you risk that\nyour Terraform state file does not correctly represent the state of your\ndeployment resources. Specifically, this means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DO NOT")," change deployment resources via the AWS Management Console"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DO NOT")," change deployment resources via the AWS CLI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DO NOT")," change deployment resources via any of the AWS SDKs")),(0,o.kt)("p",null,"Instead, ",(0,o.kt)("strong",{parentName:"p"},"DO")," change deployment resources ",(0,o.kt)("strong",{parentName:"p"},"only")," via changes to your\nTerraform files (along with subsequent Terraform commands), except where\nspecifically instructed otherwise (such as in the instructions for destroying\na deployment)."),(0,o.kt)("h3",{id:"avoid-changing-connectivity-resources"},"Avoid Changing Connectivity Resources"),(0,o.kt)("p",null,"Keep in mind that changing connectivity resources can affect your ingest\nfunctionality and API availability."),(0,o.kt)("p",null,"Only update connectivity resources such as your VPC, subnets, and security\ngroups through Terraform deployments with S3 bucket versioning enabled. Test\nconnectivity immediately following deployment."),(0,o.kt)("h3",{id:"how-to-reconcile-differences"},"How to Reconcile Differences"),(0,o.kt)("p",null,"If your state file should get out of synch with the true state of your\nresources, there are a number of things you can attempt to reconcile the\ndifferences. However, given that each Cumulus deployment is unique, we can\nprovide only general guidance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consider restoring a previous version of your state file, as described\nin the earlier section about recovering from a corrupted state file"),(0,o.kt)("li",{parentName:"ul"},"If resources exist, but are not listed in your state file, consider using\n",(0,o.kt)("inlineCode",{parentName:"li"},"terraform import")," (see ",(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/import/index.html"},"https://www.terraform.io/docs/import/index.html"),")"),(0,o.kt)("li",{parentName:"ul"},"If resources are missing, but are listed in your state file, run\n",(0,o.kt)("inlineCode",{parentName:"li"},"terraform plan")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform apply"),", both of which automatically run\n",(0,o.kt)("inlineCode",{parentName:"li"},"terraform refresh")," to reconcile state. You may also run ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform refresh"),"\ndirectly.")),(0,o.kt)("h2",{id:"how-to-destroy-everything"},"How to Destroy Everything"),(0,o.kt)("p",null,"If you want to completely remove a deployment, note that there is some\nprotection in place to prevent accidental destruction of your data.  Therefore,\nthere is an additional step required when you truly want to remove your entire\ndeployment. Further, destruction is performed in reverse order of creation."),(0,o.kt)("p",null,"Starting from the root of your deployment repository workspace, perform the\nfollowing commands to first ",(0,o.kt)("strong",{parentName:"p"},"destroy the resources for your ",(0,o.kt)("inlineCode",{parentName:"strong"},"cumulus")," module"),"\ndeployment."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are using Terraform workspaces, be sure to select the relevant\nworkspace first.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tfenv use 0.13.6\ncd cumulus-tf\nterraform init -reconfigure\nterraform destroy\n")),(0,o.kt)("p",null,"The next step is to ",(0,o.kt)("em",{parentName:"p"},"manually")," ",(0,o.kt)("strong",{parentName:"p"},"delete the DynamoDB tables")," related to your\ndeployment. Again, these tables are protected such that they are ",(0,o.kt)("strong",{parentName:"p"},"not"),"\n",(0,o.kt)("em",{parentName:"p"},"automatically")," deleted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform destroy")," command. This is a safety\nmeasure to prevent ",(0,o.kt)("em",{parentName:"p"},"accidental")," removal."),(0,o.kt)("p",null,"However, this does not prevent manual destruction in case you truly do wish to\nremove them. You may do so via either the ",(0,o.kt)("strong",{parentName:"p"},"AWS Management Console")," or the\n",(0,o.kt)("strong",{parentName:"p"},"AWS CLI"),". As an additional precaution, you may want to create a backup for\neach table in your deployment ",(0,o.kt)("em",{parentName:"p"},"before")," you delete them."),(0,o.kt)("p",null,"Then, ",(0,o.kt)("strong",{parentName:"p"},"destroy the resources for your ",(0,o.kt)("inlineCode",{parentName:"strong"},"data-persistence")," module"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../data-persistence-tf\nterraform init -reconfigure\nterraform destroy\n")),(0,o.kt)("p",null,"Destroying your data persistence layer does not destroy any of your RDS resources. Next, ",(0,o.kt)("strong",{parentName:"p"},"destroy your database resources"),"."),(0,o.kt)("p",null,"To teardown the entire cluster, if it was deployed by Terraform, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform destroy")," command to delete your cluster."),(0,o.kt)("p",null,"If using a shared cluster and you just want to destroy the database created by Cumulus for your deployment you must manually delete that individual database. The database is named ",(0,o.kt)("inlineCode",{parentName:"p"},"<prefix>_db"),"."),(0,o.kt)("p",null,"Delete any manual backups you have made that are no longer needed."),(0,o.kt)("p",null,"Finally, since we tag the resources in your deployment, you should see if there\nare any dangling resources left behind for any reason, by running the following\nAWS CLI command, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"PREFIX")," with your deployment prefix name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'aws resourcegroupstaggingapi get-resources \\\n  --query "ResourceTagMappingList[].ResourceARN" \\\n  --tag-filters Key=Deployment,Values=PREFIX\n')),(0,o.kt)("p",null,"Ideally, the output should be an empty list, but if it is not, then you may\nneed to manually delete the listed resources."),(0,o.kt)("p",null,"Configuring the Cumulus deployment: ",(0,o.kt)("a",{parentName:"p",href:"/cumulus/docs/#deploy-the-cumulus-instance"},"link"),"\nRestoring a previous version: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/RestoringPreviousVersions.html"},"link")))}h.isMDXComponent=!0}}]);
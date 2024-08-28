"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[71869],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>d});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),r=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=r(e.components);return t.createElement(u.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=r(n),c=o,d=m["".concat(u,".").concat(c)]||m[c]||g[c]||s;return n?t.createElement(d,i(i({ref:a},p),{},{components:n})):t.createElement(d,i({ref:a},p))}));function d(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=c;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var r=2;r<s;r++)i[r]=n[r];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77170:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var t=n(58168),o=n(98587),s=(n(96540),n(15680)),i=["components"],l={id:"input_output",title:"Workflow Inputs & Outputs",hide_title:!1},u=void 0,r={unversionedId:"workflows/input_output",id:"version-v18.4.0/workflows/input_output",title:"Workflow Inputs & Outputs",description:"General Structure",source:"@site/versioned_docs/version-v18.4.0/workflows/input_output.md",sourceDirName:"workflows",slug:"/workflows/input_output",permalink:"/cumulus/docs/workflows/input_output",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"input_output",title:"Workflow Inputs & Outputs",hide_title:!1},sidebar:"docs",previous:{title:"Workflow Protocol",permalink:"/cumulus/docs/workflows/protocol"},next:{title:"Workflow Triggers",permalink:"/cumulus/docs/workflows/workflow-triggers"}},p={},m=[{value:"General Structure",id:"general-structure",level:2},{value:"Cumulus Message Adapter",id:"cumulus-message-adapter",level:2},{value:"Lambda Layer",id:"lambda-layer",level:3},{value:"Manual Addition",id:"manual-addition",level:3},{value:"CMA Input/Output",id:"cma-inputoutput",level:2},{value:"CMA configuration",id:"cma-configuration",level:2},{value:"ReplaceConfig (Cumulus Remote Message)",id:"replaceconfig-cumulus-remote-message",level:3},{value:"Partial Message",id:"partial-message",level:4},{value:"Full Message",id:"full-message",level:4},{value:"Cumulus Message example",id:"cumulus-message-example",level:4},{value:"Cumulus Remote Message example",id:"cumulus-remote-message-example",level:4},{value:"task_config",id:"task_config",level:3},{value:"Cumulus Message Adapter Steps",id:"cumulus-message-adapter-steps",level:2},{value:"1. Reformat AWS Step Function message into Cumulus Message",id:"1-reformat-aws-step-function-message-into-cumulus-message",level:3},{value:"2. Resolve Remote Messages",id:"2-resolve-remote-messages",level:3},{value:"3. Resolve URL templates in the task configuration",id:"3-resolve-url-templates-in-the-task-configuration",level:3},{value:"4. Resolve task input",id:"4-resolve-task-input",level:3},{value:"5. Resolve task output",id:"5-resolve-task-output",level:3},{value:"6. Apply Remote Message Configuration",id:"6-apply-remote-message-configuration",level:3},{value:"Additional features",id:"additional-features",level:2},{value:"Validate task input, output and configuration messages against the schemas provided",id:"validate-task-input-output-and-configuration-messages-against-the-schemas-provided",level:3}],g={toc:m},c="wrapper";function d(e){var a=e.components,n=(0,o.A)(e,i);return(0,s.yg)(c,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"general-structure"},"General Structure"),(0,s.yg)("p",null,"Cumulus uses a common format for all inputs and outputs to workflows. The same format is used for input and output from workflow steps. The common format consists of a JSON object which holds all necessary information about the task execution and AWS environment. Tasks return objects identical in format to their input with the exception of a task-specific ",(0,s.yg)("inlineCode",{parentName:"p"},"payload")," field. Tasks may also augment their execution metadata."),(0,s.yg)("h2",{id:"cumulus-message-adapter"},"Cumulus Message Adapter"),(0,s.yg)("p",null,"The Cumulus Message Adapter and Cumulus Message Adapter libraries help task developers integrate their tasks into a Cumulus workflow. These libraries adapt input and outputs from tasks into the Cumulus Message format. The Scheduler service creates the initial event message by combining the collection configuration, external resource configuration, workflow configuration, and deployment environment settings.  The subsequent workflow messages between tasks must conform to the message schema. By using the Cumulus Message Adapter, individual task Lambda functions only receive the input and output specifically configured for the task, and not non-task-related message fields."),(0,s.yg)("p",null,"The Cumulus Message Adapter libraries are called by the tasks with a callback function containing the business logic of the task as a parameter. They first adapt the incoming message to a format more easily consumable by Cumulus tasks, then invoke the task, and then adapt the task response back to the Cumulus message protocol to be sent to the next task."),(0,s.yg)("p",null,"A task's Lambda function can be configured to include a Cumulus Message Adapter library which constructs input/output messages and resolves task configurations.     The CMA can then be included in one of several ways:"),(0,s.yg)("h3",{id:"lambda-layer"},"Lambda Layer"),(0,s.yg)("p",null,"In order to make use of this configuration, a Lambda layer must be uploaded to your account.  Due to platform restrictions, Core cannot currently support sharable public layers, however you can deploy the appropriate version from ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter/releases"},"the release page")," in two ways:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Uploading the CMA release artifact via the AWS ",(0,s.yg)("a",{parentName:"li",href:"https://console.aws.amazon.com/lambda/home?region=us-east-1#/layers"},"Layers Interface")),(0,s.yg)("li",{parentName:"ul"},"Using ",(0,s.yg)("a",{parentName:"li",href:"https://www.terraform.io/"},"Terraform")," to deploy the provided CMA module located at ",(0,s.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/cumulus-message-adapter"},"tf-modules/cumulus-message-adapter"),".")),(0,s.yg)("p",null,"Once you've deployed the layer, integrate the CMA layer with your Lambdas:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"If using the ",(0,s.yg)("inlineCode",{parentName:"li"},"cumulus")," module, set the ",(0,s.yg)("inlineCode",{parentName:"li"},"cumulus_message_adapter_lambda_layer_version_arn")," in your ",(0,s.yg)("inlineCode",{parentName:"li"},".tfvars")," file to integrate the CMA layer with all core Cumulus lambdas."),(0,s.yg)("li",{parentName:"ul"},"If including your own Lambda or ECS task Terraform modules, specify the CMA layer ARN in the Terraform resource definitions.  Also, make sure to set the ",(0,s.yg)("inlineCode",{parentName:"li"},"CUMULUS_MESSAGE_ADAPTER_DIR")," environment variable for the task to ",(0,s.yg)("inlineCode",{parentName:"li"},"/opt")," for the CMA integration to work properly.")),(0,s.yg)("p",null,"In the future if you wish to update/change the CMA version you will need to update the deployed CMA, and update the layer configuration for the impacted Lambdas as needed."),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"Updating/removing a layer does not change a deployed Lambda, so to update the CMA you should deploy a new version of the CMA layer, update the associated Lambda configuration to reference the new CMA version, and re-deploy your Lambdas.")),(0,s.yg)("h3",{id:"manual-addition"},"Manual Addition"),(0,s.yg)("p",null,"You can include the CMA package in the Lambda code in the ",(0,s.yg)("inlineCode",{parentName:"p"},"cumulus-message-adapter")," sub-directory in your lambda ",(0,s.yg)("inlineCode",{parentName:"p"},".zip"),", for any Lambda runtime that includes a ",(0,s.yg)("inlineCode",{parentName:"p"},"python")," ",(0,s.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"},"runtime"),".  ",(0,s.yg)("inlineCode",{parentName:"p"},"python 2")," is included in Lambda runtimes that use ",(0,s.yg)("inlineCode",{parentName:"p"},"Amazon Linux"),", however ",(0,s.yg)("inlineCode",{parentName:"p"},"Amazon Linux 2")," will not support this directly."),(0,s.yg)("admonition",{title:"python runtime",type:"note"},(0,s.yg)("p",{parentName:"admonition"},"It is expected that upcoming Cumulus releases will update the CMA layer to include a python runtime.")),(0,s.yg)("p",null,"If you are manually adding the message adapter to your source and utilizing the CMA, you should set the Lambda's ",(0,s.yg)("inlineCode",{parentName:"p"},"CUMULUS_MESSAGE_ADAPTER_DIR")," environment variable to target the installation path for the CMA."),(0,s.yg)("h2",{id:"cma-inputoutput"},"CMA Input/Output"),(0,s.yg)("p",null,"Input to the task application code is a json object with keys:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"input"),": By default, the incoming payload is the payload output from the previous task, or it can be a portion of the payload as configured for the task in the corresponding ",(0,s.yg)("inlineCode",{parentName:"li"},".tf")," workflow definition file."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"config"),": Task-specific configuration object with URL templates resolved.")),(0,s.yg)("p",null,"Output from the task application code is returned in and placed in the ",(0,s.yg)("inlineCode",{parentName:"p"},"payload")," key by default, but the ",(0,s.yg)("inlineCode",{parentName:"p"},"config")," key can also be used to return just a portion of the task output."),(0,s.yg)("h2",{id:"cma-configuration"},"CMA configuration"),(0,s.yg)("p",null,"As of Cumulus > 1.15 and CMA > v1.1.1, configuration of the CMA is expected to be driven by AWS Step Function Parameters."),(0,s.yg)("p",null,"Using the CMA package with the Lambda by any of the above mentioned methods (Lambda Layers, manual) requires configuration for its various features via a specific Step Function Parameters configuration format (see sample workflows in the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/example/cumulus-tf"},"examples cumulus-tf source")," for more examples):"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "cma": {\n    "event.$": "$",\n    "ReplaceConfig": "{some config}",\n    "task_config": "{some config}"\n  }\n}\n')),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},'"event.$": "$"')," parameter is ",(0,s.yg)("em",{parentName:"p"},"required")," as it passes the entire incoming message to the CMA client library for parsing, and the CMA itself to convert the incoming message into a Cumulus message for use in the function."),(0,s.yg)("p",null,"The following are the CMA's current configuration settings:"),(0,s.yg)("h3",{id:"replaceconfig-cumulus-remote-message"},"ReplaceConfig (Cumulus Remote Message)"),(0,s.yg)("p",null,"Because of the potential size of a Cumulus message, mainly the ",(0,s.yg)("inlineCode",{parentName:"p"},"payload")," field, a task can be set via configuration to store a portion of its output on S3 with a message key ",(0,s.yg)("inlineCode",{parentName:"p"},"Remote Message")," that defines how to retrieve it and an empty JSON object ",(0,s.yg)("inlineCode",{parentName:"p"},"{}")," in its place.   If the portion of the message targeted exceeds the configured ",(0,s.yg)("inlineCode",{parentName:"p"},"MaxSize")," (defaults to 0 bytes) it will be written to S3."),(0,s.yg)("p",null,"The CMA remote message functionality can be configured using parameters in several ways:"),(0,s.yg)("h4",{id:"partial-message"},"Partial Message"),(0,s.yg)("p",null,"Setting the ",(0,s.yg)("inlineCode",{parentName:"p"},"Path"),"/",(0,s.yg)("inlineCode",{parentName:"p"},"Target")," path in the ",(0,s.yg)("inlineCode",{parentName:"p"},"ReplaceConfig")," parameter (and optionally a non-default ",(0,s.yg)("inlineCode",{parentName:"p"},"MaxSize"),")"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "DiscoverGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "ReplaceConfig": {\n          "MaxSize": 1,\n          "Path": "$.payload",\n          "TargetPath": "$.payload"\n        }\n      }\n    }\n  }\n}\n')),(0,s.yg)("p",null,"will result in any ",(0,s.yg)("inlineCode",{parentName:"p"},"payload")," output larger than the ",(0,s.yg)("inlineCode",{parentName:"p"},"MaxSize")," (in bytes) to be written to S3.  The CMA will then mark that the key has been replaced via a ",(0,s.yg)("inlineCode",{parentName:"p"},"replace")," key on the event. When the CMA picks up the ",(0,s.yg)("inlineCode",{parentName:"p"},"replace")," key in future steps, it will attempt to retrieve the output from S3 and write it back to ",(0,s.yg)("inlineCode",{parentName:"p"},"payload"),"."),(0,s.yg)("p",null,"Note that you can optionally use a different ",(0,s.yg)("inlineCode",{parentName:"p"},"TargetPath")," than ",(0,s.yg)("inlineCode",{parentName:"p"},"Path"),", however as the target is a JSON path there must be a key to target for replacement in the output of that step.    Also note that the JSON path specified must target ",(0,s.yg)("em",{parentName:"p"},"one")," node, otherwise the CMA will error, as it does not support multiple replacement targets."),(0,s.yg)("p",null,"If ",(0,s.yg)("inlineCode",{parentName:"p"},"TargetPath")," is omitted, it will default to the value for ",(0,s.yg)("inlineCode",{parentName:"p"},"Path"),"."),(0,s.yg)("h4",{id:"full-message"},"Full Message"),(0,s.yg)("p",null,"Setting the following parameters for a lambda:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"DiscoverGranules:\n  Parameters:\n    cma:\n      event.$: '$'\n      ReplaceConfig:\n        FullMessage: true\n")),(0,s.yg)("p",null,"will result in the CMA assuming the entire inbound message should be stored to S3 if it exceeds the default max size."),(0,s.yg)("p",null,"This is effectively the same as doing:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "DiscoverGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "ReplaceConfig": {\n          "MaxSize": 0,\n          "Path": "$",\n          "TargetPath": "$"\n        }\n      }\n    }\n  }\n}\n')),(0,s.yg)("h4",{id:"cumulus-message-example"},"Cumulus Message example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "task_config": {\n    "inlinestr": "prefix{meta.foo}suffix",\n    "array": "{[$.meta.foo]}",\n    "object": "{$.meta}"\n  },\n  "cumulus_meta": {\n    "message_source": "sfn",\n    "state_machine": "arn:aws:states:us-east-1:1234:stateMachine:MySfn",\n    "execution_name": "MyExecution__id-1234",\n    "id": "id-1234"\n  },\n  "meta": {\n    "foo": "bar"\n  },\n  "payload": {\n    "anykey": "anyvalue"\n  }\n}\n')),(0,s.yg)("h4",{id:"cumulus-remote-message-example"},"Cumulus Remote Message example"),(0,s.yg)("p",null,"The message may contain a reference to an S3 Bucket, Key and TargetPath as follows:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "replace": {\n    "Bucket": "cumulus-bucket",\n    "Key": "my-large-event.json",\n    "TargetPath": "$"\n  },\n  "cumulus_meta": {}\n}\n')),(0,s.yg)("h3",{id:"task_config"},"task_config"),(0,s.yg)("p",null,"This configuration key contains the input/output configuration values for definition of inputs/outputs via URL paths.\n",(0,s.yg)("strong",{parentName:"p"},"Important"),":  These values are all relative to json object configured for ",(0,s.yg)("inlineCode",{parentName:"p"},"event.$"),"."),(0,s.yg)("p",null,"This configuration's behavior is outlined in the CMA step description ",(0,s.yg)("a",{parentName:"p",href:"#cumulus-message-adapter-steps"},"below"),"."),(0,s.yg)("p",null,"The configuration should follow the format:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "FunctionName": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "other_cma_configuration": "<config object>",\n        "task_config": "<task config>"\n      }\n    }\n  }\n}\n\n')),(0,s.yg)("p",null,"Example:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "StepFunction": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "task_config": {\n          "sfnEnd": true,\n          "stack": "{$.meta.stack}",\n          "bucket": "{$.meta.buckets.internal.name}",\n          "stateMachine": "{$.cumulus_meta.state_machine}",\n          "executionName": "{$.cumulus_meta.execution_name}",\n          "cumulus_message": {\n            "input": "{$}"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,s.yg)("h2",{id:"cumulus-message-adapter-steps"},"Cumulus Message Adapter Steps"),(0,s.yg)("h3",{id:"1-reformat-aws-step-function-message-into-cumulus-message"},"1. Reformat AWS Step Function message into Cumulus Message"),(0,s.yg)("p",null,"Due to the way AWS handles Parameterized messages, when Parameters are used the CMA takes an inbound message:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": "arn:aws:lambda:us-east-1:<lambda arn values>",\n  "input": {\n    "Other Parameter": {},\n    "cma": {\n      "ConfigKey": {\n        "config values": "some config values"\n      },\n      "event": {\n        "cumulus_meta": {},\n        "payload": {},\n        "meta": {},\n        "exception": {}\n      }\n    }\n  }\n}\n')),(0,s.yg)("p",null,"and takes the following actions:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Takes the object at ",(0,s.yg)("inlineCode",{parentName:"li"},"input.cma.event")," and makes it the full input"),(0,s.yg)("li",{parentName:"ul"},"Merges all of the keys except ",(0,s.yg)("inlineCode",{parentName:"li"},"event")," under ",(0,s.yg)("inlineCode",{parentName:"li"},"input.cma")," into the parent input object")),(0,s.yg)("p",null,"This results in the incoming message (presumably a Cumulus message) with any cma configuration parameters merged in being passed to the CMA.    ",(0,s.yg)("em",{parentName:"p"},"All other parameterized values defined outside of the ",(0,s.yg)("inlineCode",{parentName:"em"},"cma")," key are ignored")),(0,s.yg)("h3",{id:"2-resolve-remote-messages"},"2. Resolve Remote Messages"),(0,s.yg)("p",null,"If the incoming Cumulus message has a ",(0,s.yg)("inlineCode",{parentName:"p"},"replace")," key value, the CMA will attempt to pull the payload from S3,"),(0,s.yg)("p",null,"For example, if the incoming contains the following:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'  "meta": {\n    "foo": {}\n  },\n  "replace": {\n    "TargetPath": "$.meta.foo",\n    "Bucket": "some_bucket",\n    "Key": "events/some-event-id"\n  }\n')),(0,s.yg)("p",null,"The CMA will attempt to pull the file stored at ",(0,s.yg)("inlineCode",{parentName:"p"},"Bucket"),"/",(0,s.yg)("inlineCode",{parentName:"p"},"Key")," and replace the value at ",(0,s.yg)("inlineCode",{parentName:"p"},"TargetPath"),", then remove the ",(0,s.yg)("inlineCode",{parentName:"p"},"replace")," object entirely and continue."),(0,s.yg)("h3",{id:"3-resolve-url-templates-in-the-task-configuration"},"3. Resolve URL templates in the task configuration"),(0,s.yg)("p",null,"In the workflow configuration (defined under the ",(0,s.yg)("inlineCode",{parentName:"p"},"task_config")," key), each task has its own configuration, and it can use URL template as a value to achieve simplicity or for values only available at execution time. The Cumulus Message Adapter resolves the URL templates (relative to the event configuration key) and then passes message to next task. For example, given a task which has the following configuration:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Parameters": {\n    "cma": {\n      "event.$": "$",\n      "task_config": {\n        "provider": "{$.meta.provider}",\n        "inlinestr": "prefix{meta.foo}suffix",\n        "array": "{[$.meta.foo]}",\n        "object": "{$.meta}"\n      }\n    }\n  }\n}\n')),(0,s.yg)("p",null,(0,s.yg)("em",{parentName:"p"},"and")," and incoming message that contains:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "meta": {\n    "foo": "bar",\n    "provider": {\n      "id": "FOO_DAAC",\n      "anykey": "anyvalue"\n    }\n  }\n}\n')),(0,s.yg)("p",null,"The corresponding Cumulus Message would contain:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'"meta": {\n  "foo": "bar",\n  "provider": {\n    "id": "FOO_DAAC",\n    "anykey": "anyvalue"\n  }\n},\n"task_config": {\n  "provider": "{$.meta.provider}",\n  "inlinestr": "prefix{meta.foo}suffix",\n  "array": "{[$.meta.foo]}",\n  "object": "{$.meta}"\n}\n')),(0,s.yg)("p",null,"The message sent to the task would be:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'"config" : {\n  "provider": {\n    "id": "FOO_DAAC",\n    "anykey": "anyvalue"\n  },\n  "inlinestr": "prefixbarsuffix",\n  "array": ["bar"],\n  "object": {\n    "foo": "bar",\n    "provider": {\n      "id": "FOO_DAAC",\n      "anykey": "anyvalue"\n      }\n  },\n},\n"input": "{...}"\n')),(0,s.yg)("p",null,"URL template variables replace dotted paths inside curly brackets with their corresponding value. If the Cumulus Message Adapter cannot resolve a value, it will ignore the template, leaving it verbatim in the string.  While seemingly complex, this allows significant decoupling of Tasks from one another and the data that drives them. Tasks are able to easily receive runtime configuration produced by previously run tasks and domain data."),(0,s.yg)("h3",{id:"4-resolve-task-input"},"4. Resolve task input"),(0,s.yg)("p",null,"By default, the incoming payload is the payload from the previous task.  The task can also be configured to use a portion of the payload its input message.  For example, given a task specifies ",(0,s.yg)("inlineCode",{parentName:"p"},"cma.task_config.cumulus_message.input"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"    ExampleTask:\n      Parameters:\n        cma:\n          event.$: '$'\n          task_config:\n            cumulus_message:\n                input: '{$.payload.foo}'\n")),(0,s.yg)("p",null,"The task configuration in the message would be:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'    {\n      "task_config": {\n        "cumulus_message": {\n          "input": "{$.payload.foo}"\n        }\n      },\n      "payload": {\n        "foo": {\n          "anykey": "anyvalue"\n        }\n      }\n    }\n')),(0,s.yg)("p",null,"The Cumulus Message Adapter will resolve the task input, instead of sending the whole ",(0,s.yg)("inlineCode",{parentName:"p"},"payload")," as task input, the task input would be:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'    {\n      "input" : {\n        "anykey": "anyvalue"\n      },\n      "config": {...}\n    }\n')),(0,s.yg)("h3",{id:"5-resolve-task-output"},"5. Resolve task output"),(0,s.yg)("p",null,"By default, the task's return value is the next payload.  However, the workflow task configuration can specify a portion of the return value as the next payload, and can also augment values to other fields. Based on the task configuration under ",(0,s.yg)("inlineCode",{parentName:"p"},"cma.task_config.cumulus_message.outputs"),", the Message Adapter uses a task's return value to output a message as configured by the task-specific config defined under ",(0,s.yg)("inlineCode",{parentName:"p"},"cma.task_config"),'. The Message Adapter dispatches a "source" to a "destination" as defined by URL templates stored in the task-specific ',(0,s.yg)("inlineCode",{parentName:"p"},"cumulus_message.outputs"),'. The value of the task\'s return value at the "source" URL is used to create or replace the value of the task\'s return value at the "destination" URL. For example, given a task specifies cumulus_message.output in its workflow configuration as follows:'),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "ExampleTask": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "task_config": {\n          "cumulus_message": {\n            "outputs": [\n              {\n                "source": "{$}",\n                "destination": "{$.payload}"\n              },\n              {\n                "source": "{$.output.anykey}",\n                "destination": "{$.meta.baz}"\n              }\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,s.yg)("p",null,"The corresponding Cumulus Message would be:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'    {\n      "task_config": {\n        "cumulus_message": {\n          "outputs": [\n            {\n              "source": "{$}",\n              "destination": "{$.payload}"\n            },\n            {\n              "source": "{$.output.anykey}",\n              "destination": "{$.meta.baz}"\n            }\n          ]\n        }\n      },\n      "meta": {\n        "foo": "bar"\n      },\n      "payload": {\n        "anykey": "anyvalue"\n      }\n    }\n')),(0,s.yg)("p",null,"Given the response from the task is:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'    {\n      "output": {\n          "anykey": "boo"\n      }\n    }\n')),(0,s.yg)("p",null,"The Cumulus Message Adapter would output the following Cumulus Message:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'    {\n      "task_config": {\n          "cumulus_message": {\n            "outputs": [\n              {\n                "source": "{$}",\n                "destination": "{$.payload}"\n              },\n              {\n                "source": "{$.output.anykey}",\n                "destination": "{$.meta.baz}"\n              }\n            ]\n          }\n      },\n      "meta": {\n        "foo": "bar",\n        "baz": "boo"\n      },\n      "payload": {\n        "output": {\n          "anykey": "boo"\n        }\n      }\n    }\n')),(0,s.yg)("h3",{id:"6-apply-remote-message-configuration"},"6. Apply Remote Message Configuration"),(0,s.yg)("p",null,"If the ",(0,s.yg)("inlineCode",{parentName:"p"},"ReplaceConfig")," configuration parameter is defined, the CMA will evaluate the configuration options provided, and if required write a portion of the Cumulus Message to S3, and add a ",(0,s.yg)("inlineCode",{parentName:"p"},"replace")," key to the message for future steps to utilize."),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"The non user-modifiable field ",(0,s.yg)("inlineCode",{parentName:"p"},"cumulus-meta")," will always be retained, regardless of the configuration.")),(0,s.yg)("p",null,"For example, if the output message (post output configuration) from a cumulus message looks like:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'    {\n      "cumulus_meta": {\n        "some_key": "some_value"\n      },\n      "ReplaceConfig": {\n        "FullMessage": true\n      },\n      "task_config": {\n        "cumulus_message": {\n          "outputs": [\n            {\n              "source": "{$}",\n              "destination": "{$.payload}"\n            },\n            {\n              "source": "{$.output.anykey}",\n              "destination": "{$.meta.baz}"\n            }\n          ]\n        }\n      },\n      "meta": {\n        "foo": "bar",\n        "baz": "boo"\n      },\n      "payload": {\n        "output": {\n          "anykey": "boo"\n        }\n      }\n    }\n')),(0,s.yg)("p",null,"the resultant output would look like:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "cumulus_meta": {\n    "some_key": "some_value"\n  },\n  "replace": {\n    "TargetPath": "$",\n    "Bucket": "some-internal-bucket",\n    "Key": "events/some-event-id"\n  }\n}\n')),(0,s.yg)("h2",{id:"additional-features"},"Additional features"),(0,s.yg)("h3",{id:"validate-task-input-output-and-configuration-messages-against-the-schemas-provided"},"Validate task input, output and configuration messages against the schemas provided"),(0,s.yg)("p",null,"The Cumulus Message Adapter has the capability to validate task input, output and configuration messages against their schemas.  The default location of the schemas is the schemas folder in the top level of the task and the default filenames are ",(0,s.yg)("inlineCode",{parentName:"p"},"input.json"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"output.json"),", and ",(0,s.yg)("inlineCode",{parentName:"p"},"config.json"),". The task can also configure a different schema location.  If no schema can be found, the Cumulus Message Adapter will not validate the messages."))}d.isMDXComponent=!0}}]);
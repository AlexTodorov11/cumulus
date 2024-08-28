"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[70763],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(58168),o=n(98587),r=(n(96540),n(15680)),s=["components"],i={id:"docker",title:"Dockerizing Data Processing",hide_title:!1},l=void 0,c={unversionedId:"workflows/docker",id:"version-v18.4.0/workflows/docker",title:"Dockerizing Data Processing",description:"The software used for processing data amongst DAAC's is developed in a variety of languages, and with different sets of dependencies and build environments. To standardize processing, Docker allows us to provide an environment (called an image) to meet the needs of any processing software, while running on the kernel of the host server (in this case, an EC2 instance). This lightweight virtualization does not carry the overhead of any additional VM, providing near-instant startup and the ability to run any dockerized process as a command-line call.",source:"@site/versioned_docs/version-v18.4.0/workflows/docker.md",sourceDirName:"workflows",slug:"/workflows/docker",permalink:"/cumulus/docs/workflows/docker",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"docker",title:"Dockerizing Data Processing",hide_title:!1},sidebar:"docs",previous:{title:"Develop Lambda Functions",permalink:"/cumulus/docs/workflows/lambda"},next:{title:"Workflow Configuration How To's",permalink:"/cumulus/docs/workflows/workflow-configuration-how-to"}},d={},u=[{value:"Using Docker",id:"using-docker",level:2},{value:"The Docker Registry",id:"the-docker-registry",level:3},{value:"Source Control and Versions",id:"source-control-and-versions",level:3},{value:"Docker Images",id:"docker-images",level:2},{value:"docker-base",id:"docker-base",level:3},{value:"docker-data example: docker-hs3-avaps",id:"docker-data-example-docker-hs3-avaps",level:3},{value:"Process Handler",id:"process-handler",level:2},{value:"Py-cumulus",id:"py-cumulus",level:3},{value:"Example process handler",id:"example-process-handler",level:3},{value:"Process Testing",id:"process-testing",level:2}],p={toc:u},g="wrapper";function h(e){var t=e.components,n=(0,o.A)(e,s);return(0,r.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The software used for processing data amongst DAAC's is developed in a variety of languages, and with different sets of dependencies and build environments. To standardize processing, Docker allows us to provide an environment (called an image) to meet the needs of any processing software, while running on the kernel of the host server (in this case, an EC2 instance). This lightweight virtualization does not carry the overhead of any additional VM, providing near-instant startup and the ability to run any dockerized process as a command-line call."),(0,r.yg)("h2",{id:"using-docker"},"Using Docker"),(0,r.yg)("p",null,"Docker images are run using the ",(0,r.yg)("inlineCode",{parentName:"p"},"docker")," command and can be used to build a Docker image from a Dockerfile, fetch an existing image from a remote repository, or run an existing image. In Cumulus, ",(0,r.yg)("inlineCode",{parentName:"p"},"docker compose")," is used to help developers by making it easy to build images locally and test them."),(0,r.yg)("p",null,"To run a command using docker compose use:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose run *command*\n")),(0,r.yg)("p",null,"where ",(0,r.yg)("em",{parentName:"p"},"command")," is one of"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"build"),": Build and tag the image using the Dockerfile"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"bash"),": Run the Dockerfile interactively (via a bash shell)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"test"),": Processes data in the directory ",(0,r.yg)("em",{parentName:"li"},"data/input")," and saves the output to the ",(0,r.yg)("em",{parentName:"li"},"data/test-output")," directory. These directories must exist.")),(0,r.yg)("h3",{id:"the-docker-registry"},"The Docker Registry"),(0,r.yg)("p",null,"Docker images that are built can be stored in the cloud in a Docker registry. Currently we are using the AWS Docker Registry, called ECR. To access these images, you must first log in using your AWS credentials, and use AWS CLI to get the proper login string:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# install awscli\npip install awscli\n\n# login to the AWS Docker registry\naws ecr get-login --region us-east-1 | source /dev/stdin\n")),(0,r.yg)("p",null,"As long as you have permissions to access the NASA Cumulus AWS account, this will allow you to pull images from AWS ECR, and push rebuilt or new images there as well. docker compose may also be used to push images."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose push\n")),(0,r.yg)("p",null,"Which will push the built image to AWS ECR. Note that the image built by docker compose will have is the ",(0,r.yg)("inlineCode",{parentName:"p"},":latest")," tag, and will overwrite the ",(0,r.yg)("inlineCode",{parentName:"p"},":latest")," tagged docker image on the registry.  This file should be updated to push to a different tag if overwriting is not desired."),(0,r.yg)("p",null,"In normal use-cases for most production images on either repository,  CircleCI takes care of this building and deploying process"),(0,r.yg)("h3",{id:"source-control-and-versions"},"Source Control and Versions"),(0,r.yg)("p",null,"All the code necessary for processing a data collection, and the code used to create a Docker image for it, is contained within a single GitHub repository, following the naming convention ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-${dataname}"),", where ",(0,r.yg)("inlineCode",{parentName:"p"},"dataname")," is the collection's short name. The git ",(0,r.yg)("inlineCode",{parentName:"p"},"develop")," branch is the current development version, ",(0,r.yg)("inlineCode",{parentName:"p"},"master")," is the latest release version, and a git tag exists for each tagged version (e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"v0.1.3"),")."),(0,r.yg)("p",null,"Docker images can have multiple tagged versions. The Docker images in the registry follow this same convention. A Docker image tagged as 'develop' is an image of the development branch. 'latest' is the master brach, and thus the latest tagged version, with an additional tagged image for each version tagged in the git repository."),(0,r.yg)("p",null,"The generation of the released tagged images are created and deployed automatically with Circle-CI, the continuous integration system used by Cumulus. When new commits are merged into a branch, the appropriate Docker image is built, tested, and deployed to the Docker registry. More on testing below."),(0,r.yg)("h2",{id:"docker-images"},"Docker Images"),(0,r.yg)("h3",{id:"docker-base"},"docker-base"),(0,r.yg)("p",null,"Docker images are built in layers, allowing common dependencies to be shared to child Docker images. A base docker image is provided that includes some dependencies shared among the current HS3 data processing codes. This includes NetCDF libraries, AWS Cli, Python, Git, as well as py-cumulus, a collection of Python utilities that are used in the processing scripts. The docker-base repository is used to generate new images that are then stored in AWS ECR."),(0,r.yg)("p",null,"The docker-base image can be interacted with by running it in interactive mode (ie, ",(0,r.yg)("inlineCode",{parentName:"p"},"docker run -it docker-base"),', since the default "entrypoint" to the image is a bash shell.'),(0,r.yg)("h3",{id:"docker-data-example-docker-hs3-avaps"},"docker-data example: docker-hs3-avaps"),(0,r.yg)("p",null,"To create a new processing stream for a data collection, a Dockerfile is used to specify what additional dependencies may be required, and to build them in that environment, if necessary. An example Dockerfile is shown here, for the hs3avaps collection."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# cumulus processing Dockerfile: docker-hs3-avaps\n\nFROM 000000000000.dkr.ecr.us-east-1.amazonaws.com/cumulus-base:latest\n\n# copy needed files\nWORKDIR /work\nCOPY . /work\n\nRUN apt-get install -y nco libhdf5-dev\n\n# compile code\nRUN gcc convert/hs3cpl2nc.c -o _convert -I/usr/include/hdf5/serial -L/usr/include/x86_64-linux-gnu -lnetcdf -lhdf5_serial\n\n# input and output directories will be Data Pipeline staging dir env vars\nENTRYPOINT ["/work/process.py"]\nCMD ["input", "output"]\n')),(0,r.yg)("p",null,"When this Dockerfile is built, docker will first use the latest cumulus-base image. It will then copy the entire GitHub repository (the processing required for a single data collection is a repository) to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/work")," directory which will now contain all the code necessary to process this data. In this case, a C file is compiled to convert the supplied hdf5 files to NetCDF files. Note that this also requires installing the system libraries ",(0,r.yg)("inlineCode",{parentName:"p"},"nco")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"libhdf5-dev")," via ",(0,r.yg)("inlineCode",{parentName:"p"},"apt-get"),". Lastly, the Dockerfile sets the entrypoint to the processing handler, so that this command is run when the image is run. It expects two arguments to be handed to it: 'input' and 'output' meaning the input and output directories."),(0,r.yg)("h2",{id:"process-handler"},"Process Handler"),(0,r.yg)("p",null,"All of the processing is managed through a handler, which is called when the docker image is run. Currently, Python is used for the process handler, which provides a simple interface to perform validation, run shell commands, test the output generated, and log the output for us. The handler function takes two arguments: input directory and output directory. Any other needed parameters are set via environment variables. The handler function will process the input directory, and put any output to be saved in the output directory."),(0,r.yg)("h3",{id:"py-cumulus"},"Py-cumulus"),(0,r.yg)("p",null,"The py-cumulus library provides some helper functions that can be used for logging, writing metadata, and testing. Py-cumulus is installed in the docker-base image. Currently, there are three modules:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"import cumulus.logutils\nimport cumulus.metadata\nimport cumulus.process\n")),(0,r.yg)("h3",{id:"example-process-handler"},"Example process handler"),(0,r.yg)("p",null,"An example process handler is given here, in this case a shortened version of the hs3-cpl data collection. The main function at the bottom passes the provided input and output directory arguments to the process() function. The first thing process() does is to get the Cumulus logger. The Cumulus logger will send output to both stdout and Splunk, to be used in the Cumulus pipeline. Log strings are made using the make_log_string() function which properly formats a message to be handled by Splunk."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\n\nimport os\nimport sys\nimport glob\nimport re\nimport datetime\nimport subprocess\nfrom cumulus.logutils import get_logger, make_log_string\nfrom cumulus.metadata import write_metadata\nfrom cumulus.process import check_output\n\n# the main process handler\ndef process(indir, outdir):\n    \"\"\" Process this directory \"\"\"\n    log = get_logger()\n    log.info(\n        make_log_string(process='processing', message=\"Processing %s into %s\" % (indir, outdir))\n    )\n\n    dataname = 'cpl'\n    dataid = os.getenv('SHORT_NAME', 'hs3cpl')\n\n    for f in glob.glob(os.path.join(indir, '*.hdf5')):\n        bname = os.path.basename(f)\n        log.info(\n            make_log_string(granule_id=bname, process='processing', message=\"Processing started for %s\" % bname)\n        )\n\n        # convert file to netcdf\n        cmd = ['/work/_convert', f, outdir]\n        out = subprocess.check_output(cmd)\n        fout = glob.glob(os.path.join(outdir, 'HS3_%s*.nc' % bname[0:7]))\n        fout = '' if len(fout) == 0 else fout[0]\n        check_output(fout)\n        cmd = ['ncatted -h -a Conventions,global,c,c,\"CF-1.6\" %s' % fout]\n        out = subprocess.check_output(cmd, shell=True)\n        log.debug(out)\n\n        # write metadata output\n        write_metadata(fout, dataname=dataname, dataid=dataid, outdir=outdir)\n\n    # remove the generated metadata files\n    for f in glob.glob(os.path.join(outdir, '*.met')):\n        os.remove(f)\n\nif __name__ == \"__main__\":\n    indir = sys.argv[1]\n    outdir = sys.argv[2]\n    process(indir, outdir)\n\n")),(0,r.yg)("p",null,"After setting up logging the code has a for-loop for processing any matching hdf5 in the input directory:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Convert to NetCDF with a C script"),(0,r.yg)("li",{parentName:"ol"},"Validate the output (in this case just check for existence)"),(0,r.yg)("li",{parentName:"ol"},"Use 'ncatted' to update the resulting file to be CF-compliant"),(0,r.yg)("li",{parentName:"ol"},"Write out metadata generated for this file")),(0,r.yg)("h2",{id:"process-testing"},"Process Testing"),(0,r.yg)("p",null,"It is important to have tests for data processing, however in many cases datafiles can be large so it is not practical to store the test data in the repository. Instead, test data is currently stored on AWS S3, and can be retrieved using the AWS CLI."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"aws s3 sync s3://cumulus-ghrc-logs/sample-data/collection-name data\n")),(0,r.yg)("p",null,"Where collection-name is the name of the data collection, such as 'avaps', or 'cpl'.  For example, an abridged version of the data for CPL includes:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-txt"},"\u251c\u2500\u2500 cpl\n\u2502\xa0\xa0 \u251c\u2500\u2500 input\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 HS3_CPL_ATB_12203a_20120906.hdf5\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 HS3_CPL_OP_12203a_20120906.hdf5\n\u2502\xa0\xa0 \u2514\u2500\u2500 output\n\u2502\xa0\xa0     \u251c\u2500\u2500 HS3_CPL_ATB_12203a_20120906.nc\n\u2502\xa0\xa0     \u251c\u2500\u2500 HS3_CPL_ATB_12203a_20120906.nc.meta.xml\n\u2502\xa0\xa0     \u251c\u2500\u2500 HS3_CPL_OP_12203a_20120906.nc\n\u2502\xa0\xa0     \u251c\u2500\u2500 HS3_CPL_OP_12203a_20120906.nc.meta.xml\n")),(0,r.yg)("p",null,"Contained in the input directory are all possible sets of data files, while the output directory is the expected result of processing. In this case the hdf5 files are converted to NetCDF files and XML metadata files are generated."),(0,r.yg)("p",null,"The docker image for a process can be used on the retrieved test data. First create a test-output directory in the newly created data directory."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir data/test-output\n")),(0,r.yg)("p",null,"Then run the docker image using docker compose."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose run test\n")),(0,r.yg)("p",null,"This will process the data in the data/input directory and put the output into data/test-output. Repositories also include Python based tests which will validate this newly created output to the contents of data/output. Use Python's Nose tool to run the included tests."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"nosetests\n")),(0,r.yg)("p",null,"If the data/test-output directory validated against the contents of data/output the tests will be successful, otherwise an error will be reported."))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[474],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),h=r,d=g["".concat(s,".").concat(h)]||g[h]||m[h]||l;return n?t.createElement(d,i(i({ref:a},u),{},{components:n})):t.createElement(d,i({ref:a},u))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86465:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>g});var t=n(58168),r=n(98587),l=(n(96540),n(15680)),i=["components"],o={id:"release"},s="Versioning and Releases",p={unversionedId:"development/release",id:"version-v14.1.0/development/release",title:"Versioning and Releases",description:"Versioning",source:"@site/versioned_docs/version-v14.1.0/development/release.md",sourceDirName:"development",slug:"/development/release",permalink:"/cumulus/docs/v14.1.0/development/release",draft:!1,tags:[],version:"v14.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"release"}},u={},g=[{value:"Versioning",id:"versioning",level:2},{value:"Pre-release testing",id:"pre-release-testing",level:2},{value:"Updating Cumulus version and publishing to NPM",id:"updating-cumulus-version-and-publishing-to-npm",level:2},{value:"1. Create a branch for the new release",id:"1-create-a-branch-for-the-new-release",level:3},{value:"From Master",id:"from-master",level:4},{value:"Backporting",id:"backporting",level:4},{value:"2. Update the Cumulus version number",id:"2-update-the-cumulus-version-number",level:3},{value:"2B. Verify Lerna",id:"2b-verify-lerna",level:4},{value:"3. Check Cumulus Dashboard PRs for Version Bump",id:"3-check-cumulus-dashboard-prs-for-version-bump",level:3},{value:"4. Update CHANGELOG.md",id:"4-update-changelogmd",level:3},{value:"5. Update DATA_MODEL_CHANGELOG.md",id:"5-update-data_model_changelogmd",level:3},{value:"6. Update CONTRIBUTORS.md",id:"6-update-contributorsmd",level:3},{value:"7. Update Cumulus package API documentation",id:"7-update-cumulus-package-api-documentation",level:3},{value:"8. Cut new version of Cumulus Documentation",id:"8-cut-new-version-of-cumulus-documentation",level:3},{value:"9. Create a pull request against the minor version branch",id:"9-create-a-pull-request-against-the-minor-version-branch",level:3},{value:"10. Create a git tag for the release",id:"10-create-a-git-tag-for-the-release",level:3},{value:"11. Publishing the release",id:"11-publishing-the-release",level:3},{value:"Creating a Bamboo branch plan for the release",id:"creating-a-bamboo-branch-plan-for-the-release",level:4},{value:"12. Create a new Cumulus release on github",id:"12-create-a-new-cumulus-release-on-github",level:3},{value:"13. Update Cumulus API document",id:"13-update-cumulus-api-document",level:3},{value:"14. Merge base branch back to master",id:"14-merge-base-branch-back-to-master",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Delete and regenerate the tag",id:"delete-and-regenerate-the-tag",level:3}],m={toc:g},h="wrapper";function d(e){var a=e.components,o=(0,r.A)(e,i);return(0,l.yg)(h,(0,t.A)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"versioning-and-releases"},"Versioning and Releases"),(0,l.yg)("h2",{id:"versioning"},"Versioning"),(0,l.yg)("p",null,"We use a global versioning approach, meaning version numbers in cumulus are consistent across all packages and tasks, and semantic versioning to track major, minor, and patch version (i.e. 1.0.0). We use Lerna to manage our versioning. Any change will force lerna to increment the version of all packages."),(0,l.yg)("p",null,"Read more about the semantic versioning ",(0,l.yg)("a",{parentName:"p",href:"https://docs.npmjs.com/getting-started/semantic-versioning"},"here"),"."),(0,l.yg)("h2",{id:"pre-release-testing"},"Pre-release testing"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Note: This is only necessary when preparing a release for a new major version of Cumulus (e.g. preparing to go from ",(0,l.yg)("inlineCode",{parentName:"p"},"6.x.x")," to ",(0,l.yg)("inlineCode",{parentName:"p"},"7.0.0"),")")),(0,l.yg)("p",null,"Before releasing a new major version of Cumulus, we should test the deployment upgrade path from the latest release of Cumulus to the upcoming release."),(0,l.yg)("p",null,"It is preferable to use the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy"},"cumulus-template-deploy")," repo for testing the deployment, since that repo is the officially recommended deployment configuration for end users."),(0,l.yg)("p",null,"You should create an entirely new deployment for this testing to replicate the end user upgrade path. Using an existing test or CI deployment would not be useful because that deployment may already have been deployed with the latest changes and not match the upgrade path for end users."),(0,l.yg)("p",null,"Pre-release testing steps:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Checkout the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy"},"cumulus-template-deploy")," repo")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Update the deployment code to use the latest release artifacts if it wasn't done already. For example, assuming that the latest release was ",(0,l.yg)("inlineCode",{parentName:"p"},"5.0.1"),", update the deployment files as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},'# in data-persistence-tf/main.tf\nsource = "https://github.com/nasa/cumulus/releases/download/v5.0.1/terraform-aws-cumulus.zip//tf-modules/data-persistence"\n\n# in cumulus-tf/main.tf\nsource = "https://github.com/nasa/cumulus/releases/download/v5.0.1/terraform-aws-cumulus.zip//tf-modules/cumulus"\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"For both the ",(0,l.yg)("inlineCode",{parentName:"p"},"data-persistence-tf")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"cumulus-tf")," modules:"),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},"Add the necessary backend configuration (",(0,l.yg)("inlineCode",{parentName:"li"},"terraform.tf"),") and variables (",(0,l.yg)("inlineCode",{parentName:"li"},"terraform.tfvars"),")",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"You should use an entirely new deployment for this testing, so make sure to use values for ",(0,l.yg)("inlineCode",{parentName:"li"},"key")," in ",(0,l.yg)("inlineCode",{parentName:"li"},"terraform.tf")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"prefix")," in ",(0,l.yg)("inlineCode",{parentName:"li"},"terraform.tfvars")," that don't collide with existing deployments"))),(0,l.yg)("li",{parentName:"ol"},"Run ",(0,l.yg)("inlineCode",{parentName:"li"},"terraform init")),(0,l.yg)("li",{parentName:"ol"},"Run ",(0,l.yg)("inlineCode",{parentName:"li"},"terraform apply")))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Checkout the ",(0,l.yg)("inlineCode",{parentName:"p"},"master")," branch of the ",(0,l.yg)("inlineCode",{parentName:"p"},"cumulus")," repo")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Run a full bootstrap of the code: ",(0,l.yg)("inlineCode",{parentName:"p"},"npm run bootstrap"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Build the pre-release artifacts: ",(0,l.yg)("inlineCode",{parentName:"p"},"./bamboo/create-release-artifacts.sh"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"For both the ",(0,l.yg)("inlineCode",{parentName:"p"},"data-persistence-tf")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"cumulus-tf")," modules:"),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Update the deployment to use the built release artifacts:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},'# in data-persistence-tf/main.tf\nsource = "[path]/cumulus/terraform-aws-cumulus.zip//tf-modules/data-persistence"\n\n# in cumulus-tf/main.tf\nsource = "/Users/mboyd/development/cumulus/terraform-aws-cumulus.zip//tf-modules/cumulus"\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Review the ",(0,l.yg)("inlineCode",{parentName:"p"},"CHANGELOG.md")," for any pre-deployment migration steps. If there are, go through the steps and confirm that they are successful")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Run ",(0,l.yg)("inlineCode",{parentName:"p"},"terraform init"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Run ",(0,l.yg)("inlineCode",{parentName:"p"},"terraform apply"))))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Review the ",(0,l.yg)("inlineCode",{parentName:"p"},"CHANGELOG.md")," for any post-deployment migration steps and confirm that they are successful")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Delete your test deployment by running ",(0,l.yg)("inlineCode",{parentName:"p"},"terraform destroy")," in ",(0,l.yg)("inlineCode",{parentName:"p"},"cumulus-tf")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"data-persistence-tf")))),(0,l.yg)("h2",{id:"updating-cumulus-version-and-publishing-to-npm"},"Updating Cumulus version and publishing to NPM"),(0,l.yg)("h3",{id:"1-create-a-branch-for-the-new-release"},"1. Create a branch for the new release"),(0,l.yg)("h4",{id:"from-master"},"From Master"),(0,l.yg)("p",null,"Create a branch titled ",(0,l.yg)("inlineCode",{parentName:"p"},"release-MAJOR.MINOR.x")," for the release (use a literal x for the patch version)."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"    git checkout -b release-MAJOR.MINOR.x\n\ne.g.:\n    git checkout -b release-9.1.x\n")),(0,l.yg)("p",null,"If creating a new major version release from master, say ",(0,l.yg)("inlineCode",{parentName:"p"},"5.0.0"),", then the branch would be named ",(0,l.yg)("inlineCode",{parentName:"p"},"release-5.0.x"),". If creating a new minor version release from master, say ",(0,l.yg)("inlineCode",{parentName:"p"},"1.14.0")," then the branch would be named ",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.14.x"),"."),(0,l.yg)("p",null,"Having a release branch for each major/minor version allows us to easily backport patches to that version."),(0,l.yg)("p",null,"Push the ",(0,l.yg)("inlineCode",{parentName:"p"},"release-MAJOR.MINOR.x")," branch to GitHub if it was created locally. (Commits should be even with master at this point.)"),(0,l.yg)("p",null,"If creating a patch release, you can check out the existing base branch."),(0,l.yg)("p",null,"Then create the release branch (e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.14.0"),") from the minor version base branch. For example, from the ",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.14.x")," branch:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"git checkout -b release-1.14.0\n")),(0,l.yg)("h4",{id:"backporting"},"Backporting"),(0,l.yg)("p",null,"When creating a backport, a minor version base branch should already exist on GitHub. Check out the existing minor version base branch then create a release branch from it. For example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# check out existing minor version base branch\ngit checkout release-1.14.x\n# pull to ensure you have the latest changes\ngit pull origin release-1.14.x\n# create new release branch for backport\ngit checkout -b release-1.14.1\n# cherry pick the commits (or single squashed commit of changes) relevant to the backport\ngit cherry-pick [replace-with-commit-SHA]\n# push up the changes to the release branch\ngit push\n")),(0,l.yg)("h3",{id:"2-update-the-cumulus-version-number"},"2. Update the Cumulus version number"),(0,l.yg)("p",null,"When changes are ready to be released, the Cumulus version number must be updated."),(0,l.yg)("p",null,"Lerna handles the process of deciding which version number should be used as long as the developer specifies whether the change is a major, minor, or patch change."),(0,l.yg)("p",null,"To update Cumulus's version number run:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm run update\n")),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://static.notion-static.com/13acbe0a-c59d-4c42-90eb-23d4ec65c9db/Screen_Shot_2018-03-15_at_12.21.16_PM.png",alt:"Screenshot of terminal showing interactive prompt from Lerna for selecting the new release version"})),(0,l.yg)("p",null,"Lerna will handle updating the packages and all of the dependent package version numbers. If a dependency has not been changed with the update, however, lerna will not update the version of the dependency."),(0,l.yg)("h4",{id:"2b-verify-lerna"},"2B. Verify Lerna"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Note:")," Lerna can struggle to correctly update the versions on any non-standard/alpha versions (e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"1.17.0-alpha0"),"). Additionally some packages may have been left at the previous version.\nPlease be sure to check any packages that are new or have been manually published since the previous release and any packages that list it as a dependency to ensure the listed versions are correct.\nIt's useful to use the search feature of your code editor or ",(0,l.yg)("inlineCode",{parentName:"p"},"grep")," to see if there any references to the ",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("em",{parentName:"strong"},"old"))," package versions.\nIn bash shell you can run"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'    find . -name package.json -exec grep -nH "@cumulus/.*[0-9]*\\.[0-9]\\.[0-9].*" {} \\; | grep -v "@cumulus/.*MAJOR\\.MINOR\\.PATCH.*"\n\ne.g.:\n    find . -name package.json -exec grep -nH "@cumulus/.*[0-9]*\\.[0-9]\\.[0-9].*" {} \\; | grep -v "@cumulus/.*13\\.1\\.0.*"\n')),(0,l.yg)("p",null,"Verify that no results are returned where MAJOR, MINOR, or PATCH differ from the intended version, and no outdated ",(0,l.yg)("inlineCode",{parentName:"p"},"-alpha")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"-beta")," versions are specified."),(0,l.yg)("h3",{id:"3-check-cumulus-dashboard-prs-for-version-bump"},"3. Check Cumulus Dashboard PRs for Version Bump"),(0,l.yg)("p",null,"There may be unreleased changes in the Cumulus Dashboard ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-dashboard"},"project")," that rely on this unreleased Cumulus Core version."),(0,l.yg)("p",null,'If there is exists a PR in the cumulus-dashboard repo with a name containing: "Version Bump for Next Cumulus API Release":'),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"There will be a placeholder ",(0,l.yg)("inlineCode",{parentName:"li"},"change-me")," value that should be replaced with the Cumulus Core to-be-released-version."),(0,l.yg)("li",{parentName:"ul"},"Mark that PR as ready to be reviewed.")),(0,l.yg)("h3",{id:"4-update-changelogmd"},"4. Update CHANGELOG.md"),(0,l.yg)("p",null,"Update the ",(0,l.yg)("inlineCode",{parentName:"p"},"CHANGELOG.md"),". Put a header under the ",(0,l.yg)("inlineCode",{parentName:"p"},"Unreleased")," section with the new version number and the date."),(0,l.yg)("p",null,'Add a link reference for the github "compare" view at the bottom of the ',(0,l.yg)("inlineCode",{parentName:"p"},"CHANGELOG.md"),", following the existing pattern. This link reference should create a link in the CHANGELOG's release header to changes in the corresponding release."),(0,l.yg)("h3",{id:"5-update-data_model_changelogmd"},"5. Update DATA","_","MODEL","_","CHANGELOG.md"),(0,l.yg)("p",null,"Similar to #4, make sure the DATA","_","MODEL","_","CHANGELOG is updated if there are data model changes in the release, and the link reference at the end of the document is updated as appropriate."),(0,l.yg)("h3",{id:"6-update-contributorsmd"},"6. Update CONTRIBUTORS.md"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/update-contributors.sh\ngit add CONTRIBUTORS.md\n")),(0,l.yg)("p",null,"Commit and push these changes, if any."),(0,l.yg)("h3",{id:"7-update-cumulus-package-api-documentation"},"7. Update Cumulus package API documentation"),(0,l.yg)("p",null,"Update auto-generated API documentation for any Cumulus packages that have it:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm run docs-build-packages\n")),(0,l.yg)("p",null,"Commit and push these changes, if any."),(0,l.yg)("h3",{id:"8-cut-new-version-of-cumulus-documentation"},"8. Cut new version of Cumulus Documentation"),(0,l.yg)("p",null,"Docusaurus v2 uses snapshot approach for ",(0,l.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/versioning"},"documentation versioning"),". Every versioned docs\ndoes not depends on other version.\nIf this is a patch version, or a minor version with no significant functionality changes requiring document update, do not create\na new version of the documentation, update the existing versioned_docs document instead."),(0,l.yg)("p",null,"Create a new version:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cd website\nnpm run docusaurus docs:version ${release_version}\n# update version in package.json\ngit add .\n")),(0,l.yg)("p",null,"Instructions to rename an existing version:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cd website\ngit mv versioned_docs/version-<oldversion> versioned_docs/version-${release_version}\ngit mv versioned_sidebars/version-<oldversion>-sidebars.json versioned_sidebars/version-${release_version}-sidebars.json\n# update versions.json with new version\n# update documents under versioned_docs/version-${release_version}\ngit add .\n")),(0,l.yg)("p",null,"Where ",(0,l.yg)("inlineCode",{parentName:"p"},"${release_version}")," corresponds to the version tag ",(0,l.yg)("inlineCode",{parentName:"p"},"v1.2.3"),", for example."),(0,l.yg)("p",null,"Commit and push these changes."),(0,l.yg)("h3",{id:"9-create-a-pull-request-against-the-minor-version-branch"},"9. Create a pull request against the minor version branch"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Push the release branch (e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.2.3"),") to GitHub.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Create a PR against the minor version base branch (e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.2.x"),").")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Configure Bamboo to run automated tests against this PR by finding the branch plan for the release branch (",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.2.3"),") and setting only these variables:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"GIT_PR"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"true")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SKIP_AUDIT"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"true"))),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"IMPORTANT"),": Do NOT set the ",(0,l.yg)("inlineCode",{parentName:"p"},"PUBLISH_FLAG")," variable to ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," for this branch plan. The actual publishing of the release will be handled by a separate, manually triggered branch plan."),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("img",{alt:"Screenshot of Bamboo CI interface showing the configuration of the GIT_PR branch variable to have a value of &quot;true&quot;",src:n(11116).A,width:"1304",height:"524"}))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Verify that the Bamboo build for the PR succeeds and then merge to the minor version base branch (",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.2.x"),")."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"It ",(0,l.yg)("strong",{parentName:"li"},"is safe")," to do a squash merge in this instance, but not required"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"You may delete your release branch (",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.2.3"),") after merging to the base branch."))),(0,l.yg)("h3",{id:"10-create-a-git-tag-for-the-release"},"10. Create a git tag for the release"),(0,l.yg)("p",null,"Check out the minor version base branch (",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.2.x"),") now that your changes are merged in and do a ",(0,l.yg)("inlineCode",{parentName:"p"},"git pull"),"."),(0,l.yg)("p",null,"Ensure you are on the latest commit."),(0,l.yg)("p",null,"Create and push a new git tag:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'    git tag -a vMAJOR.MINOR.PATCH -m "Release MAJOR.MINOR.PATCH"\n    git push origin vMAJOR.MINOR.PATCH\n\ne.g.:\n    git tag -a v9.1.0 -m "Release 9.1.0"\n    git push origin v9.1.0\n')),(0,l.yg)("h3",{id:"11-publishing-the-release"},"11. Publishing the release"),(0,l.yg)("p",null,"Publishing of new releases is handled by a custom Bamboo branch plan and is manually triggered."),(0,l.yg)("p",null,"The reasons for using a separate branch plan to handle releases instead of the branch plan for the minor version (e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"release-1.2.x"),") are:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The Bamboo build for the minor version release branch is triggered ",(0,l.yg)("strong",{parentName:"li"},"automatically")," on any commits to that branch, whereas we want to manually control when the release is published."),(0,l.yg)("li",{parentName:"ul"},"We want to verify that integration tests have passed on the Bamboo build for the minor version release branch ",(0,l.yg)("strong",{parentName:"li"},"before")," we manually trigger the release, so that we can be sure that our code is safe to release.")),(0,l.yg)("p",null,"If this is a new minor version branch, then you will need to create a new Bamboo branch plan for publishing the release following the instructions below:"),(0,l.yg)("h4",{id:"creating-a-bamboo-branch-plan-for-the-release"},"Creating a Bamboo branch plan for the release"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"In the Cumulus Core project (",(0,l.yg)("a",{parentName:"p",href:"https://ci.earthdata.nasa.gov/browse/CUM-CBA"},"https://ci.earthdata.nasa.gov/browse/CUM-CBA"),"), click ",(0,l.yg)("inlineCode",{parentName:"p"},"Actions -> Configure Plan")," in the top right.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Next to ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan branch")," click the rightmost button that displays ",(0,l.yg)("inlineCode",{parentName:"p"},"Create Plan Branch")," upon hover.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Click ",(0,l.yg)("inlineCode",{parentName:"p"},"Create plan branch manually"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Add the values in that list. Choose a display name that makes it ",(0,l.yg)("em",{parentName:"p"},"very")," clear this is a deployment branch plan. ",(0,l.yg)("inlineCode",{parentName:"p"},"Release (minor version branch name)")," seems to work well (e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"Release (1.2.x)"),"))."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"Make sure")," you enter the correct branch name (e.g. ",(0,l.yg)("inlineCode",{parentName:"li"},"release-1.2.x"),")."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Important")," Deselect Enable Branch - if you do not do this, it will immediately fire off a build.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Do Immediately")," On the ",(0,l.yg)("inlineCode",{parentName:"p"},"Branch Details")," page, enable ",(0,l.yg)("inlineCode",{parentName:"p"},"Change trigger"),".  Set the ",(0,l.yg)("inlineCode",{parentName:"p"},"Trigger type")," to manual, this will prevent commits to the branch from triggering the build plan.\nYou should have been redirected to the ",(0,l.yg)("inlineCode",{parentName:"p"},"Branch Details")," tab after creating the plan. If not, navigate to the branch from the list where you clicked ",(0,l.yg)("inlineCode",{parentName:"p"},"Create Plan Branch")," in the previous step.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Go to the ",(0,l.yg)("inlineCode",{parentName:"p"},"Variables")," tab. Ensure that you are on your branch plan and not the ",(0,l.yg)("inlineCode",{parentName:"p"},"master")," plan: You should not see a large list of configured variables, but instead a dropdown allowing you to select variables to override, and the tab title will be ",(0,l.yg)("inlineCode",{parentName:"p"},"Branch Variables"),". Then set the branch variables as follow:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DEPLOYMENT"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"cumulus-from-npm-tf")," (",(0,l.yg)("strong",{parentName:"li"},"except in special cases such as incompatible backport branches"),")",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"If this variable is not set, it will default to the deployment name for the last committer on the branch"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"USE_CACHED_BOOTSTRAP"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"false")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"USE_TERRAFORM_ZIPS"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"true")," (",(0,l.yg)("strong",{parentName:"li"},"IMPORTANT"),": MUST be set in order to run integration tests against the ",(0,l.yg)("inlineCode",{parentName:"li"},".zip")," files published during the build so that we are actually testing our released files)"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"GIT_PR"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"true")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SKIP_AUDIT"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"true")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"PUBLISH_FLAG"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"true")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Enable the branch from the ",(0,l.yg)("inlineCode",{parentName:"p"},"Branch Details")," page.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Run the branch using the ",(0,l.yg)("inlineCode",{parentName:"p"},"Run")," button in the top right."))),(0,l.yg)("p",null,"Bamboo will build and run lint and unit tests against that tagged release, publish the new packages to NPM, and then run the integration tests using those newly released packages."),(0,l.yg)("h3",{id:"12-create-a-new-cumulus-release-on-github"},"12. Create a new Cumulus release on github"),(0,l.yg)("p",null,"The CI release scripts will automatically create a GitHub release based on the release version tag, as well as upload artifacts to the Github release for the Terraform modules provided by Cumulus. The Terraform release artifacts include:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"A multi-module Terraform ",(0,l.yg)("inlineCode",{parentName:"li"},".zip")," artifact containing filtered copies of the ",(0,l.yg)("inlineCode",{parentName:"li"},"tf-modules"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"packages"),", and ",(0,l.yg)("inlineCode",{parentName:"li"},"tasks")," directories for use as Terraform module sources."),(0,l.yg)("li",{parentName:"ul"},"A S3 replicator module"),(0,l.yg)("li",{parentName:"ul"},"A workflow module"),(0,l.yg)("li",{parentName:"ul"},"A distribution API module"),(0,l.yg)("li",{parentName:"ul"},"An ECS service module")),(0,l.yg)("p",null,"Make sure to verify the appropriate .zip files are present on Github after the release process is complete."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Important")," Copy the release notes for the new version from the changelog to the description of the new release on the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"GitHub Releases page"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Optional"),' The "Publish" step in Bamboo will push the release artifcats to GitHub (and NPM). If you need more time to validate the release ',(0,l.yg)("em",{parentName:"p"},"after"),'\nthe packages are published, you can mark the release as a "Pre-Release" on GitHub. This will clearly indicate the that release is not ready for the public. To do this:'),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Find the release on ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/releases"},"GitHub Releases page")),(0,l.yg)("li",{parentName:"ul"},'Click the "Edit release" button (pencil icon)'),(0,l.yg)("li",{parentName:"ul"},'Check the "This is a pre-release" checkbox'),(0,l.yg)("li",{parentName:"ul"},'Click "Update release"')))),(0,l.yg)("h3",{id:"13-update-cumulus-api-document"},"13. Update Cumulus API document"),(0,l.yg)("p",null,"There may be unreleased changes in the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-api"},"Cumulus API document")," that are waiting on the Cumulus Core release.\nIf there are unrelease changes in the cumulus-api repo, follow the release instruction to create the release, the release version should match\nthe Cumulus Core release."),(0,l.yg)("h3",{id:"14-merge-base-branch-back-to-master"},"14. Merge base branch back to master"),(0,l.yg)("p",null,"Finally, you need to reproduce the version update changes back to master."),(0,l.yg)("p",null,"If this is the latest version, you can simply create a PR to merge the minor version base branch back to master."),(0,l.yg)("p",null,"Do not merge ",(0,l.yg)("inlineCode",{parentName:"p"},"master")," back into the release branch since we want the release branch to ",(0,l.yg)("em",{parentName:"p"},"just")," have the code from the release.  Instead, create a new branch off of the release branch and merge that to master. You can freely merge master into this branch and delete it when it is merged to master."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Please Note")," If this is a backport, you will need to create a PR that merges ",(0,l.yg)("strong",{parentName:"p"},"ONLY")," the changelog updates back to master. It is important in this changelog note to call it out as a backport. For example:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("strong",{parentName:"p"},"Please note")," changes in 13.3.2 may not yet be released in future versions, as\nthis is a backport and patch release on the 13.3.x series of releases. Updates that\nare included in the future will have a corresponding CHANGELOG entry in future\nreleases..")),(0,l.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.yg)("h3",{id:"delete-and-regenerate-the-tag"},"Delete and regenerate the tag"),(0,l.yg)("p",null,"To delete a published tag to re-tag, follow these steps:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"  git tag -d vMAJOR.MINOR.PATCH\n  git push -d origin vMAJOR.MINOR.PATCH\n\ne.g.:\n  git tag -d v9.1.0\n  git push -d origin v9.1.0\n")))}d.isMDXComponent=!0},11116:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/configure-release-branch-test-9d167f40dca2c755094109a73591a8da.png"}}]);
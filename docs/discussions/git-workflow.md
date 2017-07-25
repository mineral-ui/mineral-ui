# Git Workflow

### Background

Following several team member concerns that our current git workflow did not easily allow for certain capabilities/scenarios. This alternate git workflow was suggested as a potential solution to address these concerns and solicit feedback from team members.

### Decision

Following discussion, it was determined that the process change does not add enough value to deviate from our current git workflow. All things can be achieved in or current model, albeit a bit differently.  The git workflow using our current model should be documented in similar fashion as described here.  See https://github.com/mineral-ui/mineral-ui/issues/205

---
## Overview

As a Mineral UI developer, I would like an improved git workflow, so that I have more control over the release process.

The goal is to make improvements while NOT  overcomplicating the process.

### Pros

* Can perform a release from the latest stable code at any point in time
* Can deploy the site from the latest stable code at any point in time
* Can accumulate features to be tested together prior to a release
    * Including testing unpublished packages outside of Mineral UI
* Can accumulate features to be released simultaneously
* Can apply hotfixes to master and deploy them without pulling in other feature work in progress


### Cons

* We can actually do all of the above without a new model, just a bit differently
* Is this actually solving real problems for us or just adding process?
* Additional process that must be learned/taught
* Muscle memory of using master

---
## Alternate workflow


### Branching model

* …feature branches
* develop - accumulates features until ready to publish
* release - release candidate branch - can be used for staging
* master - identical to latest published code


### General workflow

* Work on feature branches
* Continually merge feature branches to develop via PR’s
* Delete feature branch
* When develop has the desired features, merge develop branch to release branch
* If desired, perform manual canary release of packages and deploy site to staging
* Any additional changes to the release branch must be merged back to develop - this could also happen by rebasing develop with master following the release.
* When done testing, merge release branch to master
* Perform release


### Hotfix workflow

* Scenario: A bug needs fixed immediately without pulling in everything from develop.
* Create a hotfix branch based on master
* Commit changes to hotfix branch
* If desired, perform manual canary release of packages and deploy site to staging
* Merge hotfix branch to master
* Merge master into develop
* Perform release


### Tasks

* Protect develop and master branches
* Make develop branch the default branch in GitHub
* Update CI to build/test all branches, or at least master, develop, and release branches
* Could use a private staging environment for site
* Workflow of publishing canary packages needs verified


### Extras

* We only support the latest released component version.
    * We cannot (easily) publish hotfixes for older versions
    * Consumers should be encouraged to upgrade to the latest version or fork the component and fix it themselves until they can upgrade


### Resources

* http://drewfradette.ca/a-simpler-successful-git-branching-model/
* http://nvie.com/posts/a-successful-git-branching-model/

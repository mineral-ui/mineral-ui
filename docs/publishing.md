# Publishing

## Semantic

When publishing a public release, you should be able to simply run the following command.  It will do many things, like make a production build, run tests, detect which packages have changed, determine appropriate version bumps, generate change-logs, add git tags, push to GitHub, create a release on GitHub, publish packages to npm, and deploy site artifacts to GitHub pages.

```sh
npm run release:semantic
```

## Manual

If you need a bit more control over the process, use the following command as your starting point.

```sh
npm run release
```

_Note that [additional options](https://github.com/lerna/lerna#publish) to the underlying `lerna publish` command may be specified as follows, e.g. `npm run release -- --skip-git --skip-npm`_

## Tips

* Log in to npm using `npm login` locally prior to running any of the following `release` commands or your packages will fail to publish.

* If you are not locally authenticated to GitHub using SSH keys, you will be prompted for credentials during the release process.

* Since we use protected branches and require status checks to pass before merging on GitHub, one must first toggle `Branch protection for master` or the `Include administrators` option in [GitHub settings](https://github.com/mineral-ui/mineral-ui/settings/branches/master) prior to running any of the following `release` commands.

## FAQ

* __How do I publish a prerelease version?__

    * `npm run release -- --skip-git` then select appropriate option when prompted
    * or `npm run release -- --skip-git --canary`


* __Is it okay to publish from a branch?__

    * Assuming that you are publishing a prerelease version, yes.
        * Be sure to use the `--skip-git` flag.  You can then push updates to your branch manually, if desired.
        * Be sure to only publish a prerelease version.  Public releases should be published from master.
        * Be sure to use the `--npm-tag` flag and specify something other than “latest”.
        * e.g.  `npm run release -- --skip-git --npm-tag next`


* __What if none of these options work for my needs?__

    * Packages can always be updated manually and published using `npm publish`.


* __This publishing stuff is scary.  Is there any way to experiment without fear of breaking things?__

    * Yes, there are a couple of methods that you can try.
      1. If you always use the `--skip-git` and `--skip-npm` flags, your changes will only be local.
      2. If you need to go deeper than this, try the following repo, which was made expressly for this purpose.  https://github.com/brentertz/lerna-sandbox

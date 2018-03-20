# Publishing

When publishing a public release, you should be able to simply run the following command.  It will do many things, like make a production build, run tests, bump the package version, generate a changelog, add a git tag, push to GitHub, and publish to npm.

```sh
npm run release
```

Check the command usage for options

```sh
npm run release -- --help
```

## Tips

* Ensure that you are locally authenticated to both `GitHub` and `npm` prior to running `release` or the package will fail to publish.

* Since we use protected branches and require status checks to pass before merging on GitHub, one must first toggle `Branch protection for master` or the `Include administrators` option in [GitHub settings](https://github.com/mineral-ui/mineral-ui/settings/branches/master) prior to running any of the following `release` commands.

## Deploying the website

Currently the site is hosted on Netlify. In order to publish the website, one of the administrators must log into the Netlify UI and select a deploy preview to publish. View the details of that (successful) deploy and click the "Publish deploy" button. This will publish to [mineral-ui.com](https://mineral-ui.com).

## FAQ

* __How do I publish a prerelease version?__

  ```sh
  npm run clean
  npm run build:library
  npm run build:package -- --label=alpha
  npm run release:dist -- --npm-tag=alpha
  ```

* __Is it okay to publish from a branch?__

    Assuming that you are publishing a prerelease version, yes.

* __This publishing stuff is scary.  Is there any way to experiment without fear of breaking things?__

    * There is a confirmation prompt at the end of the `release` script.  You can abort prior to taking any remote actions, then inspect the local changes.
    * There are also `--skip-git` and `--skip-npm` options.
    * As mentioned above, check the `release` command usage for options.

    ```sh
    npm run release:dist -- --help
    ```

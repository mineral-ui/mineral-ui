# Contributing Guide

Thank you for your help making this project and community as good as it can be. We strive to maintain a welcoming, inclusive space for all. All contributors, including commenters on issues, are expected to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

Here are a few things to help your contribution be fun and trouble-free.


## Submitting a Pull Request

We welcome pull requests from anyone but before working on a large change, it is best to first to discuss it with the maintainers. Please reproduce your error by forking our [Mineral UI Starter](https://codesandbox.io/s/v410y75m0) and adding the relevant code there. Then, send us a message on the Flowdock "Mineral & Styleguide" Flow or open an issue including the relevant link.

You can also get a good overview of our current and planned work from our [Waffle board](https://waffle.io/mineral-ui/mineral-ui), from which we manage this project.

Please try to keep your PR as small and focused as possible, and don’t include more than one feature or bug fix per PR. Big PRs are hard to review and are less likely to be accepted.

If your PR adds new features or changes existing code, please attempt to write tests covering the new behavior.

For a PR to be accepted, it must fulfill each item in the checklist provided in the [pull request template](./.github/PULL_REQUEST_TEMPLATE.md), and all authors must sign the [Contributor License Agreement ("CLA")](https://cla-assistant.io/mineral-ui/mineral-ui).


## Getting Started

Fork the repo, then create a new branch from an up-to-date master on your fork.

If you do not have a local repository, clone your fork to your machine and create a new branch:

```sh
git clone https://github.com/<yourusername>/mineral-ui.git
git checkout -b your-branch-name
```

If you do have an existing local repository, please update it before you start, to minimize the chance of merge conflicts.

```sh
git remote add upstream https://github.com/<yourusername>/mineral-ui.git
git checkout master
git pull upstream master
git checkout -b my-branch-name
npm update
```


### Set Up

1. Install the package dependencies

    ```sh
    npm install
    ```

1. Make sure you’re using the correct `node` version (we recommend using [nvm](https://github.com/creationix/nvm) to install and manage `node` on your machine)

    ```sh
    nvm use
    ```

    If your console tells you that you don’t have that version installed, run

    ```sh
    nvm install
    ```

1. Start the demo

    ```sh
    npm start
    ```


### Developing

- We use [Prettier](https://github.com/prettier/prettier), so you can write your code in whichever style you’re most comfortable and convert it to our standard before you commit:

    In the project root:

    ```sh
    npm run format
    ```

- We also use [Commitizen](https://github.com/commitizen/cz-cli) for ensuring a standard format for this project’s commit messages. You can still commit as normal with a valid message, but we recommend using:

    ```sh
    npm run commit
    ```


### Testing

Unit tests use [Jest](https://github.com/facebook/jest). When appropriate, [snaphots](http://facebook.github.io/jest/docs/snapshot-testing.html) are nice.

1. After making your changes, lint your code and run the unit tests

    ```sh
    npm test
    ```


### Developer Docs

More detailed information can be found in the [Developer Docs](./docs/README.md).

# Gatsby / Static Site Generation

This doc attempts to provide some context around our current public-facing site architecture.

`tldr;` We recommend continuing development on the existing React dynamic site until at least after CA World.

### Background

A main stakeholder goal is that our public presentation should have the maximum polish attainable by CA World (our yearly company expo). Gatsby was proposed as an alternative to continuing to develop a dynamic React site as there were several key offerings that could enhance site creation in the long run.

### [Gatsby](https://www.gatsbyjs.org) offerings

* robust community of plugin developers providing turnkey features or a modern website
* no wrestling with webpack configurations
* very simple integration with CMSs to allow non-developer modification of documentation files
* static files are easily scalable
* provides street cred for an endeavor heavily informed by attempting to improve the company image in the dev community
* code-splitting for free
* ability to work with data via GraphQL, which enables working with large files when the site scope expands in the future (much more robust than other static site generators)

### Gatsby downsides

* immature project as of August 2017
* buggy code/gotchas that are undocumented
* incomplete documentation
* would require the entire team to spend time getting up to speed on GraphQL in a handful of weeks
* would require some or all team members to learn Gatsby dev flow
* the easiest path to development would be to make a separate repo, which would mean more code to manage

#### Stakeholder requirements

1. Mineral UI must project legitimacy by CA World (November 13)
2. Maintainable website
3. Ease of contributions
4. As much site content as possible
5. Continued work on components by the Mineral team

### Investigation

- Stood up several instances of Gatsby with varying degrees of complexity.
- Made separate layouts for the Home, Guidelines pages.
  - this led me to reviewing the open PRs and issues for Gatsby. There are major features - e.g. multiple layouts - in flight.
- We have the existing ThemeProvider which needs to wrap the Gatsby application root to make things work.
  - Finally figured out how to do this, but there is a bug (oversight?) which causes the build to fail silently when jsx is used. If this sort of thing exists right at the beginning of the process, it creates concern about what happens when we get into the weeds.
- Used [GraphiQL](https://github.com/graphql/graphiql) to build queries for several interesting aspects of the site to see how much functionality we could get for free
  - While GraphQL is super awesome, there's definitely a learning curve to the introspection/documentation tool GraphiQL
  - there is no online documentation that we could find explaining the datatypes, which means the only way to learn it is to play around for a while
  - debugging a GraphQL problem means looking under the hood at the Apollo GraphQL instance, which is an entire other domain of knowledge

## Recommendation

While moving the website to Gatsby might be the right long-term solution for maintainability and contribution, the effort to move it over immediately would not satisfy stakeholders, mainly #1 in the list above. There is too much risk currently to throw all our eggs into one basket, and the resource draw would be too great.

We can still accomplish a better hosting solution via [Netlify](netlify.com) along with the ability to ease contribution from non-devs by injecting an existing markdown -> React webpack plugin into our flow while continuing to build the extant React site.

We'll likely keep an eye to creating content in markdown and returning to Gatsby in a few months if possible.

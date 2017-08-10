# Versioning

Our current versioning strategy seems to have us on a path of rapidly climbing version numbers for our components (as of this writing, Button is on 4.0.0). This is not ideal because:

- A project with many major changes in a short period of time appears unstable to consumers.
- Having our packages at these relatively disparate versions makes it difficult, if not impossible, to coordinate which versions work together.

There's an argument to be made that we jumped the gun on going "1.0.0" too early. Since we still have so many breaking changes needing released, we aren't very stable, and the high version numbers imply otherwise.

On the other hand, our current strategy makes it easy for our consumers to know what to expect, w/r/t minor vs. major changes.


## Current Strategy

We have followed [semver](http://semver.org/) as best as we could from day one. Additionally, we have considered a change to styles that affect the box-model (dimensions, margins, positioning, etc...) a major, breaking change.


## Proposals

### A. No Change

Just keep on keeping on.


### B. `0.x.x`

Per a conversation with npm, we have three ways to do this:

1. Within the same org, use **different package names**. E.g., `mnrl-button`

   Longer, more redundant import paths

1. Within the same org, use the same package names but **somehow avoid already-used version numbers**

   Huge pain to manage, and feels terribly arbitrary

1. Publish under a **new org**

   Wouldn't match our GitHub org, repo, or domain name


#### What Is a "Breaking" Change?

Until we hit 1.0.0, we treat what would normally be a breaking change (see [Current Strategy](#current-strategy)) as a minor change instead, given that something must be stable before it can be "broke". After 1.0.0, we follow our current strategy again.


#### When Would We Go 1.0.0?

There are two major factors to whether or not a change is breaking, so therefore, there are two major criteria to whether or not the project is stable:

- The API of our packages is stable. We feel like they have been adequately tested by our partner consumers and that a future breaking change is unlikely or at least a long ways off.
- The visual design, including theme variables, of our packages is stable. This will require coordination with designers.

Once those criterium are met, we could either go to 1.0.0 with each package, as appropriate, or we could make the move for all packages simultaneously, to provide a nice baseline.


#### When Would We Go 2.0.0?

There are three scenarios to make this happen:

- Planned major visual design update
- Planned major API changes
- Unplanned breaking change, necessary to fix an issue


#### How Would This Play Out Down the Road?

A few simplified hypotheticals to illustrate:

1. **Planned major visual change**

   | Component | Version |
   | :-------- | :------ |
   | Button | 1.0.0 |
   | Card | 1.0.0 |
   | ComponentUtils | 1.0.0 |

   Then Design requests a system-wide visual overhaul...

   | Component | Version |
   | :-------- | :------ |
   | Button | 2.0.0 |
   | Card | 2.0.0 |
   | ComponentUtils | 2.0.0 |

2. **Planned major API change**

   | Component | Version |
   | :-------- | :------ |
   | Button | 1.0.0 |
   | Card | 1.0.0 |
   | ComponentUtils | 1.0.0 |

   Then we change how theming works, across the board...

   | Component | Version |
   | :-------- | :------ |
   | Button | 2.0.0 |
   | Card | 2.0.0 |
   | ComponentUtils | 2.0.0 |

3. **Unplanned major change**

   | Component | Version |
   | :-------- | :------ |
   | Button | 1.0.0 |
   | Card | 1.0.0 |
   | ComponentUtils | 1.0.0 |

   Then Card has a big issue that can only be fixed with a breaking change...

   | Component | Version |
   | :-------- | :------ |
   | Button | 1.0.0 |
   | Card | 2.0.0 |
   | ComponentUtils | 1.0.0 |

4. **New, unstable component**

   | Component | Version |
   | :-------- | :------ |
   | Button | 1.0.0 |
   | Card | 1.0.0 |
   | ComponentUtils | 1.0.0 |

   Then we release Table, which we don't believe to be stable yet...

   | Component | Version |
   | :-------- | :------ |
   | Button | 1.0.0 |
   | Card | 1.0.0 |
   | ComponentUtils | 1.0.0 |
   | Table | 0.0.0 |

5. **Newly-stable component**

   Many months down the road...

   | Component | Version |
   | :-------- | :------ |
   | Button | 2.5.0 |
   | Card | 3.2.1 |
   | ComponentUtils | 2.18.0 |
   | Table | 0.13.2 |

   Then we decide Table is stable...

   We can either bump everything to match:

   | Component | Version |
   | :-------- | :------ |
   | Button | 4.0.0 |
   | Card | 4.0.0 |
   | ComponentUtils | 4.0.0 |
   | Table | 4.0.0 |

   Or we can simply:

   | Component | Version |
   | :-------- | :------ |
   | Button | 2.5.0 |
   | Card | 3.2.1 |
   | ComponentUtils | 2.18.0 |
   | Table | 1.0.0 |

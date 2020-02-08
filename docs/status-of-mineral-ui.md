# Status of Mineral UI

Mineral UI was created by CA Technologies to solve specific problems within our software ecosystem, which are reflected in this project's values. In November 2018, CA Technologies was bought by Broadcom, Inc and those problems — and, by extension, this project — were no longer a priority for the company. As a result, and to our chagrin, the time we could spend on Mineral UI quickly diminished to almost nothing. A year later, in November 2019, we were faced with two options: (1) shutdown and archive the project or (2) hand off the project to other maintainers.

Fortunately, in January 2020, [TargetX](https://www.targetx.com) offered to become the next corporate sponsor and steward of the Mineral UI project. TargetX had made a fairly big investment into Mineral UI (in 2019) as a foundational UI component library for many of their products. As such, the VP of Engineering (@natorojr) was keen to protect that investment by volunteering his own developement team's time to continue maintaining the current version of Mineral UI indefinitely.

As the new maintainers of Mineral UI, the TargetX team has commited to:
1. address bugs in timely manner
2. keep dependent packages reasonably up-to-date and vulnerability free
3. make non-breaking incremental improvements to the existing component library
4. keep the website and documentation updated
5. honor the project's open source philosophy
6. welcome community contributions

That said, TargetX has not commited to making any significant changes or refactoring of the existing code base, nor will they continue to add additional components to the library. Instead, the TargetX team will eventually create a new code repository (name T.B.D.) where they will start developing Mineral UI's successor from the ground up using the latest React features, TypeScript, and styled-system (but heavily influenced by the existing project's core design principles).

If this organizational change does not sit well with you, we would also like to point you toward some alternative projects that we believe to be comparable to Mineral UI.

## Alternatives

If you would like to explore an alternative to Mineral UI, we have vetted these libraries, with criteria of accessibility (a11y), extensibility, performance, and community.

- [Base Web][] — Extraordinarily customizable via [theming][] and the [`overrides`][overrides] prop; uses [styletron][]
- [Chakra][] — Built on [Styled System][], so one-off styles are super easy; uses [emotion][], like Mineral UI
- [Reach UI][], [Reakit][] — Focused on a11y; unstyled, so good for building your own component library
- [Material UI][] — They have made huge improvements in all areas since the creation of Mineral UI, and they continue to enjoy a robust community of support


## Thank you

We would also simply like to thank everyone who used Mineral UI or contributed in any way, be that submitting an issue, suggesting a feature, designing components, writing code or reviewing PRs.


[Base Web]: https://baseweb.design
[overrides]: https://baseweb.design/guides/understanding-overrides/
[theming]: https://baseweb.design/guides/theming/
[styletron]: https://www.styletron.org/
[Chakra]: https://chakra-ui.com/
[Styled System]: https://styled-system.com/
[emotion]: https://emotion.sh/
[Reakit]: https://reakit.io/
[Reach UI]: https://ui.reach.tech/
[Material UI]: https://material-ui.com/

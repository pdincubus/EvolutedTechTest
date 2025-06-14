# EvolutedTechTest

## Getting started

This project is running on [Eleventy (11ty)])(https://11ty.dev) because it's really, really good. I also wanted to run a small, local dev environment and this fits the bill just nicely.

* Clone the repo. You can `gh repo clone pdincubus/EvolutedTechTest` if you've got the CLI running.
* Install packages: If you value disk space, you'll probably run: `pnpm i`, and if you don't then `npm i` or probably `yarn` at a push.
* To run in dev mode (localhost server, live assets copying, and a Gulp task to compile PostCSS): `pnpm run dev`.
* To do a production build (no local server running, and a once over on assets and CSS compilation): `pnpm run prod`

Please note: JS assets don't work from external files when you just try to run the `index.html` file from the `dist` folder. You're probably better off just using the dev server unless you're planning to do some sort of deployment.

## What's in the build

* The basic structure allows for hiding all content areas other than the header and a `noscript` message if JavaScript is disabled.
* The basic page on initial load will show loading messages and spinners until the data fetching is complete.
* I've not tested the performance or accessibility of what's been built here, but the loading messages should at least be readable by screenreaders without issue.
* There's a few bits of boilerplate left over that I'd not removed in the `head.njk` import and around performance marks in the base layout too. These are parts of my Eleventy 'starter' that I use and update often as I build new shiny things. I've removed obviously unnecessary things like Open Graph, X/Twitter cards, favicon references, etc.
* There's a few instances, mostly around the size of icons in the design file where they weren't whole pixels in width or height so I've rounded them up in these cases to the nearest pixel.

## In case you're in a rush

I deployed it on Vercel: https://evoluted-tech-test.vercel.app/
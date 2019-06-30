# loot-chest [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Code of Conduct](https://img.shields.io/badge/%E2%9D%A4-code%20of%20conduct-blue.svg?style=flat)](https://github.com/dsibilly/loot-chest/blob/master/CODE_OF_CONDUCT.md) ![semver](https://img.shields.io/badge/semver-2.0.0-blue.svg?maxAge=2592000) ![Version](https://img.shields.io/github/tag/dsibilly/loot-chest.svg?label=version)

A random magic item generator tool for Fantasy AGE based on [Scott Boehmer's Age of Terror](https://scottsgameroom.com/2019/06/19/age-of-terror-magic-item-generator/).

This project lives at [https://lootchest.valthonis.net](https://lootchest.valthonis.net).

## OK. Huh?

I am an avid player of the [Fantasy AGE](https://greenronin.com/fantasyage/) tabletop role-playing game system published by Green Ronin. While the system is fast, fun, and eminently hackable, it suffers from a lack of published source materials compared to other TTRPGs. One of the categories that suffers the most are magic items. Magic items are typically rewards for surviving danger and being daring in RPGs and while the Fantasy AGE book has *some* selection, it's pretty small compared to other games in the fantasy genre.

When I came across [Scott Boehmer](https://twitter.com/scottboehmer)'s blog post about creating random magic items in a similar way to Blizzard's Diablo series of games, I was intrigued. The more I read over the post, the more I liked the core concept. It also gave me an excuse to scratch an itch I'd been having for a while in that it was an algorithm I could build a generator for. I asked Scott's permission to use his content, and he graciously permitted me to do so. The result is this project.

## Learning New Stuff

A new project is an excuse to play with new things that I don't have the opportunity to play with often in the coding I do for work. While I'd built REST APIs before, this was the first time I was going to build one for static data instead of as a front-end for a database. Looking back, I *could* have put all the Age of Terror item data into PostgreSQL or SQLite, but that would have added complexity to the project and ultimately slowed things down. What I hadn't done was play with React outside the confines of my Gatsby-powered blog, and that was something I *very* much wanted to do successfully. Of particular interest was making a React front-end interact with a REST API back-end and have it all work. I'm pretty pleased with how loot-chest turned out in that regard.

### Stuff I Used

- [React 16.8](https://reactjs.org)
- [Create React App](https://facebook.github.io/create-react-app/)
- [Shards UI](https://designrevision.com/downloads/shards/)
- [FontAwesome 5](https://fontawesome.com)
- [Express 4](https://expressjs.com)
- [My own Mersenne Twister PRNG module](https://www.npmjs.com/package/@dsibilly/mersenne-twister)

## What's Next?

As with any project, being done enough to take it live is not the same as being *done*. There's a few things I want to add to this project over time:

- API throttling to prevent bad actors from going H.A.M. on my service.
- InfluxDB and Grafana for real-time and historical monitoring of site and API usage.
- More affixes!
- Ability to generate batches of items at once instead of just one at a time.

I'm also open to ideas and suggestions. If you have one, please feel free to [file an enhancment issue](https://github.com/dsibilly/loot-chest/issues/new) with your suggestion! Don't let the fact that it's GitHub make you hesitate; I'd love to see some conversation about where loot-chest goes from here!

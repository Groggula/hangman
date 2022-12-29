# HANGMAN
[![Netlify Status](https://api.netlify.com/api/v1/badges/de7fbc81-ff75-4dfc-89b1-a19f0bd6d3d6/deploy-status)](https://app.netlify.com/sites/tangerine-quokka-cf24f3/deploys)
> A simple take on the classic game.

The game fetches a random word taken from [RandomWordAPI](https://random-word-api.herokuapp.com/).
The player then has 10 tries to guess the right word, one letter at a time.

Live preview [here](https://tangerine-quokka-cf24f3.netlify.app/) 

![](header.png)

## Installation

Project is created with Vite + React + Typescript. Nanoid is used for generating different ID's for all the keys on the keyboard. React-Confetti is used when the player wins.

```sh
npm create vite@latest
```
Follow the instructions and name the project

```sh
cd project-name
npm install nanoid react-confetti
```


## Usage example

Play a few rounds and have some fun.

Add new features like graphics, different difficulties, more languages.

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

```sh
npm run dev
```

## Release History

* 1.0.0
    * First proper release of final product

## Meta

Seb – therealsebastard@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/Groggula](https://github.com/Groggula)

## Contributing

1. Fork it (<https://github.com/Groggula/hangman/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki

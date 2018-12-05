# Country Flag Emoji

[![Build Status](https://flat.badgen.net/travis/risan/country-flag-emoji)](https://travis-ci.org/risan/country-flag-emoji)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/country-flag-emoji)](https://codeclimate.com/github/risan/country-flag-emoji)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/country-flag-emoji)](https://codeclimate.com/github/risan/country-flag-emoji)
[![Latest Stable Version](https://flat.badgen.net/npm/v/country-flag-emoji)](https://www.npmjs.com/package/country-flag-emoji)
[![Node Version](https://flat.badgen.net/npm/node/country-flag-emoji)](https://www.npmjs.com/package/country-flag-emoji)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/country-flag-emoji)](https://github.com/risan/country-flag-emoji/blob/master/LICENSE)

List of country codes and its flag emojis.

## Install

```bash
$ npm install country-flag-emoji

# Or if you use Yarn
$ yarn add country-flag-emoji
```

Use this library directly on the browser:

```html
<!-- For development -->
<script src="https://unpkg.com/country-flag-emoji@latest/dist/foo.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/country-flag-emoji@latest/dist/foo.umd.min.js"></script>
```

## Quick Start

```js
import countryFlagEmoji from "country-flag-emoji";

// All country flag emojis keyed by country code
console.log(countryFlagEmoji.data);

// Array of all country flag emojis
console.log(countryFlagEmoji.list);

// Array of country codes
console.log(countryFlagEmoji.countryCodes);

// Get country flag emoji for the given country code
console.log(countryFlagEmoji.get("US"));
// US: {
//  code: "US",
//  unicode: "U+1F1FA U+1F1F8",
//  name: "United States",
//  emoji: "🇺🇸"
// }
```

## API

### `data` Property

Get all country flag emojis keyed by country code.

```js
countryFlagEmoji.data
```

Data format:

```js
{
  //...
  ID: {
    code: "ID",
    unicode: "U+1F1EE U+1F1E9",
    name: "Indonesia",
    emoji: "🇮🇩"
  },
  IE: {
    code: "IE",
    unicode: "U+1F1EE U+1F1EA",
    name: "Ireland",
    emoji: "🇮🇪"
  },
  //...
}
```

### `list` Property

Get all country flag emojis.

```js
countryFlagEmoji.list
```

Data format:

```js
[
  //...
  {
    code: "ID",
    unicode: "U+1F1EE U+1F1E9",
    name: "Indonesia",
    emoji: "🇮🇩"
  },
  {
    code: "IE",
    unicode: "U+1F1EE U+1F1EA",
    name: "Ireland",
    emoji: "🇮🇪"
  },
  //...
]
```

### `countryCodes` Property

Get all country codes.

```js
countryFlagEmoji.countryCodes
```

Data format:

```js
[..., "IC", "ID", "IE", ...]
```

### `get()` Method

```js
countryFlagEmoji.get([countryCode])
```

### Parameters

* `countryCode` (optional `String`): Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.

### Returns

There are three possible return types:

* `Array`: If no `countryCode` being passed, it returns array of all country flag emojis.
* `undefined`: If the given country code is not found.
* `Object`: If the emoji is found for the given country code. The returned object has 4 properties:
  * `code`: The two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
  * `unicode`: Flag emoji Unicode character sequence, e.g. `U+1F1EE U+1F1E9`. Read more about [Regional Indicator Symbol](https://en.wikipedia.org/wiki/Regional_Indicator_Symbol).
  * `name`: The country name.
  * `emoji`: The country flag emoji.

## Related

* [country-flag-emoji-json](https://github.com/risan/country-flag-emoji-json): Country flag emojis in JSON format.

## License

MIT © [Risan Bagja Pradana](https://bagja.net)

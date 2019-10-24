# Country Flag Emoji

[![Build Status](https://badgen.net/travis/risan/country-flag-emoji)](https://travis-ci.org/risan/country-flag-emoji)
[![Test Covarage](https://badgen.net/codecov/c/github/risan/country-flag-emoji)](https://codecov.io/gh/risan/country-flag-emoji)
[![Latest Version](https://badgen.net/npm/v/country-flag-emoji)](https://www.npmjs.com/package/country-flag-emoji)

List of country codes and its flag emojis.

## Installation

```bash
$ npm install country-flag-emoji
```

### CDN

The library is available over a CDN:

```html
<script src="https://unpkg.com/country-flag-emoji@latest/dist/country-flag-emoji.umd.js"></script>

<!-- Or the minified version -->
<script src="https://unpkg.com/country-flag-emoji@latest/dist/country-flag-emoji.umd.min.js"></script>
```

## Usage

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

[MIT](https://github.com/risan/country-flag-emoji/blob/master/LICENSE) © [Risan Bagja Pradana](https://risanb.com)

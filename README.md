# Responsive Embeds

[![BracketSpace Micropackage](https://img.shields.io/badge/BracketSpace-Micropackage-brightgreen)](https://bracketspace.com)
[![npm](https://img.shields.io/npm/v/@micropackage/responsive-embeds)](https://www.npmjs.com/package/@micropackage/responsive-embeds)
[![License](https://poser.pugx.org/micropackage/responsive-embeds/license)](https://packagist.org/packages/micropackage/responsive-embeds)

## 🧬 About Responsive Embeds

This package provides a JavaScript function which can make any embed (like youtube video iframe) responsive.

## 💾 Installation

``` bash
npm install --save @micropackage/responsive-embeds
```
or
``` bash
yarn add @micropackage/responsive-embeds
```

## 🕹 Usage

```javascript
import responsiveEmbeds from 'responsive-embeds';

// See arguments description below.
responsiveEmbeds( element, params );

const iframe = document.getElementById( 'some-iframe' );
const embeds = document.querySelectorAll( '.responsive-embed' );

responsiveEmbeds( 'iframe[src*="youtube.com"]', {
  watch: true,
  wrapClass: 'my-custom-wrap',
} );
responsiveEmbeds( iframe );
responsiveEmbeds( embeds );
```

### How it works?

This function wraps given element(s) in a `div` with relative position and `padding-top` set as percentage to match the original element's proportions. The element itself is positioned absolute inside this div with height and width set to `100%`.  This means the element will always match parent width also preserving it's original proportions.

This function can be used with any HTML element which initial proportions should be preserved.

## ⚙️ Arguments
This function has two arguments.

| Argument | Type                              | Description                                                                                                                              |
|----------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **element**  | *(string\|HTMLElement\|NodeList)* | This can be either string selector which will be passed to document.querySelectorAll or an HTML node (HTMLElement) or NodeList instance. |
| **params**   | *(object)*                        | Additional params (see table below)<br/>*(optional)*                                                                                                      |


### Params
| Param         | Type                        | Description                                                                                                                                                                                                                                                                                                                                                      |
|---------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **wrapClass** | *(string)*                  | Class name applied to the wrapping div. <br/>**Default:** `'responsive-embed-wrap'`                                                                                                                                                                                                                                                                              |
| **watch**     | *(bool\|string\|HTMLElement)* | When using string selector as a first argument, this param can be used to observe changes in the DOM and make responsive all the items which will be added later. If this is set to `true` entire document is observed. Alternatively a string selector or HTMLElement object can be set to observe only changes inside given element. <br/>**Default:** `false` |

#### Watching example
Let's say we have a WordPress theme with it's content wrapped in a `div.entry-content` element.
We are using some plugin which loads youtube videos using youtube API, so the iframes might not be present in the DOM while we initialise responsiveEmbeds.

```JavaScript
responsiveEmbeds( 'iframe[src*="youtube.com"]', {
  watch: '.entry-content',
} );
```
This call will start observing the DOM changes inside the `div.entry-content` and will make responsive any added node which will match the selector `iframe[src*="youtube.com"]`. It will also transform all the matching nodes which are already present in the DOM.

## 📦 About the Micropackage project

Micropackages - as the name suggests - are micro packages with a tiny bit of reusable code, helpful particularly in WordPress development.

The aim is to have multiple packages which can be put together to create something bigger by defining only the structure.

Micropackages are maintained by [BracketSpace](https://bracketspace.com).

## 📖 Changelog

[See the changelog file](./CHANGELOG.md).

## 📃 License

GNU General Public License (GPL) v3.0. See the [LICENSE](./LICENSE) file for more information.

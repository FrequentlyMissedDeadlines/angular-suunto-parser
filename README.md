# angular-suunto-parser

[![Version](https://img.shields.io/npm/v/angular-suunto-parser)](https://www.npmjs.com/package/angular-suunto-parser)
![build](https://github.com/FrequentlyMissedDeadlines/angular-suunto-parser/workflows/build/badge.svg)
![release](https://github.com/FrequentlyMissedDeadlines/angular-suunto-parser/workflows/release/badge.svg)
[![codecov](https://codecov.io/gh/FrequentlyMissedDeadlines/angular-suunto-parser/branch/main/graph/badge.svg?token=6FSKL84WQ8)](https://codecov.io/github/FrequentlyMissedDeadlines/angular-suunto-parser?branch=master)
[![Downloads (total)](https://img.shields.io/npm/dt/angular-suunto-parser)](https://www.npmjs.com/package/angular-suunto-parser)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## TL;DR
This simple library allows you to read your [Suunto XML](https://www.suunto.com/en-us/Support/faq-articles/dm5/how-do-i-import--export-dive-logs-to-dm5/) files in any AngularJS application. I did this lib because I felt too limited by the [proprietary tool provided by Suunto](https://www.suunto.com/en-us/Support/software-support/dm5/) and wanted to build my own custom dashboards (annual temperature variation, impact on dives duration...).

## Usage

```
npm install angular-suunto-parser
```

Get DM5Parser using AngularJS dependency injection and then simply pass it the files and a scope. It returns a promise resolved with an array of dives corresponding to each file in parameter:
```javascript
DM5Parser.parseFiles(files, $scope).then(function (dives) {
    ...
});
```

Detailed example available [here](https://github.com/FrequentlyMissedDeadlines/angular-suunto-parser-demo-app).

## Features
### Anonymization
* The XML contains your device __Serial Number__. This library will automatically replace it by __"XXXXXXXX"__ to preserve your privacy.
* I have absolutely no clue on what the ```SampleBlob``` field stands for. It looks like an encrypted string. I don't know what is inside but it may be used to fingerprint your device. As a result, the library totally __removes this field__.

### Data cleaning
Since the schema of the XML files is not available and in order to prevent parsing issues we force some fields to be ```Array```. Indeed the parser relies on [X2JS](https://github.com/x2js/x2js) and if a tag appears only once it will be parsed to an ```Object```. On the other hand if the same tag appears twice or more the parser understands it must be parsed to an ```Array```.

### Data types
Dates and numerical fields are casted directly if possible. If not, the ```String``` value is returned.

## They are using angularjs-suunto-parser
Feel free to open a PR to get your Open Source project listed here:
* [angular-suunto-parser-demo-app](https://github.com/FrequentlyMissedDeadlines/angular-suunto-parser-demo-app)
* ...

## Legal disclaimer
I don't own any right on Suunto or Suunto DM5. All rights belong to their's rightful owner/owners. No copyright infringement intended. I only made this project as I am a big fan of Suunto and wanted to extend DM5 capabilities.

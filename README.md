# angular-suunto-parser

![Node.js CI](https://github.com/FrequentlyMissedDeadlines/angular-suunto-parser/workflows/Node.js%20CI/badge.svg)
![Node.js CD](https://github.com/FrequentlyMissedDeadlines/angular-suunto-parser/workflows/Node.js%20CD/badge.svg)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

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

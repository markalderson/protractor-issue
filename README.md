# protractor-issue

See [this](https://github.com/angular/protractor/issues/24160) [Protractor](https://angular.github.io/protractor) issue.

## Run instructions

``` bash
npm install
webdriver-manager start
node_modules/http-server/bin/http-server
protractor conf.js
```

## Test explanation

The test consists of 2 similar specs. Both deal with file selection through a `<input type="file">` html element, but in the first spec the file is actually present on file system, while in the second one the file is missing.

The second spec _should_ fail.
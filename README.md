# protractor-issue

See [this issue](https://github.com/angular/protractor/issues/2416) with [Protractor](https://angular.github.io/protractor).

## Run instructions

``` bash
npm install
webdriver-manager start
node_modules/http-server/bin/http-server
protractor conf.js
```

## Tests explanation

### spec.js

This test consists of 2 similar specs. Both deal with file selection through a `<input type="file">` html element, but in the first spec the file is actually present on file system, while in the second one the file is missing.

The second spec _should_ fail.

### spec.js

This test is similar, but goes deeper: it verifies file content. With an existing file, content is properly read. A non-existing file is instead equivalent to an empty file (i.e. `content === ''`).
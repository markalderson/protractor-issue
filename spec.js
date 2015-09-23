var path = require('path');

describe('Tryin to upload', function() {
  it('a real file', function() {
    browser.get('http://localhost:8080');
    var file_path = path.resolve(__dirname, 'foo.txt');
    var input = $('input[type="file"]');
    browser.driver.executeScript(function () {
		return document.querySelector('input').files;
	}).then(function (files) {
		expect(files).toEqual([]);
	});
	input.sendKeys(file_path);
	browser.driver.executeScript(function () {
		return document.querySelector('input').files;
	}).then(function (files) {
		expect(files[0].name).toEqual('foo.txt');
	});
  });

  it('a non-existing file (this spec should fail)', function() {
    browser.get('http://localhost:8080');
    var file_path = path.resolve(__dirname, 'bar.txt');
    var input = $('input[type="file"]');
    browser.driver.executeScript(function () {
		return document.querySelector('input').files;
	}).then(function (files) {
		expect(files).toEqual([]);
	});
	input.sendKeys(file_path);
	browser.driver.executeScript(function () {
		return document.querySelector('input').files;
	}).then(function (files) {
		expect(files[0].name).toEqual('bar.txt');
	});
  });
});
var path = require('path');

describe('Tryin to upload', function() {
  it('a real file', function() {
    browser.get('http://localhost:8080');
    var file_path = path.resolve(__dirname, 'foo.txt');
    var input = $('input[type="file"]');
    var content = $('p');
    expect(content.getText()).toEqual('');
	input.sendKeys(file_path);
	expect(content.getText()).toEqual('Hi from foo.txt!');
  });

  it('a non-existing file', function() {
    browser.get('http://localhost:8080');
    var file_path = path.resolve(__dirname, 'bar.txt');
    var input = $('input[type="file"]');
    var content = $('p');
    expect(content.getText()).toEqual('');
	input.sendKeys(file_path);
	expect(content.getText()).toEqual('');
  });
});
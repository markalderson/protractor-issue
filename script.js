angular.module('protractor-issue', []).
	controller('MyController', function ($scope) {
		var input = document.querySelector('input');
		input.addEventListener('change', function(event) {
			var file = event.target.files[0];
			var reader = new FileReader();
			reader.addEventListener('loadend', function() {
				$scope.$apply(function () {
					$scope.content = reader.result;
				});
			});
			reader.readAsText(file);
		});
	});
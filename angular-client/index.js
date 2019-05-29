var app = angular.module('app', []);

// for the config
app.config(["$","$", ($, $) => {
    // do whatever we want to do here.
     // example routing
}]);

// search controller
app.controller("search", ($scope) => {
  // search function should be here
    $scope.search = () => {

        const body = {
			location: $scope.location,
			name: $scope.subject,
			level: $scope.level
		};

		return fetch('http://localhost:4000/search', {
			method: 'post',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				$scope.people = data;
				$scope.$apply();
				return data;
			})
			.catch((err) => console.log(err));

    };

	$scope.search();
    
});



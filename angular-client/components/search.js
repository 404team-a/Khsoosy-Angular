

    $scope.search = function () {

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
import { app } from "firebase";

// (function(angular) {
//     angular.module('search', []).controller('searchCtrl', function searchCtrl($scope) {
//         // functionality goes here !
//         var searchBox =  $scope.searchBox
//         this.fun=function (params) {
//         }
//     });

//     angular.module('search', []).c
// })(window.angular);

var subjectsName = angular.module('searchForm', []);
var subjectLevel = angular.module("searchForm", []);
var location = angular.module("searchBox", []);

app.controller('searchCtrl', ($scope) => {
    $scope.subjectsName 
});

app.controller('searchCtrl', ($scope) => {
    $scope.subjectLevel
});

app.controller('searchCtrl', ($scope) => {
    $scope.location
});

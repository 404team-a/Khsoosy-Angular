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

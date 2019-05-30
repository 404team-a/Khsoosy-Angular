angular.module('app')

.controller('HeaderCtrl',function($scope,$http){
    $scope.SignUp = false 
    $scope.Login = false 

    $scope.openModal = () => {
        $scope.Login = true
    }
    $scope.closeModal = () =>{
        $scope.SignUp = true
    }
})
.component('header' ,{
    controller : "HeaderCtrl",
    templateUrl : "angular-client/templates/header.html" 
})
angular.module('app')

.controller('HeaderCtrl',function($scope,$http,mdl){
    $scope.SignUp = mdl.SignUp 
    $scope.Login = mdl.Login 
console.log("ashdjahsdjagsdjhgasj")
    $scope.openModal = () => {
        $scope.Login = true
    }
    $scope.closeModal = () =>{
        $scope.SignUp = true
    }
})
.component('header' ,{
    controller : "HeaderCtrl",
    templateUrl : "/templates/header.html" 
})
.service("mdl",function(){
    var SignUp=false;
    var Login=false;
    
})
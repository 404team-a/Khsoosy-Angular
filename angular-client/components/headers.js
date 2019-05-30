angular.module('app')
.controller('HeaderCtrl',function($scope,$http){
    this.SignUp = false 
    this.Login = false 

    this.openModal = () => {
        this.Login = true
    }
    this.closeModal = () =>{
        this.SignUp = true
    }
})
.component('header' ,{
    controller : "HeaderCtrl",
    templateUrl : "angular-client/templates/headers.html" 
})
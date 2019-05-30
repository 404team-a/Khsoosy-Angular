angular.module('app')

.controller('signUpController',function($scope,$http){
  $scope.is_teacher='';
  $scope.userName="";
  $scope.email='';
  $scope.password="";
  $scope.phone='';
  $scope.location="";
  this.error='';
  $scope.userName="";

  $scope.onSignUp=function(){
    $http({
      method:'post',
      url:'/signup',
      data:JSON.stringify(body),
      headers: {'Content-Type': "application/json; charset = utf-8"}
    }).then(function(response){
      return response.json();
        
    }).then(function(body){
      if (body.error){
      
        $scope.error= body.error
        $scope.userName= ''
        $scope.is_teacher= ''
        $scope.password= ''
        $scope.email= ''
        $scope.phone= ''
        $scope.location= ''
      
      }else {
        
        $scope.error= 'Thank you please Login Now!'
        $scope.userName= ''
        $scope.is_teacher= ''
        $scope.password= ''
        $scope.email= ''
        $scope.phone= ''
        $scope.location= ''
        this.closeModal('signUP');
        this.openModal('Login');
      }
        
    }).catch(function(){
        console.log('big error')
    })
  }
})

.component('signUP',{
      controller: 'signUpController',
      templateUrl: '/templates/signUP.html'
  
  })
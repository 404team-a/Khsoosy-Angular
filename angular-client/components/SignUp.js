angular.module('app')

.controller('signUpController',function($scope,$http,mdl){
  $scope.is_teacher='';
  $scope.userName="";
  $scope.email='';
  $scope.password="";
  $scope.phone='';
  $scope.location="";
  this.error='';
  $scope.userName="";

  $scope.onSignUp=()=>{
    console.log(this,'hi',$scope)
    const body = { 
      userName:$scope.userName,
      is_teacher:$scope.is_teacher,
      password:$scope.password,
      email:$scope.email,
      phone:$scope.phone,
      location:$scope.location };
    $http({
      method:'post',
      url:'/signup',
      data:JSON.stringify(body),
      headers: {'Content-Type': "application/json; charset = utf-8"}
    }).then((response)=>{
      return response;
        
    }).then((body)=>{
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
      }
        
    }).catch((err)=>{
        console.log(err)
    })
  }
})

.component('signup',{
  bindings:{
    closeModal:'<',
    openModal:'<'
    
  },
      controller: 'signUpController',
      templateUrl: '/templates/signUP.html'
  
  });
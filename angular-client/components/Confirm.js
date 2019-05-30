angular.module('app')
.controller('ConfirmController'['$scope',function($scope,$http){
  $scope.books=[];
  $scope.is_disabled=true;
  $scope.componentDidMount=function(){
    $scope.confirm();
  }
  $scope.confirm=function(){
    return $http({
      method:'get',
      url:'/conform?teacherId=${$scope.current_teacherId}`',
      headers: {'Content-Type': "application/json; charset = utf-8"}
    }).then(function(result){
      result = result.json()
        
    }).then(function(result){
        $scope.books=result
    }).catch(function(err){
      console.log({ err: 'error' }, err);
    })
  }
  //////////////////////////////weird function/ needs modifing////////
  $scope.answer=function(event){

    return $http({
      method:'get',
      url:'/conformAnswer?id=${event.target.name}&confirmed=${event.target.value}&teacherId=${this.current_teacherId}`',
      headers: {'Content-Type': "application/json; charset = utf-8"}
    }).then(function(result){
      result = result.json()
        
    }).then(function(result){
        $scope.books=result
    }).catch(function(err){
      console.log({ err: 'error' }, err);
    })
  }
  ///////////////////////////////
}])

.component('confirm',{
  bindings: {
      closeModal:'<',
      openModal:'<'
    },
    controller: 'ConfirmController',
    templateUrl: '/templates/Confirm.html'

})
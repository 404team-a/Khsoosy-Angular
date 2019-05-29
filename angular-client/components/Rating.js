angular.module('app')
.controller('rateController'['$scope',function($scope,$http){
  $scope.ratingText='';
  $scope.rate='';
  $scope.rateMessage='Thank you for your feedback!'

  $scope.rating=function(){
    var body = {
      rating :$scope.ratingText,
      tera:$scope.rate,
      teacherId:this.teachrId,
      stdId:this.stdId
    }
    $http({
			method:'post',
			url:'/rating',
			data:JSON.stringify(body),
		  headers: {'Content-Type': "application/json; charset = utf-8"}
		}).then(function(response){
        console.log('success')
            
		}).catch(function(){
			console.log('big error')
		})
  }

}])



.component('Rating',{
  bindings: {
    teacherId:'<',
    stdId:'<'
    },
    controller: 'rateController',
    templateUrl: '/templates/Rating.html'

})
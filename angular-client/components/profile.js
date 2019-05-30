angular.module('app')

.controller('ProfileCtrl',function($scope,$http){
   // $scope.cv=''
   $scope.updatedmsg = "thanks a lote "

  console.log("okkkkkk")
   $scope.componentDidMount = () => {
       const id = $scope.current_teacherId;
       $scope.current_teacherId = id
       $scope.showTeacherInfo(id)
   }
   $scope.showTeacherInfo = (id) => {
       return $http({
        url:`/teacherProfile/${id}`,
   		method: 'GET',
   		headers: {
   			'Content-Type': 'application/json',
   			Accept: 'application/json'
   		}
   	})
   		.then((response) => (response = response.json()))
   		.then((data) => {
   			// console.log(data);
               
   				$scope.userName = data.name
   				$scope.cvFileUrl = data.cvFile
   				$scope.imgUrl= data.img
   				$scope.email = data.email
   				$scope.phone = data.phone
   				$scope.location = data.location
   				$scope.summary = data.summary
   				$scope.schedules = data.schedules
   				$scope.ratings = data.ratings
   				$scope.subjectName = data.subjects[0].name
   				$scope.subjectLevel = data.subjects[0].level
               
   		})
   		.catch((err) => console.log(err));
   }
   $scope.updateInfo = () => {
    $scope.current_teacherId = 1234
   	console.log("update please",$scope.current_teacherId)
       const body = {
   		userName:$scope.userName ,
   		cvFileUrl: $scope.cvFileUrl,
   		imgUrl: $scope.imgUrl,
   		summary: $scope.summary,
   		email:$scope.email,
   		phone: $scope.phone,
   		location: $scope.location,
   		current_teacherId:$scope.current_teacherId ,
   		schedules: $scope.schedules,
   		subjectName: $scope.subjectName ,
   		subjectLevel: $scope.subjectLevel
   	};
   	$http({
        url:"/updateTeacherProfile",
   		method: 'put',
   		body: JSON.stringify(body),
   		headers: { 'Content-Type': 'application/json' }
   	})
   		.then((response) => {
               console.log("hisssss",response)
   			return response
   		})
   		.then((resp) => {
            $scope.showTeacherInfo($scope.current_teacherId);
   			$scope.updatedMsg = "Updated !";
   		});  

   }
   $scope.changeCV = (cvFileUrl) => {
       $scope.cvFileUrl = cvFileUrl
   }
   $scope.changeImg = (imgUrl) => {
       $scope.imgUrl = imgUrl
   }
   $scope.changeSchedules = (schedules) => {
       $scope.schedules = schedules
   }

})
.component('profile' ,{
   controller : "ProfileCtrl",
   templateUrl : "/templates/profile.html" 
})	
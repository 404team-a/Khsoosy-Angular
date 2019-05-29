angular.module('app')
 .controller('ProfileCtrl',function($scope,$http){
    $scope.cv=''
   $scope.updatedMsg = "thanks a lote "

   
    $scope.componentDidMount = () => {
        const id = $scope.current_teacherId;
        $scope.current_teacherId = id
        $scope.showTeacherInfo(id)
    }
    $scope.showTeacherInfo = (id) => {
        return $http(`/teacherProfile/${id}`, {
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
        const body = {
			userName:$scope.userName ,
			cvFileUrl: $scope.cvFileUrl,
			imgUrl: $scope.imgUrl,
			summary: $scope.summary,
			email:$scope.email,
			phone: $scope.phone,
			location: $scope.location,
			current_teacherId:$ctrl.current_teacherId ,
			schedules: $scope.schedules,
			subjectName: $scope.subjectName ,
			subjectLevel: $scope.subjectLevel
		};
		$http('/updateTeacherProfile', {
			method: 'put',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		})
			.then((response) => {
				return response.json();
			})
			.then((resp) => {
				this.showTeacherInfo($ctrl.current_teacherId);
				$ctrl.updatedMsg = "Updated !";
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
.component('Profile' ,{
    controller : "ProfileCtrl",
    templateUrl : "angular-client/templates/profile.html" 
})	
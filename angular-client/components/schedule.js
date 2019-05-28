angular
  .module("app", [])

  .controller("ScheduleController", function($scope) {
    $scope.schedules = [];
    $scope.startHour = "";
    $scope.add = function() {
      if ($scope.startHour) {
        $scope.schedules.push(this.startHour);
        $scope.startHour = "";
      }
      $scope.delete = function() {
        $scope.schedules.splice(this.$index, 1);
      };
    };
  })

  .component("schedule", {
    controller: "ScheduleController",
    templateUrl: "angular-client/templates/schedule.html"
  });

// angular
//   .module("app")
//   .controller("ScheduleController", [
//     "$scope",
//     function($scope) {
//       $scope.day = "Sunday";
//       $scope.startHour = "";
//       $scope.endHour = "";
//       $scope.message = "";
//       $scope.schedules = [];
//       $scope.entry = false;

//       $scope.addSchedule = () => {
//         const { day, startHour, endHour } = this.$scope;
//         const temp = this.$scope.schedules;
//         if (
//           startHour >= endHour ||
//           _.pluck(this.props.schedules, "day").includes(day)
//         ) {
//           // console.log(startHour, endHour);
//         }
//       };
//     }
//   ])

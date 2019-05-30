angular
  .module("app")

  .controller("ScheduleController", function($scope) {
    $scope.schedules = [];
    //rowArr[0] = day
    //rowArr[1] = startHour
    //rowArr[2] = endHour
    $scope.rowArr = ["Sunday", "", ""];
    $scope.isVisible = false;
    $scope.add = function() {
      if ($scope.rowArr[0] && $scope.rowArr[1] && $scope.rowArr[2]) {
        $scope.schedules.push($scope.rowArr);
        $scope.rowArr = [];
        // console.log($scope.schedules);
      }
      $scope.showHide = function() {
        $scope.isVisible = true;
      };
      $scope.delete = function() {
        $scope.schedules.splice(this.$index, 1);
        // console.log($scope.schedules);
      };
      $scope.hide = function() {
        if ($scope.schedules.length === 0) {
          $scope.isVisible = false;
        }
      };
    };
  })

  .component("schedule", {
    controller: "ScheduleController",
    templateUrl: "/templates/schedule.html"
  });

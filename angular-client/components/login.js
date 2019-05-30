angular
  .module(app)

  .controller("LoginController", function($scope) {
    $scope.email = "";
    $scope.password = "";
    $scope.current_teacherId = "";
    $scope.current_studentId = "";
    $scope.logInMessage = "Welcome to Khsoosi!";
    $scope.errorLogin = "Please Try Again";

    $scope.sumbit = function() {};
    $scope.loging = function() {};
  })

  .component("Login", {
    controller: "LoginController",
    templateUrl: "/templates/login.html"
  });

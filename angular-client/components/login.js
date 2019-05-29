angular
  .module(app)

  .controller("LoginController", function($scope) {
    $scope.email = "";
    $scope.password = "";
    $scope.loginMessage = "Welcome to Khsoosi!";
    $scope.loginErrorMessage = "Please Try Again";

    $scope.sumbit = function() {};
  })

  .component("Login", {
    controller: "LoginController",
    templateUrl: "/templates/login.html"
  });

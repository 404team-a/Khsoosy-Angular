angular
  .module(app)

  .controller("LoginController", function(
    $scope,
    $http,
    $location,
    $rootScope
  ) {
    $scope = {
      email: "",
      password: "",
      current_teacherId: "",
      current_studentId: "",
      logInMessage: "Welcome to Khsoosi!",
      errorLogin: "Please Try Again"
    };

    $scope.sumbit = function() {
      $scope.loging = function() {
        $http({
          method: "post",
          url: "/login",
          data: JSON.stringify({
            username: $scope.username,
            password: $scope.password
          }),
          headers: { "Content-Type": "application/json; charset = utf-8" }
        })
          .then(response => response.json())
          .then(function(data) {
            // $rootScope.data = response.data[0];
            // $location.path("/profile");
            if (data.error) {
              $scope.logInMessage = "";
              $scope.email = "";
              $scope.password = "";
              $scope.errorLogin = "Please Try Again";
            }

            let user_id = "current_studentId";
            if (data.is_teacher) user_id = "current_teacherId";
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);

            (errorLogin = ""),
              (password = ""),
              (email = ""),
              (loginMessage = "Welcome to Khsoosi!"),
              ([user_id] = data.user_id),
              (is_teacher = data.is_teacher);

            let obj = {
              is_teacher: this.state.is_teacher,
              current_teacherId: $scope.current_teacherId,
              current_studentId: $scope.current_studentId
            };
            // here is a function passed from another component >>>needs bindings ($ctrl.onLogin)
            // this.props.onLogin(obj);
            // setTimeout(() => {
            // 	this.props.closeModal('Login');
            // 	this.setState({ loginMessage: '' });
            // }, 500);
          })
          .catch(function() {
            console.log("server error");
          });
      };
    };
  })

  .component("Login", {
    controller: "LoginController",
    templateUrl: "/templates/login.html"
  });

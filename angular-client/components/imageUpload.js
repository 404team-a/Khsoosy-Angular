angular
  .module("app")

  .controller("ImageUploadController", function($scope) {
    $scope = {
      storage: {},
      files: [],
      image: null,
      imgUrl: "",
      progress: 0
    };

    $scope.imgUpload() {
      $scope.imgUrl = $scope.imgUrl
    }
  })

  .component("imageupload", {
    controller: "ImageUploadController",
    templateUrl: "/templates/schedule.html"
  });

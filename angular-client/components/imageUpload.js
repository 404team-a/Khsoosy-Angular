angular
  .module("app")

  .controller("ImageUploadController", function($scope) {
    $scope = {
      storage: {},
      files: [],
      image: null,
      imgUrl: "",
      progress: 0,
      appearImg = false,
      showProgress = false,
    };

    $scope.imgUpload = function () {
      $scope.imgUrl = imgUrl;
      if ($scope.image) {
        $scope.showImg = () => {
          appearImg = true;
        } 
      }
      uploadTask.on(
        "Uploading Progress",
        snapshot => {
          //progress function ....
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ....
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(imgUrl => {
              setTimeout(() => {
                $scope.showProgress({ imgUrl, progress: 0 }, () =>
                  changeImg($scope.imgUrl)
                );
              }, 2000);
            });
        }
      );
    }
  })

  .component("imageupload", {
    bindings: {
      imgUrl:'<',
      changeImg: '<'
    },
    controller: "ImageUploadController",
    templateUrl: "/templates/schedule.html"
  });

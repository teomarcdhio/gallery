angular.module("gallery", ["ngAnimate"])
  .controller("galleryCtrl", function($scope){
    $scope.slides = [
      {image: "images/bandw/1.jpg", description: 'First picture'},
      {image: "images/bandw/2.jpg", description: 'Second picture'},
      {image: "images/bandw/3.jpg", description: 'Third picture'},
    ];
    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
  });

angular.module("collection", ['ui.router'])

.controller("CollectionCtrl", ['$stateParams', '$state', '$scope', 'pics', function($stateParams, $state, $scope, pics) {

        $scope.params = $stateParams;
        console.log($state);
        console.log(pics.data);
        $scope.pics = pics.data;

        /*$scope.pics = loadImages.get({ params: $scope.params }).then(function(data) {
                          console.log($scope.params);
                          $scope.pics = data.data;
                          console.log($scope.pics);
                          return data.data;
                      })*/

    }])
    .directive('lightgallery', function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          if (scope.$last) {

            console.log(scope.$last);
            lightGallery(document.getElementById('lightgallery'));
          }
        }
      };
    });

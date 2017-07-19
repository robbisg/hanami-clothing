angular.module("collection", ['ui.router'])

.controller("CollectionCtrl", ['$stateParams', '$state', '$scope', 'loadImages', function($stateParams, $state, $scope, loadImages) {

        $scope.params = $stateParams;
        console.log($state);
        console.log($stateParams);

        $scope.pics = loadImages.get({ params: $scope.params }).then(function(data) {
                          console.log($scope.params);
                          $scope.pics = data.data;
                          console.log($scope.pics);
                          return data.data;
                      })

    }])
    .directive('ngMasonry', function($timeout) {
        return function(scope, element, attrs) {

            if (scope.$last){
                $timeout(function () {
                    var parent = element.parent();
                    var masonry = new Masonry(parent[0], {
                        itemSelector: '.grid-item',
                        columnWidth: 300,

                    })
                  })
                }
              }
            })
    .factory('loadImages', ["$http", function($http) {
        var promise = null;

        return {
            get: function(params) {
                if (promise) { // If we've already asked for this data once,
                    // return the promise that already exists.
                    return promise;
                } else {
                    promise = $http.get('data/' + params.params.collectionId + '.json');
                    return promise;
                }
            }
        };
    }]);

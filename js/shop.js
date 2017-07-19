angular.module('shop', [
                          //'dynamicLayout'
      ])
      .factory('loadImages', function($http){
        var promise = null;

          return function() {
            if (promise) {
              // If we've already asked for this data once,
              // return the promise that already exists.
              return promise;
            } else {
              promise = $http.get('data/shop.json');
              return promise;
            }
          };
        })
	     .controller('ShopController',[ "$scope", 'loadImages',function($scope, loadImages){
         console.log('Starting Service Incident Controller');
          loadImages().then(function(data) {
            $scope.pics = data.data;
            console.log($scope.pics);
        });


       }]);

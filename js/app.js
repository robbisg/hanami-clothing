var hanami = angular.module('app', ['ui.router',
    'gilbox.sparkScroll',
    'ui.materialize',
    'wu.masonry',
    'shop',
    'contacts',
    'collection',
]).directive('footerHanami',
              function () {
                  return {
                    restrict: "E",
                    templateUrl: 'templates/footer-content.html',
                  };
  }).directive('navbarHanami',
                function () {
                  return {
                    restrict: "E",
                    scope: {
                      opacityValue: "@"
                    },
                    templateUrl: 'templates/navbar.html',
                  }
  }).controller("NavController", ["$scope", function ($scope){

    }

  ]);


hanami.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    var content = {
        name: 'content',
        url: '/web',
        templateUrl: 'templates/content-materialize.html'
    };



    var collezioni = {
        name: 'content.collezioni',
        url: '/collezioni/:collectionId',
        templateUrl: 'templates/collection-materialize.html',
        resolve: {
          pics: function($stateParams, $http){
            console.log($stateParams);
            return $http.get('data/' + $stateParams.collectionId + '.json')
                .success(function(response) {
                  console.log(response);
                  return response;
                })
          }
        },
        controller: "CollectionCtrl"
    };

    var shopItem = {
        name: 'content.item',
        url: "/shop/:itemId",
        templateUrl: "templates/shop-item.html",
        resolve: {
          items: function($stateParams, $http){
            console.log($stateParams);
            return $http.get('data/shop-new.json')
                .success(function(response) {
                  console.log(response);
                  return response;
                })
          }
        },
        controller: "ItemController"
    };

    var shop = {
      name: 'content.shop',
      url: "/shop",
      templateUrl: "templates/shop.html",
      resolve: {
        shop: function($stateParams, $http){
          console.log($stateParams);
          return $http.get('data/shop-new.json')
              .success(function(response) {
                console.log(response);
                return response;
              })
        }
      },
      controller: "ShopController"

    }

    var home = {
        name: 'home',
        url: "/",
        templateUrl: "templates/home.html"
    }

    var about = {
        name: 'content.about',
        url: "/about",
        templateUrl: "templates/about.html"
    }

    var contacts = {
        name: 'content.contacts',
        url: "/contacts",
        templateUrl: "templates/contacts.html",
        controller: "ContactsController"
    }

    $stateProvider
        .state('home', home)
        .state("content", content)
        .state('content.collezioni', collezioni)
        .state('content.shop', shop)
        .state('content.item', shopItem)
        .state("content.about", about)
        .state("content.contacts", contacts)

      $urlRouterProvider.otherwise('/');
});

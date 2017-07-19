var hanami = angular.module('app', ['ui.router',
    //"pageslide-directive",
    //'slick',
    //"dynamicLayout",
    //'ui.bootstrap.collapse',
    'wu.masonry',
    'shop',
    'collection',
])

hanami.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    var home = {
        name: 'home',
        url: '/',
        data: { pageTitle: 'Hanami Clothing' },
        templateUrl: 'templates/home.html'
    };

    var content = {
        name: 'content',
        url: '/content',
        templateUrl: "templates/content-materialize.html"
    };

    var collezioni = {
        name: 'content.collezioni',
        url: "^/collezioni/:collectionId",
        templateUrl: "templates/collection-materialize.html",
        controller: "CollectionCtrl"
    };

    var shop = {
        name: 'content.shop',
        url: "^/shop",
        templateUrl: "templates/shop.html"
    };

    var home = {
        name: 'home',
        url: "^/home",
        templateUrl: "templates/home.html"
    }

    $stateProvider
        .state('home', home)
        .state("content", content)
        .state('content.collezioni', collezioni)
        .state('content.shop', shop)

});


hanami.controller('pageslideCtrl', ['$scope', function($scope) {
    $scope.checked = true;
    $scope.size = '10px';
    $scope.toggle = function() {
        $scope.checked = !$scope.checked
    }
    $scope.mockRouteChange = function() {
        $scope.$broadcast('$locationChangeStart');
    }
    $scope.onopen = function() {
        alert('Open');
        console.log(this, $scope);
    }
    $scope.onclose = function() {
        alert('Close');
        console.log($scope);
    }
}]);

hanami.controller('CollapseDemoCtrl', function($scope) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = true;
    $scope.isCollapsedHorizontal = false;
});

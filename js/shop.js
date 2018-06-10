angular.module('shop', [])
        .controller("ShopModalController", ["$scope", function($scope) {
          $scope.checkAvailability = function(productCode){
              console.log(productCode)
              var email = 'shop@hanamiclothing.it';
              var subject = '[shop] Richiesta';
              var emailBody = 'Disponibiltà per il prodotto: '+productCode;
              window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;


          }

        }])
       .controller("ShopController", ['$stateParams', '$state', '$scope', 'shop', function($stateParams, $state, $scope, shop) {

              $scope.params = $stateParams;
              $scope.shop = shop;





              $scope.fadeImages = function(id){
                //Materialize.fadeInImage('#shop-'+id);
              }

              $scope.hexToRgb = function hexToRgbA(id, hex){
                  var c;
                  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                      c= hex.substring(1).split('');
                      if(c.length== 3){
                          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                      }
                      c= '0x'+c.join('');

                      var result = 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', 0.25)';
                      $("#shop-"+id).css("background-color", result);
                      return result;
                  }
                  throw new Error('Bad Hex');
              }

          }])
          .controller("ItemController", ['$stateParams', '$state', '$scope', 'items', function($stateParams, $state, $scope, items) {

              $scope.params = $stateParams;
              $scope.item = items.data.filter((item) => item.id == $stateParams.itemId).pop();

              $scope.selectItem = function(item, event){
                console.log($scope.selected)
                $("div.shop-item-main > div > img").attr("src", item);

                $(".shop-subimage").removeClass("shop-active")
                $scope.selected = item.slice(-9,-4)
                $("#"+$scope.selected).addClass("shop-active")

              }

              $scope.hexToRgb = function hexToRgbA(id, hex){
                  var c;
                  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                      c= hex.substring(1).split('');
                      if(c.length== 3){
                          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                      }
                      c= '0x'+c.join('');

                      var result = 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', 0.25)';
                      $(".container-fluid").css("background-color", result);
                      return result;
                  }
                  throw new Error('Bad Hex');
              }

          }]).directive('shopModal', function () {

                return {
                  restrict: "E",
                  scope: {
                     item: '='
                  },
                  templateUrl: 'templates/shop-modal.html',
                };
          });

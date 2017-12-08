angular.module('contacts', [])
       .controller("ContactsController", ['$interval', '$scope', function($interval, $scope) {

           $scope.readyCallback = function () {
               Materialize.toast("Modal ready", 1000);
           }
           $scope.completeCallback = function () {
               Materialize.toast("Modal complete", 1000);
           }

          $scope.openModal = false;

          $scope.checkTime = function() {

            var now = new Date();

            var weekday = new Array(7);
            weekday[0] = "Domenica";
            weekday[1] = "Lunedì";
            weekday[2] = "Martedì";
            weekday[3] = "Mercoledì";
            weekday[4] = "Giovedì";
            weekday[5] = "Venerdì";
            weekday[6] = "Sabato";

            var today = weekday[now.getDay()];
            var timeDiv = document.getElementById('timeDiv');
            var dayOfWeek = now.getDay();
            var hour = now.getHours();
            var minutes = now.getMinutes();

            //add AM or PM
            var suffix = hour >= 12 ? "PM" : "AM";

            // add 0 to one digit minutes
            if (minutes < 10) {
              minutes = "0" + minutes
            };

            var dayTime = hour + (minutes/60)
            console.log(dayTime);

            if ((dayOfWeek == 1) && dayTime >= 16.5 && dayTime <= 20) {
              hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
              timeDiv.innerHTML = 'E\' ' + today + ' e sono le ' + hour + ':' + minutes + suffix + ' - Vieni a trovarci, siamo aperti';
              timeDiv.className = 'open-text';
            }

            else if ((dayOfWeek >= 2 && dayOfWeek <= 6) && ((dayTime >= 16.5 && dayTime <= 20) || (dayTime >= 10 && dayTime <= 13) )) {
              hour = ((hour + 11) % 12 + 1);
              timeDiv.innerHTML = 'E\' ' + today + ' e sono le ' + hour + ':' + minutes + suffix + ' - Vieni a trovarci, siamo aperti';
              timeDiv.className = 'open-text';
            }

            else {
              if (hour == 0 || hour > 12) {
                hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
              }
              timeDiv.innerHTML = 'E\' ' + today + ' e sono le ' + hour + ':' + minutes + suffix + ' - Siamo Chiusi';
              timeDiv.className = 'closed-text';
            }
          };

          $scope.init = function () {


            var now = new Date();
            weekday = new Array(7);
            weekday[0] = "Domenica";
            weekday[1] = "Lunedì";
            weekday[2] = "Martedì";
            weekday[3] = "Mercoledì";
            weekday[4] = "Giovedì";
            weekday[5] = "Venerdì";
            weekday[6] = "Sabato";


            var currentDay = weekday[now.getDay()];
            var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
            $(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup
            if ($('#timeDiv').length != 0 ){

              $scope.Timer = $interval(this.checkTime, 60000);
              this.checkTime();
            }

          }

          $scope.$on("$destroy",function(){
            if (angular.isDefined($scope.Timer)) {
                $interval.cancel($scope.Timer);
            }
});

}]).directive('openingModal', function () {

                return {
                  restrict: "E",
                  templateUrl: 'templates/modal-opening.html',
                };
          })

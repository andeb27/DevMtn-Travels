angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

    var booking = function() {
        for (var i = 0; i < mainSrv.travelInfo.length; i++) {
            if(parseInt($stateParams.id) === mainSrv.travelInfo[i].id) {
                $scope.location = mainSrv.travelInfo[i];
               
            }
        }
    }
    booking();

    $scope.background = {
        'background' :  'url('+$scope.location.image + ')no-repeat center'
    }
})
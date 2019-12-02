var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http, $log) {
        var successCallBack = function (response) {
            $scope.employees = response.data;
            $log.info(response);
        };

        var errorCallBack = function (reason) {
            $scope.error = reason.data;
            $log.info(reason);
        }

        $http({
            method: 'GET',
            url: '/Services/ConsumingASPWebService.asmx/GetAllEmployees'
        }).then(successCallBack, errorCallBack);


        //$scope.employees = $http.get('/Services/ConsumingASPWebService.asmx/GetAllEmployees')
        //    .then(function (response) {
        //        $scope.employees = response.data;
        //    }, function (reason) {
        //        $scope.error = reason.data;
        //        $log.info(reason);
        //    });


        //$http.get('/Services/ConsumingASPWebService.asmx/GetAllEmployees')
        //    .then(successCallBack, errorCallBack);



        //$http.get("/Services/ConsumingASPWebService.asmx/GetAllEmployees")
        //    .then(function (response) {
        //        $scope.employees = response.data;
        //    });
    });
var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Html/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "Html/courses.html",
                controller: "coursesController"
            })
            .when("/students", {
                templateUrl: "Html/students.html",
                controller: "studentsController"
            })
            .otherwise({
                redirectTo: "/home"
            })
        $locationProvider.html5Mode(true);
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http, $route) {
        $scope.reloadRoute = function ()
        {
            $route.reload();
        }
        $http.get("Services/StudentService.asmx/GetAllStudents")
            .then(function (response) {
                $scope.students = response.data;
            })
    })
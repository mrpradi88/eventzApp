(function(){angular.module('myApp',['ngRoute','ngAnimate','ui.bootstrap','angular.filter'])

.config(function($routeProvider){
            $routeProvider
                .when('/',{
                    templateUrl:'/body.html',
                    controller : 'indexBodyController'
                })
               
                .when('/gallery',{
                    templateUrl:'/html/nav_layouts/gallery.html',
                    controller: 'galleryController'
                })
                .when('/allservices',{
                    templateUrl:'/html/nav_layouts/allservices.html',
                    controller: 'galleryController'
                })
                .when('/birthdayparty',{
                    templateUrl:'/html/nav_layouts/birthdayparty.html',
                    controller: 'galleryController'
                })
                .when('/wedding',{
                    templateUrl:'/html/nav_layouts/wedding.html',
                    controller: 'galleryController'
                })
                .otherwise('/',{
                    templateUrl:'/body.html',
                    controller : 'indexBodyController'
                })



})
})();
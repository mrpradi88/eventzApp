(function(){angular.module('myApp',['ngRoute','ngAnimate','ui.bootstrap','angular.filter'])

.config(function($routeProvider){
            $routeProvider
                .when('/',{
                    templateUrl:'/body.html',
                    controller : 'indexBodyController'
                })
                .when('/products',{
                            templateUrl:'/nav_layouts/products.html',
                            controller: 'productController'
                        })
                .when('/gallery',{
                    templateUrl:'/nav_layouts/gallery.html',
                    controller: 'galleryController'
                })
                .when('/allservices',{
                    templateUrl:'/nav_layouts/allservices.html',
                    controller: 'galleryController'
                })
                .when('/birthdayparty',{
                    templateUrl:'/nav_layouts/birthdayparty.html',
                    controller: 'galleryController'
                })
                .when('/wedding',{
                    templateUrl:'/nav_layouts/wedding.html',
                    controller: 'galleryController'
                })
                .otherwise('/',{
                    templateUrl:'/body.html',
                    controller : 'indexBodyController'
                })



})
})();
(function(){
	angular.module('eventzApp',['ngMaterial','ngRoute','angular.filter','ngMessages'])
	.config(['$routeProvider','$mdThemingProvider', 
        function($routeProvider,$mdThemingProvider){
            
            $routeProvider
                .when('/',{
                    templateUrl:'/html/nav_layouts/allservices.html'
                })
                .when('/corporate',{
                            templateUrl:'/html/nav_layouts/carporate.html',
                            controller: 'carporateController'
                        })
               /* .when('/gallery',{
                    templateUrl:'/nav_layouts/gallery.html',
                    controller: 'galleryController'
                })
                .when('/allservices',{
                    templateUrl:'/nav_layouts/allservices.html',
                    controller: 'galleryController'
                })*/
                .when('/birthdayparty',{
                    templateUrl:'/html/nav_layouts/birthdayparty.html',
                    controller: 'birthdayController'
                })
                .when('/wedding',{
                    templateUrl:'/html/nav_layouts/wedding.html',
                    controller: 'weddingController'
                })
                 .when('/photoandvideo',{
                    templateUrl:'/html/nav_layouts/photoandvideo.html',
                    controller: 'photoAndVideoController'
                })
                 .when('/artworks',{
                    templateUrl:'/html/nav_layouts/artworks.html',
                    controller: 'artWorksController'
                })
                .otherwise('/',{
                    templateUrl:'/html/nav_layouts/allservices.html',
                    controller : 'allServicesController'
                })



              $mdThemingProvider.definePalette('amazingPaletteName', {
                '50': 'ffebee',
                '100': 'ffcdd2',
                '200': 'ef9a9a',
                '300': 'e57373',
                '400': 'ef5350',
                '500': 'f44336',
                '600': 'e53935',
                '700': 'd32f2f',
                '800': 'c62828',
                '900': 'b71c1c',
                'A100': 'ff8a80',
                'A200': 'ff5252',
                'A400': 'ff1744',
                'A700': 'd50000',
                'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                    // on this palette should be dark or light
                'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                 '200', '300', '400', 'A100'],
                'contrastLightColors': ['50', '100', //hues which contrast should be 'dark' by default
                 '200', '300', '400', 'A100']   // could also specify this if default was 'dark'
              });
              $mdThemingProvider.theme('amazing')
                .primaryPalette('amazingPaletteName');

                $mdThemingProvider.theme('default')
                .primaryPalette('light-blue')
                .accentPalette('pink');
            }])

})();
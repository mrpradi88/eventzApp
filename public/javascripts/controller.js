(function(){
    angular.module('eventzApp')


        .controller('indexBodyController',function($scope){

})

.controller('tabController',function($scope){
    $scope.times = [1,2,3,4,5,6];
    $scope.images = {image1:'/images/placehold.gif',image2:'/images/placehold.gif',image3:'/images/placehold.gif',
        image4:'/images/placehold.gif',image5:'/images/placehold.gif',image6:'/images/placehold.gif'};

})
        .controller('cartController',function($scope,cartFactory){
            $scope.cService = 0;
            $scope.wService = 0;
           /* $scope.cService = cartFactory.cartProduct.length || 0;*/

            $scope.$on('addedToCart',function(event,data){
                
                var productsInCart = cartFactory.cartProduct;
                console.log("AddTo Cart Notify in cart_____________",data.count)
                if(productsInCart.indexOf(data.pid) != -1){
                    $scope.cService = data.count;
                }
            })
           $scope.$on('removedFromCart',function(event,data){
             console.log("remove from Cart Notify in cart_____________",data.count)
                var productsInCart = cartFactory.cartProduct;
               $scope.cService = data.count;
            })
            $scope.$on('addedToWishlist',function(event,data){
                console.log("AddTo Cart Notify in cart_____________")
                var productsInCart = cartFactory.wishlistProduct
                if(productsInCart.indexOf(data.pid) != -1){
                    $scope.wService = productsInCart.length;
                }
            })
            $scope.$on('removedFromWishlist',function(event,data){
                var productsInCart = cartFactory.wishlistProduct;
                $scope.wService = data.count;
            })

        })
.controller('productController',['cartFactory','$scope',function(cartFactory,$scope){

            $scope.products = [{title:"Product 1",disc:"discription",imgurl:"/images/placehold.gif",id:"1"},
                        {title:"Product 2",disc:"discriptiondiscriptiondiscriptiondiscriptiondiscription",imgurl:"/images/placehold.gif",id:"2"},
                        {title:"Product 3",disc:"discription",imgurl:"/images/placehold.gif",id:"3"},
                        {title:"Product 4",disc:"discription",imgurl:"/images/placehold.gif",id:"4"},
                        {title:"Product 5",disc:"discription",imgurl:"/images/placehold.gif",id:"5"},
                        {title:"Product 6",disc:"discription",imgurl:"/images/placehold.gif",id:"6"},
                        {title:"Product 7",disc:"discription",imgurl:"/images/placehold.gif",id:"7"},
                        {title:"Product 8",disc:"discription",imgurl:"/images/placehold.gif",id:"8"},
                        {title:"Product 9",disc:"discription",imgurl:"/images/placehold.gif",id:"9"},
                        {title:"Product 10",disc:"discription",imgurl:"/images/placehold.gif",id:"10"},
                        {title:"Product 11",disc:"discription",imgurl:"/images/placehold.gif",id:"11"},
                        {title:"Product 12",disc:"discription",imgurl:"/images/placehold.gif",id:"12"},
                        {title:"Product 13",disc:"discription",imgurl:"/images/placehold.gif",id:"13"},
                        {title:"Product 14",disc:"discription",imgurl:"/images/placehold.gif",id:"14"},
                        {title:"Product 15",disc:"discription",imgurl:"/images/placehold.gif",id:"15"}];


            $scope.$on('addedToCart',function(event,data){
                console.log("AddTo Cart Notify")
                //$scope.isAddedToCart(data.pid);
            })
            $scope.$on('product:addedToWishlist',function(event,data){
                //$scope.isAddedToWishlist(data.pid);
            })
            $scope.$on('removedFromCart',function(event,data){
                console.log("remove in CONTRS&&&&&"+data.pid)
               // $scope.isAddedToCart(data.pid);
            })
            $scope.$on('product:removedFromWishlist',function(event,data){
               // $scope.showWishlist = $scope.isAddedToWishlist(data.pid);
            })


}])


            .controller('galleryController',function($scope){
                $scope.times = [1,2,3,4,5,6];
                $scope.images = {image1:'/images/placehold.gif',image2:'/images/placehold.gif',image3:'/images/placehold.gif',
                    image4:'/images/placehold.gif',image5:'/images/placehold.gif',image6:'/images/placehold.gif'};

            })

            .controller('birthdayController',function($scope,dataFactory){
                $scope.data={services : dataFactory.birthDaydata}
                $scope.$on('addedToCart',function(event,data){
                    console.log("AddTo Cart Notify")
                    //$scope.isAddedToCart(data.pid);
                })
                $scope.$on('product:addedToWishlist',function(event,data){
                    //$scope.isAddedToWishlist(data.pid);
                })
                $scope.$on('removedFromCart',function(event,data){
                    console.log("remove in CONTRS&&&&&"+data.pid)
                    // $scope.isAddedToCart(data.pid);
                })
                $scope.$on('product:removedFromWishlist',function(event,data){
                    // $scope.showWishlist = $scope.isAddedToWishlist(data.pid);
                })

            })

        .controller('weddingController',function($scope,dataFactory){
            $scope.data={services : dataFactory.weddingData}
            $scope.$on('addedToCart',function(event,data){
                console.log("AddTo Cart Notify")
                //$scope.isAddedToCart(data.pid);
            })
            $scope.$on('product:addedToWishlist',function(event,data){
                //$scope.isAddedToWishlist(data.pid);
            })
            $scope.$on('removedFromCart',function(event,data){
                console.log("remove in CONTRS&&&&&"+data.pid)
                // $scope.isAddedToCart(data.pid);
            })
            $scope.$on('product:removedFromWishlist',function(event,data){
                // $scope.showWishlist = $scope.isAddedToWishlist(data.pid);
            })

        })
        .controller('carporateController',function($scope,dataFactory){
                $scope.data={services : dataFactory.corporateData}
                $scope.$on('addedToCart',function(event,data){
                    console.log("AddTo Cart Notify")
                    //$scope.isAddedToCart(data.pid);
                })
                $scope.$on('product:addedToWishlist',function(event,data){
                    //$scope.isAddedToWishlist(data.pid);
                })
                $scope.$on('removedFromCart',function(event,data){
                    console.log("remove in CONTRS&&&&&"+data.pid)
                    // $scope.isAddedToCart(data.pid);
                })
                $scope.$on('product:removedFromWishlist',function(event,data){
                    // $scope.showWishlist = $scope.isAddedToWishlist(data.pid);
                })

            })

        .controller('photoAndVideoController',function($scope,dataFactory){
                $scope.data={services : dataFactory.photoAndVideo}
                $scope.$on('addedToCart',function(event,data){
                    console.log("AddTo Cart Notify")
                    //$scope.isAddedToCart(data.pid);
                })
                $scope.$on('product:addedToWishlist',function(event,data){
                    //$scope.isAddedToWishlist(data.pid);
                })
                $scope.$on('removedFromCart',function(event,data){
                    console.log("remove in CONTRS&&&&&"+data.pid)
                    // $scope.isAddedToCart(data.pid);
                })
                $scope.$on('product:removedFromWishlist',function(event,data){
                    // $scope.showWishlist = $scope.isAddedToWishlist(data.pid);
                })

            })
        .controller('artWorksController',function($scope,dataFactory){
                $scope.data={services : dataFactory.craftWorks}
                $scope.$on('addedToCart',function(event,data){
                    console.log("AddTo Cart Notify")
                    //$scope.isAddedToCart(data.pid);
                })
                $scope.$on('product:addedToWishlist',function(event,data){
                    //$scope.isAddedToWishlist(data.pid);
                })
                $scope.$on('removedFromCart',function(event,data){
                    console.log("remove in CONTRS&&&&&"+data.pid)
                    // $scope.isAddedToCart(data.pid);
                })
                $scope.$on('product:removedFromWishlist',function(event,data){
                    // $scope.showWishlist = $scope.isAddedToWishlist(data.pid);
                })

            })

        .controller('allServicesController',function($scope,dataFactory){
            

        })

        /*.directive('productButtonCard',function(){
            return{
                templateUrl:'/nav_layouts/product_button.html',
                restrict:'E',
                replace:false,
                /!*scope:{
                    addToCartMethod : '&',
                },*!/
                link:function(scope,element,attrs,controller){

                },
                controller:function($scope,cartFactory){
                    $scope.showCart = false;
                    $scope.showWishlist = false;


                }


            }

        })*/



})();
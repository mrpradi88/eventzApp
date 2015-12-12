(function(){
    angular.module('eventzApp')
        .directive('cartButton',function(){
            return{
                templateUrl:'/html/nav_layouts/product_button.html',
                restrict:'E',
                scope:true,
                controller:function($scope,dataFactory){
                    $scope.showCart = false;
                    $scope.showWishlist = false;
                    $scope.isAddedToCart = function(productId) {
                        var productsInCart = cartFactory.cartProduct;
                        return (productsInCart.indexOf(productId) != -1)?true:false;
                    }
                    $scope.isAddedToWishlist = function(productId){
                        var productsInWishlist = cartFactory.wishlistProduct;
                        return (productsInWishlist.indexOf(productId) != -1)?true:false;
                    }
                    $scope.addToCart = function(productId,product){
                        console.log('Added To Cart :'+productId)
                        cartFactory.addToCartProducts(productId,product);
                        $scope.showCart = !$scope.showCart;
                    }
                    $scope.removeFromCart = function(productId){
                        console.log('removed from Cart :'+productId)
                        cartFactory.removeFromCartProducts(productId);
                        $scope.showCart = !$scope.showCart;
                    }

                    $scope.addToWishlist = function(productId){
                        cartFactory.addToWishlistProducts(productId);
                        $scope.showWishlist = !$scope.showWishlist;
                        console.log('Added To wishlist :'+productId)
                    }
                    $scope.removeFromWishlist = function(productId){
                        cartFactory.removeFromWishlistProducts(productId);
                        $scope.showWishlist = !$scope.showWishlist;
                        console.log('Removed from wishlist :'+productId)
                    }

                }
            }
        })
        .directive('cartCard',function(){
            return{
                templateUrl:'/html/nav_layouts/cartbuttons.html',
                restrict:'E',
                scope:true,
                controller:function($scope,cartFactory){
                    $scope.showCart = false;
                    $scope.showWishlist = false;
                    $scope.isAddedToCart = function(productId) {
                        var productsInCart = cartFactory.cartProduct;
                        return (productsInCart.indexOf(productId) != -1)?true:false;
                    }
                    $scope.isAddedToWishlist = function(productId){
                        var productsInWishlist = cartFactory.wishlistProduct;
                        return (productsInWishlist.indexOf(productId) != -1)?true:false;
                    }
                    $scope.addToCart = function($event,productId,product){
                        $event.stopPropagation();
                        $event.preventDefault();
                        cartFactory.addToCartProducts(productId,product);
                         var products = angular.fromJson(localStorage.getItem("products"));
                         
                         products.map(function(item){
                                if(item.id == productId){
                                    $scope.showCart = true;
                                }else{
                                    $scope.showCart = false;
                                }
                            })
                        
                    }
                    $scope.removeFromCart = function($event,productId){
                        $event.stopPropagation();
                        $event.preventDefault();
                        console.log('removed from Cart :'+productId)
                        console.log('removed from Cart list is  :'+ cartFactory.cartList)
                        cartFactory.removeFromCartProducts(productId);
                        $scope.showCart = false;
                        

                    }
                    $scope.checkKart = function(productId,product){

                        $scope.showCart = (localStorage.getItem(productId))?true:false;
                          
                     }
                    $scope.addToWishlist = function(productId){
                        cartFactory.addToWishlistProducts(productId);
                        $scope.showWishlist = !$scope.showWishlist;
                        console.log('Added To wishlist :'+productId)
                    }
                    $scope.removeFromWishlist = function(productId){
                        cartFactory.removeFromWishlistProducts(productId);
                        $scope.showWishlist = !$scope.showWishlist;
                        console.log('Removed from wishlist :'+productId)
                    }

                }
            }
        })
})();

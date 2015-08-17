(function(){
    angular.module('myApp')
    .factory('cartFactory',function($rootScope){

        var cartProduct =  [];
        var wishlistProduct = [];
            var cartList = [];
            var wishList = [];

        var addToCartProducts = function(productId,product){
            cartProduct.push(productId);
           // var product = {productId:product};
            cartList.push(product);
            console.log("PRODUCTID"+productId+" PRODUCT:"+product.id+":"+product.title+":"+product.price)
            $rootScope.$broadcast('addedToCart',{pid:productId,count:cartProduct.length});
        }
            var removeFromCartProducts = function(productId){
                cartProduct.pop(productId);
                $rootScope.$broadcast('removedFromCart',{pid:productId,count:cartProduct.length})
            }

        var addToWishlistProducts = function(productId){
            wishlistProduct.push(productId);
            $rootScope.$broadcast('addedToWishlist',{pid:productId,count:wishlistProduct.length});
        }
            var removeFromWishlistProducts = function(productId){
                wishlistProduct.pop(productId);
                $rootScope.$broadcast('removedFromWishlist',{pid:productId,count:wishlistProduct.length});
            }
        return {addToCartProducts : addToCartProducts,
                addToWishlistProducts:addToWishlistProducts,
                removeFromCartProducts:removeFromCartProducts,
                removeFromWishlistProducts:removeFromWishlistProducts,
                cartProduct:cartProduct,
                wishlistProduct:wishlistProduct}
    })
        .factory('birthdayContFactory',function($rootScope){

            var cartProduct =  [];
            var wishlistProduct = [];

            var addToCartProducts = function(productId){
                cartProduct.push(productId);
                $rootScope.$broadcast('addedToCart',{pid:productId,count:cartProduct.length});
            }
            var removeFromCartProducts = function(productId){
                cartProduct.pop(productId);
                $rootScope.$broadcast('removedFromCart',{pid:productId,count:cartProduct.length})
            }

            var addToWishlistProducts = function(productId){
                wishlistProduct.push(productId);
                $rootScope.$broadcast('addedToWishlist',{pid:productId,count:wishlistProduct.length});
            }
            var removeFromWishlistProducts = function(productId){
                wishlistProduct.pop(productId);
                $rootScope.$broadcast('removedFromWishlist',{pid:productId,count:wishlistProduct.length});
            }
            return {addToCartProducts : addToCartProducts,
                addToWishlistProducts:addToWishlistProducts,
                removeFromCartProducts:removeFromCartProducts,
                removeFromWishlistProducts:removeFromWishlistProducts,
                cartProduct:cartProduct,
                wishlistProduct:wishlistProduct}
        })


})();
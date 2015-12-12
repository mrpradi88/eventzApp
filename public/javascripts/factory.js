(function(){
    angular.module('eventzApp')
    .factory('cartFactory',function($rootScope){

        var cartProduct =  [];
        var wishlistProduct = [];
            var cartList = [];
            var wishList = [];
            var cartJson = {};
        function reloadDataFromLocalStorage(){
            if(cartList.length <= 0){
                cartJson = angular.fromJson(localStorage.getItem("products"));
                console.log("CARTJSON:",cartJson)
                    if(cartJson){
                  
                       cartJson.forEach(function(item){
                        cartList.push(item);
                       })
                    }
                }
        }
           reloadDataFromLocalStorage();
        var addToCartProducts = function(productId,product){
            //cartProduct.push(productId);
           // var product = {productId:product};
            cartList.push(product);
            console.log("addCART:",cartList)

            localStorage.setItem("products",angular.toJson(cartList))
            localStorage.setItem(productId,angular.toJson(product));
            console.log("COUNT LIST:",cartProduct.length)
            //$rootScope.$broadcast('addedToCart',{pid:productId,count:cartProduct.length});
        }
            var removeFromCartProducts = function(productId){
                console.log("REMOVE CART iN FACTORY")
                   console.log("ITEMS IN CART:",cartList);
                    cartList.forEach(function(item,index,array){
                        if(item.id == productId){
                        cartList.splice(index,1);
                    }
                    })
                    console.log("ITEMS IN CART after:",cartList);
                localStorage.setItem("products",angular.toJson(cartList))
                 localStorage.removeItem(productId);
               // $rootScope.$broadcast('removedFromCart',{pid:productId,count:cartProduct.length});
            }
            

        
        return {addToCartProducts : addToCartProducts,
                removeFromCartProducts:removeFromCartProducts,
                cartProduct:cartProduct,
            cartList:cartList}
    })
        /*.factory('birthdayContFactory',function($rootScope){

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
                wishlistProduct:wishlistProduct,
                cartList:cartList}
        })*/


})();
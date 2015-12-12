(function(){
    angular.module('myApp')
.controller('indexBodyController',function($scope){

})
.controller('cartController',function($scope){

    $scope.$on('product:addedToWishlist',function(data){

    })
})
.controller('innerController',function($scope){
    $scope.message = "Inner Pradeep";
})
.controller('carouselController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.interval = 3000;
    var slides = $scope.slides = [{image:"/images/Elegant_Background-1.jpg",url:"carouselCaption1.html",active:true},
        {image:'/images/Elegant_Background-2.jpg',url:"carouselCaption2.html",active:true},
        {image:'/images/Elegant_Background-11.jpg',url:"carouselCaption3.html",active:true}];

}])
.controller('tabController',function($scope){
    $scope.times = [1,2,3,4,5,6];
    $scope.images = {image1:'/images/placehold.gif',image2:'/images/placehold.gif',image3:'/images/placehold.gif',
        image4:'/images/placehold.gif',image5:'/images/placehold.gif',image6:'/images/placehold.gif'};

})

.controller('productController',['cartFactory','$scope',function(cartFactory,$scope){
            $scope.showCart = false;
            $scope.showWishlist = false;
            var isAddedToCart = function(productId) {
                var productsInCart = cartFactory.cartProduct;
                return (productsInCart.indexOf(productId) != -1)?true:false;
            }
            var isAddedToWishlist = function(productId){
                var productsInWishlist = cartFactory.wishlistProduct;
                return (productsInWishlist.indexOf(productId) != -1)?true:false;

            }

            $scope.products = [{title:"Product 1",disc:"discription",imgurl:"/images/placehold.gif",id:"1"},
                        {title:"Product 2",disc:"discription",imgurl:"/images/placehold.gif",id:"2"},
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

    $scope.addToCart = function(productId){
            cartFactory.addToCartProducts(productId);
    }
    $scope.removeFromCart = function(productId){
            cartFactory.removeFromCartProducts(productId);
    }
    $scope.addToWishlist = function(productId){
            cartFactory.addToWishlistProducts(productId);
    }
    $scope.removeFromWishlist = function(productId){
        cartFactory.removeFromWishlistProducts(productId);
    }
    $scope.$on('product:addedToCart',function(event,data){
        $scope.showCart = isAddedToCart(data.pid);
    })
    $scope.$on('product:addedToWishlist',function(event,data){
        $scope.showWishlist = isAddedToWishlist(data.pid);
    })
    $scope.$on('product:removedFromCart',function(event,data){
        $scope.showCart = isAddedToCart(data.pid);
    })
    $scope.$on('product:removedFromWishlist',function(event,data){
        $scope.showWishlist = isAddedToWishlist(data.pid);
    })
}])

.controller('galleryController',function($scope){
    $scope.times = [1,2,3,4,5,6];
    $scope.images = {image1:'/images/placehold.gif',image2:'/images/placehold.gif',image3:'/images/placehold.gif',
        image4:'/images/placehold.gif',image5:'/images/placehold.gif',image6:'/images/placehold.gif'};

})





})();
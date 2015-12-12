(function(){
angular.module('eventzApp')
.controller('navListController',['$mdSidenav','$scope','cartFactory','$mdMedia','$mdDialog','$http',
  function($mdSidenav,$scope,cartFactory,$mdMedia,$mdDialog,$http){
	var self = this;
  $scope.list = angular.fromJson(localStorage.getItem("products"));
  $scope.user = {};
  console.log("XXXXXXXXXXXXX:",cartFactory)
		self.configList = {"birthdayparty":"Birthday Party",
							"wedding":"Wedding Event",
							"corporate":"Corporate Event",
							"photoandvideo":"Photography and Videography",
							"artworks":"Art Works",
							"outdoorevent":"Outdoor Event",
							"childrenactivities":"Children Activities"};

		self.isOpen = false;
		self.closeFab = function closeFab () {
			console.log("FAB CALLED")
			self.isOpen = !self.isOpen ;
		}


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
           $scope.getCount = function(){
			console.log("STOREG",localStorage.getItem('productCount'));
			$scope.cService = localStorage.getItem('productCount');
		}
		$scope.getProductList = function(){
			return cartFactory.cartProduct;
		}


	self.toggle = function toggle() {
		console.log("TOGGLE CALLED");
     $mdSidenav('left').toggle();

    }

    self.showConfirm = function(ev,languageItem) {
		            var confirm = $mdDialog.confirm()
		                  .title("Are you sure..? You don't want to enable the Widget.")
		                  .ariaLabel('widget enable alert')
		                  .targetEvent(ev)
		                  .ok("Yes don't want to Enable.")
		                  .cancel('Cancel.');
		            $mdDialog.show(confirm).then(function() {
		              
		            }, function() {
		              console.log("Cancel")
		            });
		          };


$scope.showAdvanced = function(ev) {
  console.log("BEFORE CALLED:",cartFactory.cartList);
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/html/nav_layouts/formdailog.tmpl.html',
      parent: angular.element(document.body),
      locals: {list: $scope.list},
      targetEvent: ev,
      clickOutsideToClose:false,
      fullscreen: $mdMedia('sm')
    })
    .then(function(list) {
      console.log("Submitted");
      sendToServer(list);
    }, function(list) {
      console.log("Canceled");
      sendToServer(list)
    });
    $scope.$watch(function() {
      return $mdMedia('sm');
    }, function(sm) {
      $scope.customFullscreen = (sm === true);
    });
  };

function sendToServer(list){
  $scope.user.phone = list.phone;
  $scope.user.name = list.name;
  $scope.user.email = list.email;
  console.log("SENDTOSERVER CALLED:",list)
  if($scope.user.phone && $scope.user.name){
    $scope.user.ordertable = [];
    list.map(function(item){
      $scope.user.ordertable.push([item.id,item.title,item.price].join(','));
    })
  $scope.orderTable = angular.toJson(list);
  console.log("ordertable:",$scope.orderTable)
  $http({method:"POST",url:"/receiveOrder",data:{"name":$scope.user.name,"email":$scope.user.email,
    "phone":$scope.user.phone,"ordertable":$scope.user.ordertable.join('\n')}})
  .then(function(response,status){
    console.log("CALLED SERVICE")
      if(status == 200){
          self.showsentMessage(ev);
      }
  })
  .catch(function(errorResponse,status){

  })
}
}

self.showsentMessage = function(ev) {
                var confirm = $mdDialog.confirm()
                      .title("We will get back to you soon. Thank you.")
                      .ariaLabel('message sentalert')
                      .targetEvent(ev)
                      .ok("Ok.");
                $mdDialog.show(confirm).then(function() {
                 
                }, function() {
                  console.log("Cancel");
                });
              };


function DialogController($scope, $mdDialog,cartFactory) {
  $scope.list = angular.fromJson(localStorage.getItem("products"));
  $scope.user = {}
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function(list) {
    $mdDialog.cancel(list);
  };
  $scope.answer = function(list) {
    console.log("SCOPE SCOPE:",list)
    $mdDialog.hide(list);
  };
}

}])

})();

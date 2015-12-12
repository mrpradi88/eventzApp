(function(){
angular.module('adminportal')
.controller('configLpWidgetController',['$scope','landingPageService','$mdToast','$mdDialog','$q',
	function($scope,landingPageService,$mdToast,$mdDialog,$q){
	var self = this;
		$scope.configLandingPageModel = {};
		self.availableLanguages = {};
		$scope.items = [];
		self.widgetFlag = false;
		$scope.availableSelected = [];
		self.channelList = [{"id":1,"channel":"Mobile"},{"id":2,"channel":"Desktop"},{"id":3,"channel":"Native"}];
		self.getAvailableLanguages = function(){
			var promise = landingPageService.getAvailableLanguages();
			promise.then(getLanguageSuccess)
                .catch(getLanguageError);
            function getLanguageSuccess(response){
            	self.availableLanguages = response.data;
            }




            function getLanguageError(errorResponse){
               self.showActionToast("Error :"+errorResponse.status+" Message :"+errorResponse.data.message,'Ok','amazing');
            }
		}


		self.getAvailableLanguages();

		self.addLandingPage = function(){
			console.log("LANG:",self.availableLanguages)
			if(!$scope.configLandingPageModel.url){
				self.showActionToast("Title field must not be empty.",'Ok','amazing');
			}else if(!$scope.configLandingPageModel.description){
				self.showActionToast("Description field must not be empty.",'Ok','amazing');
			}else if($scope.availableSelected.length < 1){
				self.showActionToast('Select alteast one Language Options.','Ok','amazing');
			}else if(!$scope.configLandingPageModel.defaultLanguageID){
				self.showActionToast('Select atleast one default language options.','Ok','amazing');
			}else if($scope.channel.length < 1){
				self.showActionToast('Select alteast one channel.','Ok','amazing');
			}else if(!$scope.configLandingPageModel.widgetEnabled && !self.widgetFlag){
				self.showConfirm();
			}else{
				self.persistLandingPage();
			}


		}
		self.persistLandingPage = function(){
			var model = {};
			model = $scope.configLandingPageModel;
			model.channel = $scope.channel;
			console.log(model.url)
			model.page = model.url.substring(model.url.lastIndexOf('/')+1);
			console.log('page:',model.page);
			$scope.configLandingPageModel  = {};
			var promise = landingPageService.addLandingPage(model);
			promise.then(getPageSuccess)
                .catch(getPageError);
            function getPageSuccess(response){
            	if(response.status >= 200 && response.data.id){
            		var promises = [];
            		var allPromises ;
            		$scope.availableSelected.map(function(item){
            			if(item.result){
            			var LanguageModel = {"languageID":item}
				          promises.concat(landingPageService.associateLanguage(response.data.id,LanguageModel));  
				      	}
        			});

						allPromises = $q.all(promises);
						allPromises.then(getPageSuccess)
			                .catch(getPageError);
			            function getPageSuccess(response){
			            	self.showActionToast('Page Added Successfully.','Ok','amazing');
			            }
			            function getPageError(errorResponse){
			                	self.showActionToast("Error :"+errorResponse.status+" Message :"+errorResponse.data.message,'Ok','amazing');
			            }
            	}
            }
            function getPageError(errorResponse){
                self.showActionToast("Error :"+errorResponse.status+" Message :"+errorResponse.data.message,'Ok','amazing');
            }
			console.log("MODELs:",JSON.stringify(model));
		}
		
      
     /* $scope.toggleAvailableLanguage = function (item, list) {    
        var idx = list.indexOf(item.id);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item.id);
      };

      $scope.existsAvailableLanguage = function (item, list) {

        return list.indexOf(item.id) > -1;
      };
*/
      $scope.channel = [];
      $scope.toggleChannel = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.existsChannel = function (item, list) {
        return list.indexOf(item) > -1;
      };

		self.showActionToast = function(content,action,type) {
            console.log("INSIDE TOAST")
            var toast = $mdToast.simple()
                  .content(content)
                  .action(action)
                  .highlightAction(true)
                  .position('top right')
                  .hideDelay(15000)
                  .theme(type);
            $mdToast.show(toast).then(function(response) {
              if ( response == 'ok' ) {
                
              }
            });
          };
         
		self.showConfirm = function(ev,languageItem) {
		            var confirm = $mdDialog.confirm()
		                  .title("Are you sure..? You don't want to enable the Widget.")
		                  .ariaLabel('widget enable alert')
		                  .targetEvent(ev)
		                  .ok("Yes don't want to Enable.")
		                  .cancel('Cancel.');
		            $mdDialog.show(confirm).then(function() {
		              self.widgetFlag = true;
		              self.persistLandingPage();
		            }, function() {
		              console.log("Cancel")
		            });
		          };
}])



})();
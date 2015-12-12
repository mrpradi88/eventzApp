(function(){
angular.module('adminportal')
.controller('newLanguageController',['$scope','$mdDialog','$mdToast','landingPageService',
    function($scope,$mdDialog,$mdToast,landingPageService){
	  var self = this;
    $scope.newLanguageModel = {}
	  self.availableLanguages = {};
		self.addLanguage = function()
    {
        if(!$scope.newLanguageModel.language)
        {
                  self.showActionToast("Language field must not be empty.","Ok","amazing");
        }else if($scope.newLanguageModel.language)
              {
                  
        			var promise = landingPageService.addLanguage($scope.newLanguageModel.language);
              $scope.newLanguageModel.language = '';
              promise.then(getLanguageSuccess)
                     .catch(getLanguageError)
              }

              function getLanguageSuccess(response){
                 if(response.status >= 200){
                      self.showActionToast("Language Added","Ok");
                  }
                  self.getAvailableLanguages();
              return;
              }
              function getLanguageError(errorResponse){
                  self.showActionToast("Error :"+errorResponse.status+" Message :"+errorResponse.data.message,'Ok','amazing');
              }
			
		}
		
		self.getAvailableLanguages = function()
    {
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
		
		
    self.removeLanguage = function(languageItem)
    {
		    var promise = landingPageService.deleteLanguage(languageItem.id);
            promise.then(getLanguageSuccess)
            .catch(getLanguageError);
        function getLanguageSuccess(response){
            if(response.status >= 200){
              self.showActionToast('Language '+languageItem.language+' has been deleted.','Ok','amazing');
              self.getAvailableLanguages();
            }
        }
        function getLanguageError(errorResponse){
            self.showActionToast("Error :"+errorResponse.status+" Message :"+errorResponse.data.message,'Ok','amazing');
            self.getAvailableLanguages();
        }
    }
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
    self.getAvailableLanguages();

    self.showConfirm = function(ev,languageItem) {
        console.log("showconfirm DIALOG INVOKED")
        // Appending dialog to document.body to cover sidenav in docs app

        var confirm = $mdDialog.confirm()
              .title('Would you like to delete the '+languageItem.language+' language ?')
              .ariaLabel('language delete alert')
              .targetEvent(ev)
              .ok('Yes delete it.')
              .cancel('Cancel.');
        $mdDialog.show(confirm).then(function() {
          console.log("Yes Delete");
          self.removeLanguage(languageItem);
        }, function() {
          console.log("Cancel")
        });
      };
}])



})();


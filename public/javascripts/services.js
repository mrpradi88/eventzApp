(function(){
    angular.module('adminportal')

        .factory('landingPageService',['$q','$http',dataService]);

    function dataService($q,$http){
            return {
                addLanguage : addLanguage,
                getAvailableLanguages : getAvailableLanguages,
                deleteLanguage:deleteLanguage,
                addLandingPage,addLandingPage,
                associateLanguage:associateLanguage
            };
        function addLanguage(newLanguage){
            var deferred = $q.defer();
            $http({
                method:'POST',
                url:'/api/languages',
                data:{"language":newLanguage}
            }).success(function(data,status){
                console.log("addLanguage:Success:",data)
            		deferred.resolve({"status":status,"data":data})
            }).error(function(data,status){
                console.log("addLanguage:Error:",data)
            	deferred.reject({"status":status,"data":data})
            })
            return deferred.promise;
        }
        
        function getAvailableLanguages(){
            
            var deferred = $q.defer();
            $http({
                method:'GET',
                url:'/api/getavailablelanguages'
            })
            .success(function(data,status){
                console.log("getAvailableLanguages:Success:",data)
            	deferred.resolve({"status":status,"data":data})
            }).error(function(data,status){
                console.log("getAvailableLanguages:Error:",data)
                deferred.reject({"status":status,"data":data})
            })
                
                return deferred.promise;

        }
       function deleteLanguage(languageId){
            var deferred = $q.defer();
            $http({
                method:'DELETE',
                url:'/api/languages/'+languageId
            })
            .success(function(data,status){
                console.log("deleteLanguage:Success:",data)
                deferred.resolve({"status":status,"data":data})
            }).error(function(data,status){
                console.log("deleteLanguage:Error:",data)
                deferred.reject({"status":status,"data":data})
            })
                return deferred.promise;
        }
        function addLandingPage(model){
            var deferred = $q.defer();
            $http({
                method:'POST',
                url:'/api/pages',
                data:model
            }).success(function(data,status){
                console.log("AddLandingPage:",data)
                    deferred.resolve({"status":status,"data":data})
            }).error(function(data,status){
                console.log("AddLandingPage:ERROR:",data)
                deferred.reject({"status":status,"data":data})
            })
            return deferred.promise;
        }
        function associateLanguage(pageID,languageModel){
            var deferred = $q.defer();
            $http({
                method:'POST',
                url:'/api/pages/'+pageID+'/languages',
                data:languageModel
            }).success(function(data,status){
                console.log("associateLandingPage:",data)
                    deferred.resolve({"status":status,"data":data})
            }).error(function(data,status){
                console.log("associateLandingPage:ERROR:",data)
                deferred.reject({"status":status,"data":data})
            })
            return deferred.promise;
        }
    }
})();

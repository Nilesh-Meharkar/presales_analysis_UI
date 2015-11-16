'use strict';

/**
 * @ngdoc service
 * @name presalesApp.serviceApis
 * @description
 * # serviceApis
 * Service in the presalesApp.
 */
angular.module('presalesApp')
  .service('serviceApis', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    return{
      search_query: function(url_params, params){
        return $resource("http://widget-qa1.opensilo.co:8200/api/v1/search/", url_params, {
          search:{
            method: "POST",
            params: params,
            isArray: false,
            headers: {'Authorization': 'crittersupport.opensilo.co'}
          }
        });
      },
    }


  });

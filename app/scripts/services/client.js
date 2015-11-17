'use strict';

/**
 * @ngdoc service
 * @name presalesApp.client
 * @description
 * # client
 * Service in the presalesApp.
 */
angular.module('presalesApp')
  .service('client', function (esFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function



      return esFactory({
        host: 'localhost:9200'
        // ...
      });





  });

/* global angular */

// The default server URL is http://localhost:3000
// For Cloud9 use https://<project>:8080 assuming JSON server started first.
// Chrome needs explicit permission to load from an http server via an https
// site. https://support.google.com/chrome/answer/1342714?hl=en-GB

'use strict';

angular.module('confusionApp')
//.constant('baseURL', 'http://localhost:3000/')
.constant('baseURL', 'http://fswd3-angularjs-smathx.c9users.io:8080/')
.service('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

  this.getDishes = function () {
    return $resource(baseURL + 'dishes/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  };

  // Only need GET so no custom actions defined.
  this.getPromotion = function () {
    return $resource(baseURL + 'promotions/:id');
  };
}])

.factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

  var corpfac = {};

  // Only need GET so no custom actions defined.
  corpfac.getLeaders = function () {
    return $resource(baseURL + 'leadership/:id');
  };

  return corpfac;
}])

.factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

  var feedfac = {};

  // Only need POST and GET so no custom actions defined.
  feedfac.getFeedback = function () {
    return $resource(baseURL + 'feedback/:id');
  };

  return feedfac;
}])
;

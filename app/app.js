"use strict";

const app = angular.module("TodoApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
  .when('/', {
      templateUrl: 'partials/list.html',
      controller: 'listCtrl'
  })
  // : tells its going to be something dynamic value that's being spit into this
  .when('/task/:itemId', {
     templateUrl: 'partials/details.html',
     controller: 'detailTaskCtrl'
  })
  .otherwise('/');
});

app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.apiKey,
    authDomain:  creds.authDomain,
    databaseURL: creds.databaseURL
  };

  firebase.initializeApp(authConfig);
});

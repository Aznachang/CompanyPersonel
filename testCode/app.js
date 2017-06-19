const app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  /**** COMPANY ROUTES ****/
  .when('/', {
    controller: 'companyList',
    templateUrl: 'CompanyList/companyListView.html',
    reloadOnSearch: false,
  })
  .when('/company/:id', {
    controller: 'companyDetail',
    templateUrl: 'CompanyDetail/companyDetailView.html',
    reloadOnSearch: false,
  })
  .when('/company/:id/edit', {
    controller: 'companyDetail',
    templateUrl: 'CompanyDetail/companyDetailEdit.html',
    reloadOnSearch: false,
  })
  .when('/companies/:id/people', {
    controller: 'companyPeople',
    templateUrl: 'CompanyPeople/companyPeopleView.html',
    reloadOnSearch: false,
  })
  /**** PEOPLE ROUTES ****/
  .when('/company/:id/person/edit', {
    controller: 'companyPeople',
    templateUrl: 'CompanyPeople/personEdit.html',
    reloadOnSearch: false,
  })
  .when('/company/:id/people', {
    controller: 'companyPeople',
    templateUrl: 'CompanyPeople/personDetail.html',
    reloadOnSearch: false,
  })
  .otherwise({
    redirectTo: '/',
  });
  $locationProvider.hashPrefix('');
});

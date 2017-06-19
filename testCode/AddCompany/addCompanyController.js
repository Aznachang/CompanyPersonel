app.controller('addCompany', function($scope, $location, $http) {
  $scope.company = {};

  $scope.addCompany = () => {
    console.log('triggered addCompany!');
    $http.post('/companies', $scope.company).then(res => {
      window.location.href='#/';
      window.location.reload(true);
    });
  } // end of addCompany

});

app.directive('createCompanyForm', function() {
  return {
    // ../AddCompany/
    templateUrl: './AddCompany/create-company-form.html'
  };
});
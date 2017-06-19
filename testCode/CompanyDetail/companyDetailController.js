app.controller('companyDetail', function ($scope, $location, companyDetails, getCompanies, $http, $routeParams) {

  $scope.companyDetail = {};
  $scope.companies;
  $scope.updateRes; // company response update

  const getList = () => {
   getCompanies.getList().then(res => {
     $scope.companies = res;
      // console.log(`companies list is: ${JSON.stringify($scope.companies)}`);
   });
  };

  // get the List of Companies Added
  const getCompanyDetail = () => {
    companyDetails.getACompany().then(res => {
      // console.log('company detail is: ' + res);
      $scope.companyDetail.id = res._id;
      $scope.companyDetail.name = res.name;
      $scope.companyDetail.address = res.address;
      $scope.companyDetail.revenue = res.revenue;
      $scope.companyDetail.phone = res.phone;
    });
  };

  $scope.updateCompanyDetail = () => {
    $http.put('/companies/'+$routeParams.id, $scope.companyDetail).then(res => {
      getList();
      console.log(`updated Company Details are: ${JSON.stringify(res)}`);
      window.location.href='#/companies/';
      window.location.reload(true);
    });
  };

  const createCompany = () => {
    getCompanies.getList().then(res => {
      getList();
      window.location.href='#/companies/';
    });
  };
  getCompanyDetail();
});

app.controller('companyList', function ($scope, $location, $http, getCompanies) {

  $scope.companies = [];

  $scope.importCompanies = () => {
    if ($scope.companies.length === 0) {
      // getCompanies.importCompanies();
      return $http({
        method: 'GET',
        url: '/importCompanies',
      }).then(res => {
        console.log('imported Companies!');
        console.log('imported- res.data is: ' + res.data);
        //return res.data;
        $scope.companies = res.data;
      });
    }
  };

  $scope.getList1 = (cb) => {
    // execute getList() from DB FIRST
    // then if EMPTY - execute importCompanies()
    return $http({
      method: 'GET',
      url: '/companies',
    }).then(res => {
      console.log('inside -getList1 then!');
      if (res.data.length === 0) {
        console.log('res.data is empty!');
        if (typeof(cb) === 'function') {
          console.log('Execute cb-importCompanies');
          cb();
          window.location.href='#/';
          window.location.reload(true);
        }
      }
      else {
        console.log('getList1- res.data is: ' + res.data);
        $scope.companies = res.data;
      }
    });
  }

  console.log('componyList Controller triggered!');
  $scope.getList1($scope.importCompanies);

}); // end of controller

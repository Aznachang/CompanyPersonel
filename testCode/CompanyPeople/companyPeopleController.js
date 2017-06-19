app.controller('companyPeople', function ($scope, $location, companysPeople, getCompanies, $http, $routeParams) {
  $scope.companyPerson = {}; // addPerson()
  $scope.people = [];
  $scope.companies; // Array of Companies avail. in dropdown menu
  $scope.selected;
  $scope.selectedCompany; //addPerson() - dropdown menu
  $scope.personDetail = {};

  // get the List of Companies Added
  const getPersonDetail = () => {
    companysPeople.getPerson().then(res => {
      $scope.personDetail.id = res._id;
      $scope.personDetail.name = res.name;
      $scope.personDetail.email = res.email;
      $scope.personDetail.companyId = res.companyId;
    });
  };

  $scope.updatePersonDetail = () => {
    $http.put('/person/'+$routeParams.id, $scope.personDetail).then(res => {
      window.location.href='#/company/'+$routeParams.id+'/people';
    });
  };

  const getList = () => {
    getCompanies.getList().then(res => {
      $scope.companies = res;
      if (res.length > 0)
        $scope.selected = $scope.companies[0].name;
    });
  };

  const getPeopleList = () => {
    companysPeople.getCompanyPeople().then(res => {
      $scope.people = res;
    });
  };

  $scope.deletePerson = () => {

    $http.delete('/person/'+$routeParams.id, $scope.people).then(res => {
      // console.log('deletePerson: ' + JSON.stringify(res));
      window.location.href='#/companies/'+$routeParams.id+'/people';
    });
  };

  const getPerson = () => {
    companysPeople.getPerson().then(res => {
      // console.log('getPerson: ' + res);
      $scope.companyPerson.id = res._id;
      $scope.companyPerson.companyName = res.companyName;
      $scope.email = res.email;
    });
  };

  $scope.addPerson = () => {
    $scope.selectedCompany =
    $scope.companies.filter(company => $scope.selected === company.name);
    // console.log('selectedCompany: ' + JSON.stringify($scope.selectedCompany));
    $scope.companyPerson.companyId = $scope.selectedCompany[0]._id;

    $http.post('/person', $scope.companyPerson).then(res => {
      window.location.href='#/companies';
      });
  }; // end of addPerson()

  getPeopleList();
  getList();
  getPersonDetail();
});

app.directive('createPersonForm', function() {
  return {
    templateUrl: './CompanyPeople/create-person-form.html'
  }
});


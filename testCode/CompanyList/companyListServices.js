app.factory('getCompanies', function ($http, $location, $routeParams) {
  const getList = () => {
    return $http({
      method: 'GET',
      url: '/companies',
    }).then(res => {
      // console.log('getList-', + JSON.stringify(res.data));
      return res.data;
    });
  };
  const createCompany = () => {
    return $http({
      method: 'POST',
      url: '/companies',
    }).then(res => {
      window.location.href = '#/'
      return res.data;
    });
  };

  // const importCompanies = () => {
  //   return $http({
  //     method: 'GET',
  //     url: '/importCompanies',
  //   }).then(res => {
  //     console.log('imported Companies!');
  //     return res.data;
  //   });
  // };

  // const importPeople = () => {
  //   let id = $routeParams.id;
  //   return $http({
  //     method: 'GET',
  //     url: '/importPeopleForCompany',
  //   }).then(res => {
  //     // return res.data;
  //     console.log('imported People!');
  //   });
  // };

  return { getList, createCompany }

});

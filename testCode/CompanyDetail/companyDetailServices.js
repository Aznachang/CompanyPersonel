app.factory('companyDetails', function ($http, $location, $routeParams) {
  const createCompany = () => {
    return $http({
      method: 'POST',
      url: '/companies',
    }).then(res => {
      window.location.href = '#/'
      return res.data;
    });
  };

  const updateCompany = () => {
    let id = $routeParams.id;
    return $http({
      method: 'PUT',
      url: '/companies/'+id,
    }).then(res => {
    console.log('updateCompany: ' + res);
    return res;
  });
  };

  const getACompany = () => {
    let id = $routeParams.id;
    return $http({
      method: 'GET',
      url: '/companies/'+id,
    }).then(res => res.data);
  };

  const getPeople = () => {
    return $http({
      method: 'GET',
      url: '/companies/:id/people',
    }).then(res => res.data);
  };

  return { createCompany, getACompany, updateCompany, getPeople };
});

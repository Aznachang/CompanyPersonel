app.factory('companysPeople', function ($http, $location, $routeParams) {

  const getPerson = () => {
    let id = $routeParams.id;
    return $http({
      method: 'GET',
      url: '/person/'+id,
    }).then(res => res.data);
  };

  const getCompanyPeople = () => {
    let id = $routeParams.id;
    return $http({
      method: 'GET',
      url: '/companies/' +id +'/people',
    }).then(res => res.data);
  };

  const createPerson = () => {
    let id = $routeParams.id;
    return $http({
      method: 'POST',
      url: '/person',
    }).then(res => res.data);
  };
  const updatePerson = () => {
    let id = $routeParams.id;
    return $http({
      method: 'PUT',
      url: '/person/'+id,
    }).then(res => res.data);
  };
  const deletePerson = () => {
    return $http({
      method: 'DELETE',
      url: '/person/:id',
    }).then(res => res.data);
  }

  return { getPerson, getCompanyPeople, createPerson, updatePerson, deletePerson };
});

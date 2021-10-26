const fetchDataFilms = () => {
 return fetch('https://ghibliapi.herokuapp.com/films/')
  .then(response => response.json())
  .then(data => data)
  .catch(error => error)
}


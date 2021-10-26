const ulFilms = document.querySelector('#films');
const getSearch = document.querySelector('#search')


const getImage = (imageSource) => {
  const listFilmsImg = document.createElement('img')
  listFilmsImg.classList.add('image-filme')
  listFilmsImg.src = imageSource;
  return listFilmsImg;
}

const getTitle = (title) => {
  const h3 = document.createElement('h3')
  h3.classList.add('card-title')
  h3.innerText = title;
  return h3;
}

const getRelease = (releaseDate) => {
  const p = document.createElement('p')
  p.classList.add('infos')
  p.innerHTML = `<i class="far fa-calendar-minus"></i> ${releaseDate}`;
  return p;
}

const getProdutorDirector = (name) => {
  const p = document.createElement('p')
  p.classList.add('infos')
  p.classList.add('space')
  p.innerHTML = `<i class="fas fa-user-secret"></i> ${name}`;
  return p;
}


const getdesc = (description) => {
  const p = document.createElement('p')
  p.classList.add('card-content')
  p.innerText = description;
  return p;
}

const infosCreate = (releaseDate, producer, director) => {
  const div = document.createElement('div');
  div.className = 'info-movie';
  div.appendChild(getRelease(releaseDate));
  div.appendChild(getProdutorDirector(producer));
  div.appendChild(getProdutorDirector(director));
  return div
}

const conteudo = (title, description, releaseDate, producer, director) => {
  const divcont = document.createElement('div');
  divcont.classList.add('conteudo');
  divcont.appendChild(getTitle(title));
  divcont.appendChild(getdesc(description));
  divcont.appendChild(infosCreate(releaseDate, producer, director));
  return divcont
}

const createItemElement = ({image, title, description, releaseDate, producer, director}) => {
  const li = document.createElement('li');
  li.className = 'movie'
  li.classList.add('glide__slide')
  li.appendChild(getImage(image));
  li.appendChild(conteudo(title, description, releaseDate, producer, director))
  
  return li
}

const creatList = async () => {
  const filmsList =  await fetchDataFilms();
  filmsList.forEach(({title, image, description, release_date:releaseDate, producer, director}) => {
    ulFilms.appendChild(createItemElement({title, image, description, releaseDate,  producer, director}))
  });
}

const removeChild = () => {
  const elemento = document.getElementById("films");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
};

const search = () => {
  const h3Title = Array.from(document.querySelectorAll('h3'))
  const filterTitle = h3Title.filter((filme) => filme.innerText.toLowerCase().includes(getSearch.value.toLowerCase()))
  if (getSearch.value === '') {
    ulFilms.innerText = ''
    creatList();
  } else {
    ulFilms.innerText = ''
    filteredMovie(filterTitle)
  }
    creatList()

}

const filteredMovie = (filterTitle) => {
   filterTitle.forEach(movie => ulFilms.appendChild(movie.parentElement.parentElement));
}

getSearch.addEventListener('keyup', search)

window.onload = () => {
  
}
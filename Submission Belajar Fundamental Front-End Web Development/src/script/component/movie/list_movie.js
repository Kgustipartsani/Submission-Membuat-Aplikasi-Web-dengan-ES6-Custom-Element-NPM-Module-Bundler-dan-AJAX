import './tampilan_movie.js';

class MovieList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set filmMovie(filmMovie) {
    this._filmMovie = filmMovie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._filmMovie.forEach(movie => {
      const MovieHomePageElement = document.createElement('movie-home-page');
      MovieHomePageElement.movie = movie;
      this.shadowDOM.appendChild(MovieHomePageElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('movie-list', MovieList);
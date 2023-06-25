class MovieHomePage extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: #E6DDC4;
          border-radius: 10px;
          overflow: hidden;
        }
        .poster {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
        }
        .detail-movie {
          padding: 24px;
        }
        .detail-movie > h2 {
          font-weight: lighter;
        }
        .detail-movie > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="poster" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="Profil">
      <div class="detail-movie">
        <h2>Title : ${this._movie.title}</h2>
        <p>Release :${this._movie.release_date}</p>
        <p> Overview : <br>${this._movie.overview}</p>
        <p>Rating : ${this._movie.vote_average}</p>
      </div>
    `;
  }
}

customElements.define('movie-home-page', MovieHomePage);
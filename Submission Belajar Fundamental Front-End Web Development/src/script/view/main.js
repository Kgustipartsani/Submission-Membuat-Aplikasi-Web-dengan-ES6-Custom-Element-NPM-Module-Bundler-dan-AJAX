import '../component/movie/list_movie';
import '../component/movie/searching.js';
import DataSourceMovie from '../data/data_source_movie.js';

const main = () => {
  const searchElement = document.querySelector('search-movie-home-page');
  const movieListElement = document.querySelector('movie-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSourceMovie.movieSearch(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    movieListElement.filmMovie = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
class DataSourceMovie {
  static movieSearch(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=bf8878f9a17b856739270352ebc0ceef&query=${query}`)
      .then(response => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results.length !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${query} is not found`);
        }
      });
  }
}
 
export default DataSourceMovie;
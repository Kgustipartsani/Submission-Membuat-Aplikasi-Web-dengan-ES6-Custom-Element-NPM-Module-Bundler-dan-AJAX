class SearchMovie extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
  
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <style>
         
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        width: 100%;
        background-color: #678983;
        color: white;
      }
      h2 {
        padding: 16px;
      }
          .search-item {
            max-width: 800px;
            box-shadow: #181D31;
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: #678983;
          }
         
          .search-item > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid cornflowerblue;
            font-weight: bold;
          }
         
          .search-item > input:focus {
            outline: 0;
            border-bottom: 2px solid cornflowerblue;
          }
         
          .search-item > input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-item >  input::placeholder {
            color: black;
            font-weight: normal;
          }
         
          .search-item > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: white;
            color: white;
            border: 0;
            text-transform: uppercase;
            color : black;
          }
         
          @media screen and (max-width: 550px){
            .search-item {
              flex-direction: column;
              position: static;
            }
       
            .search-item > input {
              width: 100%;
              margin-bottom: 12px;
            }
       
            .search-item > button {
              width: 100%;
            }
          }
          
        </style>
        
        <h2>Search Film Movie</h2>
        
        <div id="search-item" class="search-item">
          <input placeholder="Search title movie" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit"><i class="fas fa-search">Search</i></button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }
  
  customElements.define('search-movie-home-page', SearchMovie);
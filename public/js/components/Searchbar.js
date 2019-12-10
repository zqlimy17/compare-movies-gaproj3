class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='search-bar'>
          <form>
            <input
              type='text'
              name='searchbar'
              id='searchbar'
              placeholder='Search Movies...'
            ></input>
            <input class='btn btn-primary' type='submit' value='Search'></input>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: 'https://api.themoviedb.org/3/',
      apikey: 'api_key=' + '1a31cfdf9cc81f7229bbbc09db5d95bd',
      query: '&query=',
      searchquery: 'search/movie?',
      movieTitle: 'Jack+Reacher',
      searchURL: '',
      movieResults: []
    };
  }
  componentDidMount() {
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.searchquery +
          this.state.apikey +
          this.state.query +
          this.state.movieTitle
      },
      () => {
        console.log('search url:' + this.state.searchURL);
        console.log('base url:' + this.state.baseURL);
        fetch(this.state.searchURL)
          .then(response => {
            return response.json();
          })
          .then(
            json => {
              this.setState({
                movieResults: json.results
              });
              console.log(json.results);
            },
            err => console.log(err)
          );
      }
    );
  }
  seachMovie = event => {
    let text = event.target.innerText;
    this.setState({
      movieTitle: text
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.movieResults ? (
          <MoviesResult movieResults={this.state.movieResults} />
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

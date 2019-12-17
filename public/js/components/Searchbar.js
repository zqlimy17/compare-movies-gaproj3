class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: 'https://api.themoviedb.org/3/',
      apikey: 'api_key=' + '1a31cfdf9cc81f7229bbbc09db5d95bd',
      query: '&query=',
      searchquery: 'search/movie?',
      movieTitle: '',
      searchURL: '',
      movieResults: []
    };
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
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
        // console.log('search url:' + this.state.searchURL);
        // console.log('base url:' + this.state.baseURL);
        fetch(this.state.searchURL)
          .then(response => {
            console.log('BBBBBBBB', this.state.searchURL);
            return response.json();
          })
          .then(
            json => {
              console.log(json.results);
              this.setState({
                movieResults: json.results
              });
            },
            err => console.log(err)
          );
      }
    );
  };
  handleAddFavorites = event => {
    fetch(this.state.favoriteUrl, {
      method: 'PUT'
    })
      .then(console.log('added to favs'))
      .catch(error => console.log(error));
  };
  render() {
    return (
      <React.Fragment>
        <div className='search-bar'>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type='text'
              name='searchbar'
              id='movieTitle'
              placeholder='Search Movies...'
              value={this.state.value}
            />
            <input class='btn btn-primary' type='submit' value='Search' />
          </form>
        </div>
        {this.state.movieResults ? (
          <MoviesResult
            movieResults={this.state.movieResults}
            currentUser={this.props.currentUser}
          />
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

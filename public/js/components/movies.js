class MovieAPI extends React.Component {
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

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <ul>
          {this.state.movieResults.map(movie => {
            return (
              <React.Fragment>
                <ul>
                  <li> {movie.overview}</li>
                  <li> {movie.title}</li>
                  <li> {movie.release_date}</li>
                  <li> {movie.poster_path}</li>
                </ul>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}

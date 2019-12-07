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
      description: '',
      resultsTitle: '',
      resultsPopularity: ''
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
                description: json.results[0].overview,
                resultsTitle: json.results[0].title,
                resultsPopularity: json.results[0].popularity
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
        <div>{this.state.searchURL ? this.state.resultsTitle : ''}</div>
        <div>{this.state.searchURL ? this.state.resultsPopularity : ''}</div>
        <div>{this.state.searchURL ? this.state.description : ''}</div>
      </div>
    );
  }
}

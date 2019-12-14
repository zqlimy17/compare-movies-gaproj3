class RecommendedMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getPopular: "https://api.themoviedb.org/3/movie/popular?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1",
      popularMovies: [],
    }
  }

  // ComponentDidMount this 
  componentDidMount() {
    console.log(this.props.currentUser._id)
    fetch(this.state.getPopular)
      .then(response => {
        return response.json();
      }).then(jsonedMovies => {
        this.setState({
          popularMovies: jsonedMovies.results
        });
      },
        err => console.log(err)
      );
  }

  render() {
    return (
      <div className="movies-comparison">
        <h3>Here are some movies that you might like!</h3>
        {this.props.currentUser ? <table>
          {this.props.recommendedMovies.map(movie => {
            return <MovieList movie={movie} currentUser={this.props.currentUser} />
          })}
        </table> : <table>
            {this.state.popularMovies.map(movie => {
              return <MovieList movie={movie} currentUser={this.props.currentUser} />
            })}
          </table>}
      </div>
    );

  }
}

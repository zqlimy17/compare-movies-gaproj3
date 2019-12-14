class RecommendedMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getPopular: "https://api.themoviedb.org/3/movie/popular?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1"
    }
  }

  render() {
    return (
      <div className="movies-comparison">
        <h3>Here are some movies that you might like!</h3>
        <table>
          {this.props.recommendedMovies.map(movie => {
            return <MovieList movie={movie} currentUser={this.props.currentUser} userState={this.props.userState} />
          })
          }
        </table>
      </div>
    );

  }
}

class Results extends React.Component {
  render() {
    return <React.Fragment>console.log("1")</React.Fragment>;
  }
}

class MoviesResult extends React.Component {
<<<<<<< HEAD
  handleAddFavorite = () => {
    fetch('/movies/' + this.props.currentUser._id + '/' + this.props.movie.id, {
      method: 'PUT'
    })
      .then(console.log('added to favs'))
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className='movies-result'>
        <h1>Movie Result Goes Here</h1>
        <ul>
          {this.props.movieResults ? (
            <React.Fragment>
              {this.props.movieResults.map((movie, index) => {
                <Results1
                  movie={movie}
                  currentUser={this.props.currentUser}
                  index={index}
                />;
              })}
            </React.Fragment>
          ) : (
            <div>Search Movie Results</div>
          )}
        </ul>
      </div>
    );
  }
=======
    handleAddFavorite = movie => {
        fetch("/movies/" + this.props.currentUser._id + "/" + movie.id, {
            method: "PUT"
        })
            .then(console.log("added to favs"))
            .catch(error => console.log(error));
    };
    render() {
        return (
            <div className="movies-result">
                <ul>
                    {this.props.movieResults ? (
                        this.props.movieResults.map(movie => {
                            return (
                                <React.Fragment>
                                    <ul>
                                        <li> {movie.title}</li>
                                        <li> {movie.vote_average} of 10 </li>
                                    </ul>
                                    <img
                                        src={
                                            "http://image.tmdb.org/t/p/w300" +
                                            movie.poster_path
                                        }
                                    />
                                    {this.props.currentUser ? (
                                        <button
                                            onClick={() =>
                                                this.handleAddFavorite(movie)
                                            }
                                        >
                                            Like!
                                        </button>
                                    ) : (
                                        <Link to="/login">Like</Link>
                                    )}
                                </React.Fragment>
                            );
                        })
                    ) : (
                        <div>Search Movie Results</div>
                    )}
                </ul>
            </div>
        );
    }
>>>>>>> 7a424fff0e2c169633f793ec82d4dd86ad6dfa80
}

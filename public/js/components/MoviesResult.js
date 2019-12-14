class MoviesResult extends React.Component {
  handleAddFavorite = movie => {
    fetch('/movies/' + this.props.currentUser._id + '/' + movie.id, {
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
            this.props.movieResults.map(movie => {
              return (
                <React.Fragment>
                  <ul>
                    <li> {movie.title}</li>
                    <li> {movie.vote_average} of 10 </li>
                  </ul>
                  <img
                    src={'http://image.tmdb.org/t/p/w300' + movie.poster_path}
                  />
                  {this.props.currentUser ? (
                    <button onClick={() => this.handleAddFavorite(movie)}>
                      Like!
                    </button>
                  ) : (
                    <Link to='/login'>Like</Link>
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
}

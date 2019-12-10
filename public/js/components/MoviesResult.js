class MoviesResult extends React.Component {
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
                    <li> {movie.overview}</li>
                    <li> {movie.title}</li>
                    <li> {movie.release_date}</li>
                    <li> {movie.poster_path}</li>
                  </ul>
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

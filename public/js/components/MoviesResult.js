class Results extends React.Component {
  render() {
    return <React.Fragment>console.log("1")</React.Fragment>;
  }
}

class MoviesResult extends React.Component {
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
}

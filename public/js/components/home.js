class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    }
  }
  render() {
    return (
      <React.Fragment>
        <Search currentUser={this.state.currentUser} />
        {this.props.recommendedMovies ? <RecommendedMovies currentUser={this.props.currentUser} recommendedMovies={this.props.recommendedMovies} userState={this.props.userState} />
          : ""}
        <NowPlaying currentUser={this.props.currentUser} userState={this.props.userState} />
        <PopularMovies currentUser={this.props.currentUser} userState={this.props.userState} />
      </React.Fragment>
    );
  }
}

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
        {this.props.currentUser ? <RecommendedMovies currentUser={this.props.currentUser} recommendedMovies={this.props.recommendedMovies} />
          : ""}
        <NowPlaying currentUser={this.props.currentUser} />

        <PopularMovies currentUser={this.props.currentUser} />
      </React.Fragment>
    );
  }
}

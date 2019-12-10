class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.currentUser.name}</p>
        <Searchbar />
        <MoviesResult />
        <MoviesComparison />
      </React.Fragment>
    );
  }
}

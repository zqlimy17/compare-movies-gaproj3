class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Searchbar />
        <MoviesResult />
        <MoviesComparison />
      </React.Fragment>
    );
  }
}

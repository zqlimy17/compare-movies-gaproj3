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
        <SearchBar currentUser={this.state.currentUser} />
        <Search currentUser={this.state.currentUser} />
        <MoviesComparison currentUser={this.state.currentUser} />
      </React.Fragment>
    );
  }
}

const { BrowserRouter, Link, Switch, Route, Redirect } = ReactRouterDOM;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      getFavorites: "",
      recommendedMovies: []
    }
  }
  userState = (user) => {
    const randomIndex = Math.floor(Math.random() * user.favorites.length);
    this.setState({
      currentUser: user,
      getFavorites: `https://api.themoviedb.org/3/movie/${user.favorites[randomIndex]}/recommendations?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1`
    })
    fetch("https://api.themoviedb.org/3/movie/4771/recommendations?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1")
      .then(response => {
        return response.json();
      }).then(jsonedMovies => {
        this.setState({
          recommendedMovies: jsonedMovies.results
        });
      },
        err => console.log(err)
      );
  }
  handleLogout = () => {
    console.log("User has logged out");
    this.setState({
      currentUser: ""
    })
    window.location.reload();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
          <Switch>
            <Route exact path="/">
              <Home currentUser={this.state.currentUser} recommendedMovies={this.state.recommendedMovies} />
            </Route>
            <Route path="/login">
              {this.state.currentUser ? <Redirect to="/" /> : <Login userState={this.userState} />}
            </Route>
            <Route path="/signup">
              <Signup currentUser={this.state.currentUser} />
            </Route>
            <Route path={"/profile/:username"}>
              <Profile currentUser={this.state.currentUser} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<App />, document.querySelector(".container"));

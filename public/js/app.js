const { BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ""
    }
  }
  userState = (user) => {
    console.log("callback has been executed")
    this.setState({
      currentUser: user
    }, () => {
      console.log('Yaaas');
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/">
              <Home currentUser={this.state.currentUser} />
            </Route>
            <Route path="/login">
              <Login userState={this.userState} />
            </Route>
            <Route path="/signup">
              <Signup currentUser={this.state.currentUser} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

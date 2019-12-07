const { BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;

class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/movies'>Movies</Link>
            </li>
          </ul>
          <hr />


          <Header />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/movies'>
              <MovieAPI />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  
  }
}


class Header extends React.Component {
  render () {
    return (
      <div>
      <h1> Kindly search your Movies! </h1>
    <form>
      <input type="text"/>
    </form>
    
    </div>
    
    )
  }
}



ReactDOM.render(<App />, document.querySelector('main'));

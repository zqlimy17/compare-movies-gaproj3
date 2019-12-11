class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Compare Movies
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {this.props.currentUser ? <li className="nav-item nav-link" onClick={this.props.handleLogout}>
              Logout
            </li> : <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
              </Link>
              </li>}


            {this.props.currentUser ? "" : <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>}

          </ul>
        </div>
      </nav>
    );
  }
}

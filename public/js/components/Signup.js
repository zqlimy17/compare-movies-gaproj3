class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: ""
    }
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    fetch("/users", {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdUser => {
        return createdUser.json();
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <React.Fragment>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} minlength="3" maxlength="20" style={{ textTransform: 'capitalize' }} />
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} minlength="3" maxlength="20" style={{ textTransform: 'lowercase' }} />
          <label htmlFor="password">Username</label>
          <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} minlength="6" maxlength="20" />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

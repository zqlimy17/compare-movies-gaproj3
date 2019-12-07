class Signup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Username</label>
          <input type="password" id="password" name="password" />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

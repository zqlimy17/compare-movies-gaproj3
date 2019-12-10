class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
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

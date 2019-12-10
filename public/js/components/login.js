class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            currentUser: ""
        }
    }
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        fetch("/sessions", {
            body: JSON.stringify(this.state),
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(loggedInUser => {
                return loggedInUser.json();
            }).then(jsonedUser => {
                console.log(jsonedUser);
                this.setState({
                    currentUser: jsonedUser
                })
                console.log('AAAAAAAAAAAAA', this.state.currentUser.name)

            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        );
    }
}

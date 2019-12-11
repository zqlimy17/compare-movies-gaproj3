class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.state.currentUser.name}!</h1>
            </div>
        )
    }
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.currentUser.name}!</h1>
                <h2>These are the movies that you have starred!</h2>
                {this.props.currentUser.favorites.map(movie => {
                    return <UserMovie movie={movie} />
                })}
            </div>
        )
    }
}

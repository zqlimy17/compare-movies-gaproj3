class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.name}!</h1>
                <h2>These are the movies that you have starred!</h2>
                {this.props.currentUser.favorites.map(movie => {
                    return <UserMovie movie={movie} currentUser={this.props.currentUser} />
                })}
            </div>
        )
    }
}

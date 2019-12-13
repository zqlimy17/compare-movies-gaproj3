class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "http://image.tmdb.org/t/p/w300" + this.props.movie.poster_path,
            favoriteUrl: "/movies/" + this.props.currentUser + "/" + this.props.movie.id
        }
    }

    handleAddFavorites = event => {
        console.log(this.state.favoriteUrl)
        console.log(this.props.currentUser)
        // fetch("/movies/", {
        //     body: JSON.stringify(this.state),
        //     method: "PUT",
        //     headers: {
        //         Accept: "application/json, text/plain, */*",
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then(loggedInUser => {
        //         return loggedInUser.json();
        //     }).then(jsonedUser => {
        //         this.setState({
        //             currentUser: jsonedUser
        //         })
        //         console.log('Current User is:', this.state.currentUser)
        //     }).then(() => {
        //         this.props.userState(this.state.currentUser);
        //     })
        //     .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <img src={this.state.url} />
                <button onClick={this.handleAddFavorites}>Add to Favorites</button>
            </div>
        )
    }
}
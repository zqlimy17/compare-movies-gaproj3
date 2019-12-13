class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "http://image.tmdb.org/t/p/w300" + this.props.movie.poster_path,
            favoriteUrl: "/movies/" + this.props.currentUser._id + "/" + this.props.movie.id
        }
    }

    handleAddFavorites = event => {
        console.log(this.state.favoriteUrl);
        console.log(this.props.currentUser);
        fetch(this.state.favoriteUrl, {
            method: "PUT"
        }).then(
            console.log('added to favs')
        ).catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <img src={this.state.url} />
                {this.props.currentUser === "" ? <Link to="/login">Add to Favorites </Link> : <button onClick={this.handleAddFavorites}>Add to Favorites</button>}

            </div>
        )
    }
}
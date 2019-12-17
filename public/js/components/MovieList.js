class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "http://image.tmdb.org/t/p/w300" + this.props.movie.poster_path,
            favoriteUrl: "/movies/" + this.props.currentUser._id + "/" + this.props.movie.id
        }
    }
    handleAddFavorites = event => {
        fetch(this.state.favoriteUrl, {
            method: "PUT"
        }).then(response => {
            return response.json();
        }).then(jsonedUser => {
            this.props.userState(jsonedUser);
            console.log('working');
        }).catch(error => console.log(error));
    }
    render() {
        return (
            <div className='board'>
                <Link to={"/movie/" + this.props.movie.id} ><img src={this.state.url} /></Link>
                {this.props.currentUser === "" ? <Link to="/login">Add to Favorites </Link> : <button onClick={this.handleAddFavorites}>Add to Favorites</button>}
            </div>
        )
    }
}
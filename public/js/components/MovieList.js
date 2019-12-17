class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:
                "http://image.tmdb.org/t/p/w185" + this.props.movie.poster_path,
            favoriteUrl:
                "/movies/" +
                this.props.currentUser._id +
                "/" +
                this.props.movie.id
        };
    }
    handleAddFavorites = event => {
        fetch(this.state.favoriteUrl, {
            method: "PUT"
        })
            .then(response => {
                return response.json();
            })
            .then(jsonedUser => {
                this.props.userState(jsonedUser);
                console.log("working");
            })
            .catch(error => console.log(error));
    };
    render() {
        return (
            <React.Fragment>
                <Link to={"/movie/" + this.props.movie.id}>
                    <img src={this.state.url} />
                </Link>
            </React.Fragment>
        );
    }
}

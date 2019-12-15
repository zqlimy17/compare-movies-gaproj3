class UserMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            title: "",
            singleUrl: `https://api.themoviedb.org/3/movie/${this.props.movie}?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US`,
            removeMovieRoute: `/movies/${this.props.currentUser._id}/${this.props.movie}`,
            isHidden: false
        };
    }
    componentDidMount() {
        fetch(this.state.singleUrl)
            .then(response => {
                return response.json();
            })
            .then(
                json => {
                    this.setState({
                        image: `http://image.tmdb.org/t/p/w185${json.poster_path}`,
                        title: json.original_title
                    });
                },
                err => console.log(err)
            );
    }
    removeMovie = () => {
        this.props.minus();
        fetch(this.state.removeMovieRoute, { method: "DELETE" })
            .then(response => {
                this.setState({
                    isHidden: true
                });
                return response.json();
            })
            .then(jsonedResponse => {
                this.props.userState(jsonedResponse);
            });
    };
    render() {
        return (
            <React.Fragment>
                <div className={this.state.isHidden ? "hide" : ""}>
                    <div className="hovereffect">
                        <img
                            src={this.state.image}
                            style={{ display: "block", margin: "auto" }}
                        />

                        <div className="overlay">
                            <Link to={"/movie/" + this.props.movie}>
                                <p>{this.state.title}</p>
                            </Link>
                            <Link
                                className="info"
                                to={"/movie/" + this.props.movie}
                            >
                                More Info
                            </Link>
                            <br />
                            <Link
                                className="movie-remove"
                                onClick={this.removeMovie}
                            >
                                Remove
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

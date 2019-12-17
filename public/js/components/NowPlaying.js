class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getNowPlaying:
                "https://api.themoviedb.org/3/movie/now_playing?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1",
            nowPlaying: []
        };
    }

    // ComponentDidMount this
    componentDidMount() {
        fetch(this.state.getNowPlaying)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(
                jsonedMovies => {
                    console.log(jsonedMovies);
                    this.setState({
                        nowPlaying: jsonedMovies.results
                    });
                    console.log("aaaaaaaaaaaaaaaaa", this.state.nowPlaying);
                },
                err => console.log(err)
            );
    }

    render() {
        return (
            <React.Fragment>
                <h3>Now Playing</h3>
                <div className="single-recommended pb-3">
                    {this.state.nowPlaying.map(movie => {
                        return (
                            <MovieList
                                movie={movie}
                                currentUser={this.props.currentUser}
                                userState={this.props.userState}
                            />
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

class PopularMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getPopular:
                "https://api.themoviedb.org/3/movie/popular?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1",
            popularMovies: []
        };
    }

    // ComponentDidMount this
    componentDidMount() {
        console.log("this is working");
        fetch(this.state.getPopular)
            .then(response => {
                return response.json();
            })
            .then(
                jsonedMovies => {
                    this.setState({
                        popularMovies: jsonedMovies.results
                    });
                },
                err => console.log(err)
            );
    }

    render() {
        return (
            <React.Fragment>
                <h3>Popular Movies</h3>
                <div className="single-recommended pb-3">
                    {this.state.popularMovies.map(movie => {
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

class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getNowPlaying: "https://api.themoviedb.org/3/movie/now_playing?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1",
            nowPlaying: [],
        }
    }

    // ComponentDidMount this 
    componentDidMount() {
        fetch(this.state.getNowPlaying)
            .then(response => {
                console.log(response)
                return response.json();
            }).then(jsonedMovies => {
                console.log(jsonedMovies)
                this.setState({
                    nowPlaying: jsonedMovies.results
                });
                console.log('aaaaaaaaaaaaaaaaa', this.state.nowPlaying)
            },
                err => console.log(err)
            );
    }

    render() {
        return (
            <div className="movies-comparison">
                <h3>Latest</h3>
                <table>
                    {this.state.nowPlaying.map(movie => {
                        return <MovieList movie={movie} currentUser={this.props.currentUser} />
                    })
                    }
                </table>
            </div>
        );

    }
}

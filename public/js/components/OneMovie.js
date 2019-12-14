class OneMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchUrl: "https://api.themoviedb.org/3/movie/" + this.props.match.params.movieId + "?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US",
            backdropUrl: "",
            posterUrl: "",
            title: "",
            overview: "",
            releaseDate: "",
            runtime: "",
            voteAverage: "",
            voteCount: ""
        }
    }
    componentDidMount() {
        fetch(this.state.fetchUrl).then(
            response => {
                console.log(response)
                return response.json()
            }
        ).then(
            jsonedResults => {
                console.log(jsonedResults)
                this.setState({
                    backdropUrl: "https://image.tmdb.org/t/p/w1280/" + jsonedResults.backdrop_path,
                    posterUrl: "https://image.tmdb.org/t/p/original/" + jsonedResults.poster_path,
                    title: jsonedResults.title,
                    overview: jsonedResults.overview,
                    releaseDate: jsonedResults.release_date,
                    runtime: jsonedResults.runtime,
                    voteAverage: jsonedResults.vote_average,
                    voteCount: jsonedResults.vote_count
                })
                console.log(this.state)
            }
        )
    }
    render() {
        return (
            <div>
                <img src={this.state.backdropUrl} />
            </div>
        )
    }
}
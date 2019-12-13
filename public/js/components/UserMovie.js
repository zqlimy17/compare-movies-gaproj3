class UserMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            title: "",
            singleUrl: "https://api.themoviedb.org/3/movie/" + this.props.movie + "?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US",
            removeMovieRoute: "/movies/" + this.props.currentUser._id + "/" + this.props.movie
        }
    }
    componentDidMount() {
        console.log('profile is working')
        fetch(this.state.singleUrl)
            .then(response => {
                return response.json();
            })
            .then(
                json => {
                    this.setState({
                        image: "http://image.tmdb.org/t/p/w300" + json.poster_path,
                        title: json.original_title
                    });
                },
                err => console.log(err)
            );
    }
    removeMovie = () => {
        console.log('remove movie route is:', this.state.removeMovieRoute);
        fetch(this.state.removeMovieRoute, {
            method: "DELETE"
        }).then(
            console.log('removed from favs')
        ).catch(error => console.log(error));
    }
    render() {
        return (
            <React.Fragment>
                <img src={this.state.image} />
                <button onClick={this.removeMovie}>Remove from Favorites goes here</button>
            </React.Fragment>
        )
    }
}
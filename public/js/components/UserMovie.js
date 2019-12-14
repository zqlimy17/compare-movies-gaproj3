class UserMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            title: "",
            singleUrl: "https://api.themoviedb.org/3/movie/" + this.props.movie + "?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US",
            removeMovieRoute: "/movies/" + this.props.currentUser._id + "/" + this.props.movie,
            isHidden: false
        }
    }
    componentDidMount() {
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
            )
    }
    removeMovie = () => {
        console.log('remove movie route is:', this.state.removeMovieRoute);
        fetch(this.state.removeMovieRoute, {
            method: "DELETE"
        }).then(
            this.setState({
                isHidden: true
            })
        ).catch(error => console.log(error));
        fetch("/sessions", {
            body: JSON.stringify(this.props.currentUser),
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(loggedInUser => {
                return loggedInUser.json();
            }).then(jsonedUser => {
                this.props.userState(jsonedUser);
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div className={this.state.isHidden ? 'hide' : ''}>
                <img src={this.state.image} />
                <button onClick={this.removeMovie}>Remove from Favorites goes here</button>
            </div>
        )
    }
}
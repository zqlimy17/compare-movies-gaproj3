class UserMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            title: "",
            url: "https://api.themoviedb.org/3/movie/" + this.props.movie + "?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US"
        }
    }
    componentDidMount() {
        fetch(this.state.url)
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
    render() {
        return (
            <React.Fragment>
                <img src={this.state.image} />
                <button>Remove from Favorites goes here</button>
            </React.Fragment>
        )
    }
}
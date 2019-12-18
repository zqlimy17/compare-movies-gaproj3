class MoviesResult extends React.Component {
    handleAddFavorite = movie => {
        fetch(`/movies/${this.props.currentUser._id}/${movie.id}`, {
            method: "PUT"
        })
            .then(console.log("added to favs"))
            .catch(error => console.log(error));
    };
    handleLike = movie => {
        fetch(`/movies/${this.props.currentUser._id}/${movie.id}`, {
            method: "PUT"
        })
            .then(response => {
                return response.json();
            })
            .then(jsonedUser => {
                console.log(this.props.currentUser);
                console.log(jsonedUser);
                this.props.userState(jsonedUser);
            })
            .catch(error => console.log(error));
    };
    handleUnlike = movie => {
        fetch(`/movies/${this.props.currentUser._id}/${movie.id}`, {
            method: "DELETE"
        })
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
            <div className="single-recommended py-3">
                {this.props.movieResults.map(movie => {
                    return (
                        <div>
                            <div className="hovereffect">
                                <img
                                    src={
                                        "http://image.tmdb.org/t/p/w185" +
                                        movie.poster_path
                                    }
                                />
                                <div className="overlay">
                                    <p>{movie.title}</p>
                                    <Link
                                        className="info mb-3"
                                        to={"/movie/" + movie.id}
                                    >
                                        More Info
                                    </Link>
                                    <br />
                                    {this.props.currentUser === "" ? (
                                        <Link
                                            className="btn btn-outline-warning btn-md"
                                            to="/login"
                                        >
                                            <i class="fa fa-star-o" /> Like!
                                        </Link>
                                    ) : this.props.currentUser.favorites.indexOf(
                                          movie.id.toString()
                                      ) === -1 ? (
                                        <button
                                            className="btn btn-outline-warning btn-md"
                                            onClick={() => {
                                                this.handleLike(movie);
                                            }}
                                        >
                                            <i class="fa fa-star-o" /> Like!
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-warning btn-md"
                                            onClick={() => {
                                                this.handleUnlike(movie);
                                            }}
                                        >
                                            <i class="fa fa-star" /> Unlike!
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

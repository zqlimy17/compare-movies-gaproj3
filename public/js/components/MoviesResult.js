class MoviesResult extends React.Component {
    handleAddFavorite = movie => {
        fetch("/movies/" + this.props.currentUser._id + "/" + movie.id, {
            method: "PUT"
        })
            .then(console.log("added to favs"))
            .catch(error => console.log(error));
    };
    render() {
        return (
            <div className="single-recommended">
                {this.props.movieResults ? (
                    this.props.movieResults.map(movie => {
                        return (
                            <Link to={"/movie/" + movie.id}>
                                <img
                                    src={
                                        "http://image.tmdb.org/t/p/w185" +
                                        movie.poster_path
                                    }
                                />
                            </Link>
                        );
                    })
                ) : (
                    <div>Search Movie Results</div>
                )}
            </div>
        );
    }
}

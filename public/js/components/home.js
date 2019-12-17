class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="bg">
                    <img className="bg-cover" src="./img/main_bg.jpg" />
                </div>
                <Search currentUser={this.state.currentUser} />
                {this.props.recommendedMovies ? (
                    <RecommendedMovies
                        currentUser={this.props.currentUser}
                        recommendedMovies={this.props.recommendedMovies}
                        userState={this.props.userState}
                    />
                ) : (
                    ""
                )}
                <NowPlaying
                    currentUser={this.props.currentUser}
                    userState={this.props.userState}
                />
                <PopularMovies
                    currentUser={this.props.currentUser}
                    userState={this.props.userState}
                />
            </React.Fragment>
        );
    }
}

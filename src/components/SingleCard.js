const SingleCard = (props) => {
    // console.log(props.movieData);
    const movie = props.movieData;
    const noImage = "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png";
    return (

        <div className="card">
            <h3>{movie?.Title}</h3>
            <div className="posterContainer">
                <img src={movie.Poster!=="N/A"?movie.Poster:noImage} alt="movie_card" />
            </div>
            <p>{movie?.Year}</p>
        </div>


    )
}

export default SingleCard;
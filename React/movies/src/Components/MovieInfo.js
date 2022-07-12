const MovieInfo = (props) => {
    return (
      <div>
        <h1>Title: {props.movie.Title}</h1>
        <h2>Year: {props.movie.Year}</h2>
        <img src={props.movie.Poster} alt={props.movie.Title} />
        <h3>Genre: {props.movie.Genre}</h3>
        <h4>Plot: {props.movie.Plot}</h4>
      </div>
    );
  };
  
  export default MovieInfo;
import { Link } from "react-router-dom";

const NetSingleFilm = function (props) {
  return (
    <Link to={`/MovieDetails/${props.film.imdbID}`}>
      <img
        className="img-fluid"
        src={props.film.Poster}
        alt={props.film.Title}
      />
    </Link>
  );
};

export default NetSingleFilm;

const NetSingleFilm = function (props) {
  return (
    <img className="img-fluid" src={props.film.Poster} alt={props.film.Title} />
  );
};

export default NetSingleFilm;

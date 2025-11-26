import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

const MovieDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=6d4fe941&i=${id}`)
      .then((res) => {
        if (res.ok) {
          console.log(`Server connesso ${res.ok}`);
          return res.json();
        } else {
          throw new Error(`Servere irrangiungibile ${res.status}`);
        }
      })
      .then((data) => {
        setFilm(data);
      })
      .catch((error) => {
        console.log(`Impossibile connettersi al server ${error}`);
      });
  }, [id]);

  if (!film) return null;
  return (
    <Container className="text-white mt-4 ju">
      <Card bg="dark" text="light" className="p-3 text-center">
        <Card.Img
          variant="top"
          src={film.Poster}
          alt={film.Title}
          style={{ width: "18rem" }}
          className="mx-auto"
        />
        <Card.Body>
          <Card.Title>{film.Title}</Card.Title>
          <Card.Text>Data uscita: {film.Released}</Card.Text>
          <Card.Text>Genere: {film.Genre}</Card.Text>
          <Card.Text>Critica: {film.imdbRating}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieDetails;

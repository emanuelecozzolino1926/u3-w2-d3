import { Container } from "react-bootstrap";
import NetHeadTitle from "./NetHeadTitle";
import NetFooter from "./NetFooter";
import NetFilm from "./NetFilm";
import NetProfile from "./NetProfile";

const NetContainer = () => {
  return (
    <>
      <Container fluid>
        <NetHeadTitle />
        <h4 className="my-3">Trending Now</h4>
        <NetFilm name={"Twilight"} />
        <h4 className="my-3">Watch it Again</h4>
        <NetFilm name={"Harry Potter"} />
        <h4 className="my-3">New Releases</h4>
        <NetFilm name={"Mission Impossible"} />
      </Container>
    </>
  );
};

export default NetContainer;

import { Component } from "react";
import NetSingleFilm from "./NetSingleFilm";
import { Row, Container, Spinner } from "react-bootstrap";

class NetFilm extends Component {
  state = {
    film: [],
    loading: true,
  };
  getFilm = function () {
    const apiUrl = "https://www.omdbapi.com/?apikey=6d4fe941&s=";
    const name = this.props.name;

    fetch(apiUrl + name)
      .then((response) => {
        if (response.ok) {
          console.log(`Server connesso ${response.ok}`);
          return response.json();
        } else {
          throw new Error(`Servere irrangiungibile ${response.status}`);
        }
      })
      .then((filmResault) => {
        this.setState({
          film: filmResault.Search,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(`Impossibile connettersi al server ${error}`);
        this.setState({
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.getFilm();
  }
  render() {
    console.log(this.state.film);
    return (
      <Row>
        <Container className="d-lg-flex overflow-auto">
          {this.state.loading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          {this.state.film.map((singleFilm) => (
            <NetSingleFilm film={singleFilm} key={singleFilm.imdbID} />
          ))}
        </Container>
      </Row>
    );
  }
}

export default NetFilm;

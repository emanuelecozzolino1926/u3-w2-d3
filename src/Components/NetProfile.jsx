import { Container } from "react-bootstrap";
import NetNavBar from "./NetNavBar";
import NetEditProfileHead from "./NetEditProfileHead";
import NetEditProfileCont from "./NetEditProfileCont";

const NetProfile = function () {
  return (
    <>
      <NetNavBar />
      <Container>
        <NetEditProfileHead />
        <NetEditProfileCont />
      </Container>
    </>
  );
};

export default NetProfile;

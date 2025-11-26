import {
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import "../profile.css";

const NetEditProfileCont = function () {
  return (
    <>
      <Row>
        <Col md={3}>
          <div className="profile-avatar-section">
            <img
              src="/avatar.png"
              alt="Profile Avatar"
              className="profile-avatar"
            />
          </div>
        </Col>

        <Col md={9}>
          <div className="profile-form">
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                className="profile-input"
                defaultValue="Strive Student"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <label className="profile-label">Language:</label>
              <DropdownButton
                id="dropdown-basic-button"
                title="English"
                variant="dark"
                className="profile-dropdown"
              >
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Italiano</Dropdown.Item>
                <Dropdown.Item>Español</Dropdown.Item>
                <Dropdown.Item>Français</Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            <Form.Group className="mb-4">
              <label className="profile-label mb-3">Maturity Settings:</label>
              <Button variant="secondary" className="maturity-btn">
                ALL MATURITY RATINGS
              </Button>
              <p className="maturity-text mt-2">
                Show titles of <strong>all maturity ratings</strong> for this
                profile.
              </p>
              <Button
                variant="outline-secondary"
                size="sm"
                className="edit-btn"
              >
                EDIT
              </Button>
            </Form.Group>

            <hr className="section-divider" />

            <Form.Group className="mb-4">
              <label className="profile-label mb-3">Autoplay controls</label>

              <Form.Check
                type="checkbox"
                id="autoplay1"
                label="Autoplay next episode in a series on all devices."
                defaultChecked
                className="mb-2"
              />

              <Form.Check
                type="checkbox"
                id="autoplay2"
                label="Autoplay previews while browsing on all devices."
                defaultChecked
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
      <hr className="profile-divider mt-5" />

      <div className="profile-actions">
        <Button variant="light" size="lg" className="px-5">
          SAVE
        </Button>
        <Button variant="outline-secondary" size="lg" className="px-4">
          CANCEL
        </Button>
        <Button variant="outline-secondary" size="lg" className="px-4">
          DELETE PROFILE
        </Button>
      </div>
    </>
  );
};

export default NetEditProfileCont;

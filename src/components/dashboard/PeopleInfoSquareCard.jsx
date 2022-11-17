import React from "react";
import { Button, Col } from "react-bootstrap";


function PeopleInfoSquareCard({
  imgSrc,
  name,
  title,
  marginEnd,
}) {
  return (
    <Col
      className={`${
        marginEnd ? "me-2" : ""
      } supervisor-tab bg-light shadow  rounded-1`}
    >
      <div className="supervisor-tab__background-pic" />
      <div className="p-3 d-flex flex-column align-items-center">
        <img
          className="supervisor-tab__profile-img rounded-circle border border-5 border-white"
          src={imgSrc}
          alt="Profile"
        />
        <h4>{name}</h4>
        <p>{title}</p>
        <Button
          className="bg-success bg-opacity-25 text-dark"
          variant="success"
        >
          View Details
        </Button>
      </div>
    </Col>
  );
}

export default PeopleInfoSquareCard;

import React from "react";

import { Col } from "react-bootstrap";



function InfoCard({ numb, value }) {
    return (
        <Col className="me-4 bg-light shadow p-2 rounded-1 infoCard">
            <h3>{numb}</h3>
            <p>{value}</p>
        </Col>
    );
}

export default InfoCard;

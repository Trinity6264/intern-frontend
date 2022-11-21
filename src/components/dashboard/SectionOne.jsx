import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkWithIconAndFileSize from "./FilesDocumentTabs";
import profileImage from "../../assets/imgs/SidePaneProfileImage.png";
import PeopleInfoSquareCard from "./PeopleInfoSquareCard";

function SectionAfterHeading01() {
    return (
        <Container className="section-after-heading01">
            <Row>
                <Col sm={12} lg={4} className="me-4 bg-light shadow p-3 rounded-1">
                    {/* Files and document tab */}
                    <p className="text-muted fw-semibold fs-5">Files/Documents</p>
                    <Stack gap={4}>
                        <Link
                            className="text-decoration-none text-dark"
                            to="/form1"
                        >
                            <LinkWithIconAndFileSize
                                nameOfLink="IRB1 student form"
                            />
                        </Link>
                        <Link
                            className="text-decoration-none text-dark"
                            to="/form2"
                        >
                            <LinkWithIconAndFileSize
                                nameOfLink="IRB2 student form"
                            />
                        </Link>
                        <Link
                            className="text-decoration-none text-dark"
                            to="/form5"
                        >
                            <LinkWithIconAndFileSize
                                nameOfLink="IRB5 student form"
                            />
                        </Link>
                    </Stack>
                </Col>
                {/* Headteacher tab */}
                <PeopleInfoSquareCard
                    imgSrc={profileImage}
                    name="Headteacher name"
                    title="Headteacher"
                    marginEnd
                />
                {/* Supervisor tab */}
                <PeopleInfoSquareCard
                    imgSrc={profileImage}
                    name="Supervisor name"
                    title="Supervisor"
                    marginEnd={false}
                />
            </Row>
        </Container>
    );
}

export default SectionAfterHeading01;
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { mentorInfo } from "../../features/user/mentorSlice";
import InfoCard from "./Infocard";


function SecondSectionAfterHeading() {
    const mentor = useSelector(mentorInfo)
    const [mentorName, setMentorName] = useState('')

    useEffect(() => {
        if (mentor.status === 'loaded') {
            const Name = mentor.data.data.Name;
            setMentorName(Name)
        }
    }, [mentor])

    return (
        <Container className="section-after-heading02">
            <div className="first-div">
                <div className="first-div-01">
                    <InfoCard numb="135" value="Remaining Internship days" />
                    <InfoCard numb="15" value="Review made by supervisor" />
                    <InfoCard numb="3" value="Task remaining" />
                </div>
                <div className="first-div-02">
                    <Col className="me-2 bg-light shadow rounded-1 mentor-card" lg="7">
                        <div className="mentor-div-01" />
                        <div className="mentor-div-02">
                            <div className="mentor-info">
                                <div className="img-wrapper" />
                                <div className="info-wrapper">
                                    <p>{ mentorName }
                                    </p>
                                    <small>Mentor Name</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
            <div className="second-div">
                <p className="me-2 bg-light shadow p-2 rounded-1 goal-card">
                    {" "}
                    Your Internship Goal
                </p>
                <Container className="me-2 bg-light shadow p-3 rounded-1 desc-card">
                    <p>
                        Here will container a short description of your internship goal. For
                        example An an I.T primary teacher in Ammustee basic scholl. You are
                        allowed to teach the subject syllables well to the understanding of
                        these kids. Make sure all lesson notes are made and blah blah balh
                    </p>
                </Container>
            </div>
        </Container>
    );
}

export default SecondSectionAfterHeading;

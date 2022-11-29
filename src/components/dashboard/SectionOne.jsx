import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkWithIconAndFileSize from "./FilesDocumentTabs";
import profileImage from "../../assets/imgs/SidePaneProfileImage.png";
import PeopleInfoSquareCard from "./PeopleInfoSquareCard";
import { useSelector } from "react-redux";
import { allInfoStatus, headMasterInfos, supervisorInfos } from "../../features/user/userSlice";
import CustomModal from "../profile/custom_model";

function SectionAfterHeading01() {
    const infoStatus = useSelector(allInfoStatus)
    const headMaster = useSelector(headMasterInfos)
    const supervisor = useSelector(supervisorInfos)



    const [supervisorName, setSupervisorName] = useState('')
    const [headName, setHeadName] = useState('')

    useEffect(() => {
        if (infoStatus === 'loaded') {
            const { head_name } = headMaster;
            const { sup_name } = supervisor;
            setHeadName(head_name)
            setSupervisorName(sup_name)
        }
    }, [infoStatus, headMaster, supervisor])

    const [open, setOpen] = useState(false)
    const openHandle = () => {
        setOpen(true);
    }
    const closeHandle = () => {
        setOpen(false);
    }

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
                    name={infoStatus === 'loaded' ? headName : ""}
                    title="Headmaster"
                    marginEnd
                    onTap={openHandle}
                />
                {/* Supervisor tab */}
                <PeopleInfoSquareCard
                    imgSrc={profileImage}
                    name={infoStatus === 'loaded' ? supervisorName : ""}
                    title="Supervisor"
                    marginEnd={false}
                    onTap={openHandle}
                />
                <CustomModal disMiss={setOpen} isShow={open}/>
            </Row>
        </Container>
    );
}

export default SectionAfterHeading01;
import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CustomTextInput from '../../../../components/dashboard/CustomTextInput'
import { selectFormTwo } from '../../../../features/dashboard/FormIRB2Slice'
import irb2FormData from '../../../../helper/from_irb2_data'

const FORM_IRB2_TextFiled = () => {
    const nav = useNavigate()
    const disPatch = useDispatch()
    const formTwoData = useSelector(selectFormTwo)
    const [isUpdate, setUpdate] = useState(false);

    const [calendarDate, setCalendarDate] = useState(null);
    const [date, setDate] = useState("");
    const [Class, setClassTaught] = useState("");
    const [Subject, setSubject] = useState("");
    const [Topic, setTopic] = useState("");
    const [academicYear, setAcademyYear] = useState("");

    const [Col_1, setCol1] = useState();
    const [Col_2, setCol2] = useState();
    const [Col_3, setCol3] = useState();
    const [Col_4, setCol4] = useState();
    const [Col_5, setCol5] = useState();
    const [Col_6, setCol6] = useState();
    const [Col_7, setCol7] = useState();
    const [Col_8, setCol8] = useState();
    const [Col_9, setCol9] = useState();
    const [Col_10, setCol10] = useState();

    // Fetching data
    useEffect(() => {
        if (formTwoData['data'] === null) return;
        


        setUpdate(true)
        
        setClassTaught(formTwoData['data'][''])
        setCol1(formTwoData['data']['Col_1'] ?? '')
        setCol2(formTwoData['data']['Col_2'] ?? '')
        setCol3(formTwoData['data']['Col_3'] ?? '')
        setCol4(formTwoData['data']['Col_4'] ?? '')
        setCol5(formTwoData['data']['Col_5'] ?? '')
        setCol6(formTwoData['data']['Col_6'] ?? '')
        setCol7(formTwoData['data']['Col_7'] ?? '')
        setCol8(formTwoData['data']['Col_8'] ?? '')
        setCol9(formTwoData['data']['Col_9'] ?? '')
        setCol10(formTwoData['data']['Col_10'] ?? '')
    }, [formTwoData])


    return (
        <>
            <div className="form__top-background" />
            <section className="container">
                <h1 className="form-heading">
                    <HiOutlineDocumentText /> Form IRB2
                </h1>
                <h2 className="form-heading2">Post Observation Conference Form</h2>
                <div className="mb-5">
                    <h3 className="instruction-section__heading">Instructions:</h3>
                    <ul>
                        <li className="list-group-item">
                            This is to be completed by the student teacher for independent
                            reflection and handed over to mentor before the post-observation
                            conference
                        </li>
                    </ul>
                </div>
                <hr className="mb-5" />
                <div className="form-section">
                    <form action="/student/irb1" method="post">
                        <legend className="mb-4">
                            Post-Observation Reflection For Student Teacher
                        </legend>
                        <div className="mb-5">
                            <div className="row">
                                <div className="form-group col-md-6 mb-3">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        placeholder="Subject"
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3 col-md-6">
                                    <label htmlFor="topic">Topic</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="topic"
                                        placeholder="Topic"
                                        onChange={(e) => setTopic(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6 mb-3">
                                    <label htmlFor="date">Date</label>
                                    <ReactDatePicker
                                        id="date"
                                        selected={calendarDate}
                                        onChange={(onChangeDate) => {
                                            const formattedDate = `${onChangeDate
                                                .getFullYear()
                                                .toString()}-${(
                                                    onChangeDate.getMonth() + 1
                                                ).toString()}-${onChangeDate.getDate()}`;
                                            setDate(`${formattedDate}`);
                                            setCalendarDate(onChangeDate);
                                        }}
                                        className="form-control"
                                        isClearable
                                        placeholderText="Select Date"
                                        closeOnScroll
                                    />
                                </div>
                                <div className="form-group mb-3 col-md-6">
                                    <label htmlFor="class">Class</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="class"
                                        placeholder="Class"
                                        onChange={(e) => setClassTaught(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mb-3 col-md-6">
                                    <label htmlFor="academicYear">Academic Year</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="academicYear"
                                        placeholder="Class"
                                        onChange={(e) => setAcademyYear(e.target.value)}
                                    />
                                </div>
                               
                            </div>
                        </div>
                        <ol className="form-list">
                            <CustomTextInput htmlFor={irb2FormData[0].labelFor} id={irb2FormData[0].inputID} label={irb2FormData[0].label} name={irb2FormData[0].inputName} value={Col_1} onChange={e => setCol1(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[1].labelFor} id={irb2FormData[1].inputID} label={irb2FormData[1].label} name={irb2FormData[1].inputName} value={Col_2} onChange={e => setCol2(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[2].labelFor} id={irb2FormData[2].inputID} label={irb2FormData[2].label} name={irb2FormData[2].inputName} value={Col_3} onChange={e => setCol3(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[3].labelFor} id={irb2FormData[3].inputID} label={irb2FormData[3].label} name={irb2FormData[3].inputName} value={Col_4} onChange={e => setCol4(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[4].labelFor} id={irb2FormData[4].inputID} label={irb2FormData[4].label} name={irb2FormData[4].inputName} value={Col_5} onChange={e => setCol5(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[5].labelFor} id={irb2FormData[5].inputID} label={irb2FormData[5].label} name={irb2FormData[5].inputName} value={Col_6} onChange={e => setCol6(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[6].labelFor} id={irb2FormData[6].inputID} label={irb2FormData[6].label} name={irb2FormData[6].inputName} value={Col_7} onChange={e => setCol7(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[7].labelFor} id={irb2FormData[7].inputID} label={irb2FormData[7].label} name={irb2FormData[8].inputName} value={Col_8} onChange={e => setCol8(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[8].labelFor} id={irb2FormData[8].inputID} label={irb2FormData[8].label} name={irb2FormData[8].inputName} value={Col_9} onChange={e => setCol9(e.target.value)} />

                            <CustomTextInput htmlFor={irb2FormData[9].labelFor} id={irb2FormData[9].inputID} label={irb2FormData[9].label} name={irb2FormData[9].inputName} value={Col_10} onChange={e => setCol10(e.target.value)} />
                            <button type="submit" className="btn btn-success mb-3">
                                Submit Form IRB2
                            </button>
                        </ol>
                    </form>
                </div>
            </section>
        </>
    )
}

export default FORM_IRB2_TextFiled
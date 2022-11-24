import React, { useEffect, useState } from 'react'
import ReactDatePicker from "react-datepicker";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useSelector } from 'react-redux';
import CustomTextInput from '../../../../components/dashboard/CustomTextInput';
import { selectFormFive } from '../../../../features/dashboard/FormIRB5Slice';
import irb5FormData from '../../../../helper/form_irb5_data';
const FORM_IRB5_TextFiled = () => {
    const [calendarDate, setCalendarDate] = useState(null);

    const [date, setDate] = useState("");
    const [update, setUpdate] = useState(false);
    const [academyYear, setAcademyYear] = useState("");
    const [Col_1, setCol1] = useState("");
    const [Col_2, setCol2] = useState("");
    const [Col_3, setCol3] = useState("");
    const [Col_4, setCol4] = useState("");
    const [Col_5, setCol5] = useState("");
    const [Col_6, setCol6] = useState("");
    const [Col_7, setCol7] = useState("");
    const [Col_8, setCol8] = useState("");

    const formFiveData = useSelector(selectFormFive)

    // Fetching data
    useEffect(() => {
        if (formFiveData['data'] === null) return;

        setUpdate(true)
        setCalendarDate(new Date(formFiveData['data']['Date']) ?? '')
        setDate((formFiveData['data']['Date']).split('T')[0] ?? '')
        setAcademyYear(formFiveData['data']['Academic_Year'] ?? '')
        setCol1(formFiveData['data']['Col_1'] ?? '')
        setCol2(formFiveData['data']['Col_2'] ?? '')
        setCol3(formFiveData['data']['Col_3'] ?? '')
        setCol4(formFiveData['data']['Col_4'] ?? '')
        setCol5(formFiveData['data']['Col_5'] ?? '')
        setCol6(formFiveData['data']['Col_6'] ?? '')
        setCol7(formFiveData['data']['Col_7'] ?? '')
        setCol8(formFiveData['data']['Col_8'] ?? '')

    }, [formFiveData])


    return (
        <>
            <div className="form__top-background" />
            <section className="container">
                <h1 className="form-heading">
                    <HiOutlineDocumentText /> Form IRB5
                </h1>
                <h2 className="form-heading2">Reflection Log Form</h2>
                {/* -----------Start of intern details section---------- */}
                <div className="mb-5">
                    <div className="row">
                        {/* It's likely we would get the Course from the database */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="academyYear">Academic Year</label>
                            <input
                                type="text"
                                className="form-control"
                                id="academyYear"
                                value={academyYear}
                                placeholder="Academic Year"
                                onChange={(e) => setAcademyYear(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            {/* But for the date we would be making the user make the changes */}
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
                    </div>
                </div>
                {/* --------End of intern detals-------- */}
                <hr className="mb-5" />
                <div className="form-section">
                    <form action="/student/irb1" method="post">
                        <legend className="mb-4">
                            Sample Reflection Analysis Questions
                        </legend>
                        <ol className="form-list">
                            <CustomTextInput htmlFor={irb5FormData[0].labelFor} id={irb5FormData[0].inputID} label={irb5FormData[0].label} name={irb5FormData[0].inputName} value={Col_1} onChange={e => setCol1(e.target.value)} />

                            <CustomTextInput htmlFor={irb5FormData[1].labelFor} id={irb5FormData[1].inputID} label={irb5FormData[1].label} name={irb5FormData[1].inputName} value={Col_2} onChange={e => setCol2(e.target.value)} />

                            <CustomTextInput htmlFor={irb5FormData[2].labelFor} id={irb5FormData[2].inputID} label={irb5FormData[2].label} name={irb5FormData[2].inputName} value={Col_3} onChange={e => setCol3(e.target.value)} />

                            <CustomTextInput htmlFor={irb5FormData[3].labelFor} id={irb5FormData[3].inputID} label={irb5FormData[3].label} name={irb5FormData[3].inputName} value={Col_4} onChange={e => setCol4(e.target.value)} />

                            <CustomTextInput htmlFor={irb5FormData[4].labelFor} id={irb5FormData[4].inputID} label={irb5FormData[4].label} name={irb5FormData[4].inputName} value={Col_5} onChange={e => setCol5(e.target.value)} />

                            <CustomTextInput htmlFor={irb5FormData[5].labelFor} id={irb5FormData[5].inputID} label={irb5FormData[5].label} name={irb5FormData[5].inputName} value={Col_6} onChange={e => setCol6(e.target.value)} />

                            <CustomTextInput htmlFor={irb5FormData[6].labelFor} id={irb5FormData[6].inputID} label={irb5FormData[6].label} name={irb5FormData[6].inputName} value={Col_7} onChange={e => setCol7(e.target.value)} />

                            <CustomTextInput htmlFor={irb5FormData[7].labelFor} id={irb5FormData[7].inputID} label={irb5FormData[7].label} name={irb5FormData[7].inputName} value={Col_8} onChange={e => setCol8(e.target.value)} />

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

export default FORM_IRB5_TextFiled
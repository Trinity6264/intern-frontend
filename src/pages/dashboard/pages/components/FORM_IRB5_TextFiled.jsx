import React, { useState } from 'react'
import ReactDatePicker from "react-datepicker";
import { HiOutlineDocumentText } from "react-icons/hi";
import irb5FormData from '../../../../helper/form_irb5_data';
const FORM_IRB5_TextFiled = () => {
    const [calendarDate, setCalendarDate] = useState(null);
    const [date, setDate] = useState("");
    const [StId, setStId] = useState("");
    const [AcademyYear, setAcademyYear] = useState("");
    const [Col1, setCol1] = useState("");
    const [Col2, setCol2] = useState("");
    const [Col3, setCol3] = useState("");
    const [Col4, setCol4] = useState("");
    const [Col5, setCol5] = useState("");
    const [Col6, setCol6] = useState("");
    const [Col7, setCol7] = useState("");
    const [Col8, setCol8] = useState("");
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
                            {irb5FormData.map((data) => (
                                <li key={data.key} className="form-list">
                                    <div className="form-group mb-3">
                                        <label htmlFor={data.labelFor}>{data.label}</label>
                                        <textarea
                                            name={data.inputName}
                                            id={data.inputID}
                                            rows={6}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </li>
                            ))}
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
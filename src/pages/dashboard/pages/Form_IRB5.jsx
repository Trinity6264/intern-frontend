/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
// import FormIRB5InternDetails from "../../components/FormIRB5_InternDetails";
import irb5FormData from "../../../helper/form_irb5_data";

const FormIRB5 = () => {
    return (
        <>
            <div className="form__top-background" />
            <section className="container">
                <h1 className="form-heading">
                    <HiOutlineDocumentText /> Form IRB5
                </h1>
                <h2 className="form-heading2">Reflection Log Form</h2>
                {/* -----------Start of intern details section---------- */}
                {/* <FormIRB5InternDetails /> */}
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
    );
}

export default FormIRB5;
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import irb1FormData from "../../../helper/form_irb1_data";
import './formStyle.css'

const FormIRB1 = () => {
  return (
    <>
      <div className="form__top-background" />
      <section className="container">
        <h1 className="form-heading">
          <HiOutlineDocumentText /> Form IRB1
        </h1>
        <h2 className="form-heading2">
          Pre-Observation Conference Guide. To be filled by the mentee.
        </h2>
        <div className="mb-5">
          <h3 className="instruction-section__heading">Instructions:</h3>
          <ul>
            <li className="list-group-item">
              Please review and complete the questions for &ldquo;Planning For
              Student Learning&rdquo;. They are provided as a guide for the
              pre-observation conference and will serve as an agenda.
            </li>
            <li className="list-group-item">
              Please review and complete the questions for &ldquo;Planning For
              Student Learning&rdquo;. They are provided as a guide for the
              pre-observation conference and will serve as an agenda.
            </li>
          </ul>
        </div>
        <hr className="mb-5" />
        <div className="form-section">
          <form action="/student/irb1" method="post">
            <legend className="mb-4">
              Planing for students learning questions
            </legend>
            <ol className="form-list">
              {irb1FormData.map((data) => (
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
                Submit Form IRB1
              </button>
            </ol>
          </form>
        </div>
      </section>
    </>
  );
}

export default FormIRB1;

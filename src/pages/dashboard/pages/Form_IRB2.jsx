/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import irb2FormData from "../../../helper/from_irb2_data";

const FormIRB2 = () => {
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
            <ol className="form-list">
              {irb2FormData.map((data) => (
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

export default FormIRB2;
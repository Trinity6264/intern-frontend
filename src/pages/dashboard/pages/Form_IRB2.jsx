/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormTwo, selectFormTwo } from "../../../features/dashboard/FormIRB2Slice";
import FORM_IRB2_TextFiled from "./components/FORM_IRB2_TextFiled";

const FormIRB2 = () => {
  const formTwoData = useSelector(selectFormTwo)
  const disPatch = useDispatch()

  useEffect(() => {
    disPatch(fetchFormTwo()).unwrap()
  }, [disPatch])

  return (
    formTwoData.status === 'loading' ? <p>Loading</p > : <FORM_IRB2_TextFiled />
  );
}

export default FormIRB2;
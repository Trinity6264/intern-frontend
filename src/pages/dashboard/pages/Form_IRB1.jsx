
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomLoadingComponent from "../../../components/dashboard/CustomLoadingComponent";
import { fetchFormOne, selectFormOne } from "../../../features/dashboard/dashboardSlice";

import FORM_IRB1_TextFiled from "./components/FORM_IRB1_TextFiled";
import './formStyle.css'


const FormIRB1 = () => {
  const formOneData = useSelector(selectFormOne)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFormOne()).unwrap()
  }, [])
  

  return (
    formOneData.status === 'loading' ? <CustomLoadingComponent/>  : <FORM_IRB1_TextFiled formData={formOneData['data']} />
  );
}

export default FormIRB1;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomLoadingComponent from "../../../components/dashboard/CustomLoadingComponent";
import { fetchFormFive, selectFormFive } from "../../../features/dashboard/FormIRB5Slice";
import FORM_IRB5_TextFiled from "./components/FORM_IRB5_TextFiled";

const FormIRB5 = () => {
    const formFiveData = useSelector(selectFormFive)
    const disPatch = useDispatch()

    useEffect(() => {
        disPatch(fetchFormFive()).unwrap()
    }, [disPatch])

    return (
        formFiveData.status === 'loading' ? <CustomLoadingComponent/> : <FORM_IRB5_TextFiled />
    );
}

export default FormIRB5;
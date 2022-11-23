import React, { useEffect, useState } from 'react'
import irb1FormData from "../../../../helper/form_irb1_data";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { selectFormOne, updateFormOne } from "../../../../features/dashboard/dashboardSlice";
import CustomTextInput from '../../../../components/dashboard/CustomTextInput';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const FORM_IRB1_TextFiled = () => {
    const nav = useNavigate()
    const disPatch = useDispatch()
    const formOneData = useSelector(selectFormOne)
    const [Col_1, setCol1] = useState();
    const [isUpdate, setUpdate] = useState(false);
    const [Col_2, setCol2] = useState();
    const [Col_3, setCol3] = useState();
    const [Col_4, setCol4] = useState();
    const [Col_5, setCol5] = useState();
    const [Col_6, setCol6] = useState();
    const [Col_7, setCol7] = useState();
    const [Col_8, setCol8] = useState();


    const updateForm = async () => {
        const toastId = 1;
        const dataId = 2;
        toast.loading('Please Wait...', { toastId })
        const resp = await disPatch(updateFormOne({ 'col1': Col_1, 'col2': Col_2, 'col3': Col_3, 'col4': Col_4, 'col5': Col_5, 'col6': Col_6, 'col7': Col_7, 'col8': Col_8 })).unwrap()
        console.log(resp);
        toast.dismiss(toastId)
        if (resp['status'] === false) {
            toast.error(resp['msg'], { toastId: dataId })
            return;
        }
        nav('/', { replace: true })
        toast.success(resp['msg'])
    }



    const onSubmit = (e) => {
        e.preventDefault();
        updateForm()
    }
    useEffect(() => {
        if (formOneData['data'] === null) return;
        console.log(formOneData);
        setUpdate(true)
        setCol1(formOneData['data']['Col_1'] ?? '')
        setCol2(formOneData['data']['Col_2'] ?? '')
        setCol3(formOneData['data']['Col_3'] ?? '')
        setCol4(formOneData['data']['Col_4'] ?? '')
        setCol5(formOneData['data']['Col_5'] ?? '')
        setCol6(formOneData['data']['Col_6'] ?? '')
        setCol7(formOneData['data']['Col_7'] ?? '')
        setCol8(formOneData['data']['Col_8'] ?? '')
    }, [formOneData])



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
                    <form>
                        <legend className="mb-4">
                            Planing for students learning questions
                        </legend>
                        <ol className="form-list">
                            <CustomTextInput htmlFor={irb1FormData[0].labelFor} id={irb1FormData[0].inputID} label={irb1FormData[0].label} name={irb1FormData[0].inputName} value={Col_1} onChange={e => setCol1(e.target.value)} />

                            <CustomTextInput htmlFor={irb1FormData[1].labelFor} id={irb1FormData[1].inputID} label={irb1FormData[1].label} name={irb1FormData[1].inputName} value={Col_2} onChange={e => setCol2(e.target.value)} />

                            <CustomTextInput htmlFor={irb1FormData[2].labelFor} id={irb1FormData[2].inputID} label={irb1FormData[2].label} name={irb1FormData[2].inputName} value={Col_3} onChange={e => setCol3(e.target.value)} />
                            <CustomTextInput htmlFor={irb1FormData[3].labelFor} id={irb1FormData[3].inputID} label={irb1FormData[3].label} name={irb1FormData[3].inputName} value={Col_4} onChange={e => setCol4(e.target.value)} />
                            <CustomTextInput htmlFor={irb1FormData[4].labelFor} id={irb1FormData[4].inputID} label={irb1FormData[4].label} name={irb1FormData[4].inputName} value={Col_5} onChange={e => setCol5(e.target.value)} />
                            <CustomTextInput htmlFor={irb1FormData[5].labelFor} id={irb1FormData[5].inputID} label={irb1FormData[5].label} name={irb1FormData[5].inputName} value={Col_6} onChange={e => setCol6(e.target.value)} />
                            <CustomTextInput htmlFor={irb1FormData[6].labelFor} id={irb1FormData[6].inputID} label={irb1FormData[6].label} name={irb1FormData[6].inputName} value={Col_7} onChange={e => setCol7(e.target.value)} />
                            <CustomTextInput htmlFor={irb1FormData[7].labelFor} id={irb1FormData[7].inputID} label={irb1FormData[7].label} name={irb1FormData[7].inputName} value={Col_8} onChange={e => setCol8(e.target.value)} />
                            <button onClick={onSubmit} type="submit" className="btn btn-success mb-3">
                                {isUpdate ? 'Update Form IRB1' : 'Submit Form IRB1'}
                            </button>
                        </ol>
                    </form>
                </div>
            </section>

        </>

    )
}

export default FORM_IRB1_TextFiled
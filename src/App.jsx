import React,{ useEffect }  from 'react'  
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import FormIRB1 from "./pages/dashboard/pages/Form_IRB1";
import FormIRB2 from "./pages/dashboard/pages/Form_IRB2";
import FormIRB5 from "./pages/dashboard/pages/Form_IRB5";
import Profile from "./pages/profile/Profile";
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersInfo, isLoaded } from './features/user/userSlice';



function App() {

  const isLoadedState = useSelector(isLoaded)
  const disPatch = useDispatch()
  useEffect(() => {
    if (isLoadedState) return;
    disPatch(getAllUsersInfo()).unwrap()
  }, [disPatch,isLoadedState])

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Dashboard layout  */}
          <Route path='/' element={<DashboardLayout />}>
            <Route path="/" index element={<Dashboard />} />
            <Route path="/form1" element={<FormIRB1 />} />
            <Route path="/form2" element={<FormIRB2 />} />
            <Route path="/form5" element={<FormIRB5 />} />
          </Route>
          <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

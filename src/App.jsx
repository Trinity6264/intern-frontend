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




function App() {
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
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes} from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";




function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/"  index element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

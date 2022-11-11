import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

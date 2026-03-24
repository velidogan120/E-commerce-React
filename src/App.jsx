import { ToastContainer } from "react-toastify";
import "./App.css";
import Router from "./lib/router/Router";
function App() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;

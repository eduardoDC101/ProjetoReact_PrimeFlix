import React from "react";
import RoutesApp from "./router";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1500} />
      <RoutesApp />
    </div>
  );
}

export default App;

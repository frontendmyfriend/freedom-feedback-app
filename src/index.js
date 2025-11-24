import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";


function App(){
return <h1>My app</h1>
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

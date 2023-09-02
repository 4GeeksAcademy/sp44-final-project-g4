//import react into the bundle
import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
// ReactDOM.render(<Layout />, document.querySelector("#app"));

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Layout/>);
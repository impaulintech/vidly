import React from "react";
import ReactDOM from "react-dom"; 
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from './components/movies';

ReactDOM.render(<Movies />, document.getElementById("root"));
reportWebVitals();

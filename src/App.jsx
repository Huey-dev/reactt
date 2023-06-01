import React from "react";
import ReactDOM from "react-dom";
import styles from './style.css'
import Nav from './components/Nav' 
import Main from './components/main' 


export default function App() {
  return (
    <div className="container">
      <Nav/>
      <Main/>
    </div>
  )

}
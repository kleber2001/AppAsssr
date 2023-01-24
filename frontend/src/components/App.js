import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
// react router dom
import { BrowserRouter as Router } from "react-router-dom";
import Direccionamiento from "./Direccionamiento";



function App(){
    return (
        <Router>
            <div>
                <Header />
                    <Direccionamiento />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
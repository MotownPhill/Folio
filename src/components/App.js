import React from  "react";

import Body from "./Body";
import Footer from "./Footer";
import Navbar  from "./Navbar";


const App = (props) => {

    return (
        <div className="App">
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
};

export default App
import React from  "react";

const App = (props) => {
    const Navbar = () => {
        return <h1>Navbar</h1>
    }
    return (
        <div>
            <Navbar />
            <h1>{props.title}</h1>
        </div>
    );
};

export default App
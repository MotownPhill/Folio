import React from "react";
import ReactDOM from "react-dom";

import data from "../data/unreadContent.json";
console.log(data);


ReactDOM.render(
  React.createElement('h2', null, 'Motown Philly Back Again'),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


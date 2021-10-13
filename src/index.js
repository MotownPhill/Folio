import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


import data from "../data/unreadContent.json";

// function Article(props) {
//   const article =
// }
const App = (props) => {
  // const [articles, setArticles] = useState([]);

  // useEffect(()=> {
  //   const mapArticles = (article) => {
  //     return <div>{article}</div>
  //   }
  //   const mappedArticles = data.items.map(mapArticles)
  //   setArticles(mappedArticles)
  // })

  return (
      <div className="container">
          <h1>{data.title}</h1>
      </div>
  );
};


ReactDOM.render(
  <App articles={data.items} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


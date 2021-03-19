import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';

function Card(props) {
  // console.log("Where are here in card");
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="class_category">{props.title}</span>
            <h3 className="card__title"> {props.sname}</h3>
            <a href={props.link} target="_blank">
              <button> Learn More </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* Report Code note good Practice */}
    {/* <div className="cards">
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGdufPIPhg3rrcLAmfAxB1RaAznCsl5gnNhNBe8ilhaCBAU-neKQJtrIA-szm132RsLs&usqp=CAU" alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="class_category">Top Programming Langauges</span>
          <h3 className="card__title"> Python</h3>
          <a href="" target="_blank">
            <button> Learn More </button>
          </a>
        </div>
      </div>
    </div> */}

    {/* Console ma jaa kr check kro kesi bhi tag sath $something likha hoga for example $0 usay access krna ka liye */}
    {/* <input type="text" value="sherry" /> */}

    <Card
      imgsrc="https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg"
      title="Top Programming Langauges"
      sname="Javascript"
      link="https://www.w3schools.com/js/DEFAULT.asp"
    />

    <Card
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGdufPIPhg3rrcLAmfAxB1RaAznCsl5gnNhNBe8ilhaCBAU-neKQJtrIA-szm132RsLs&usqp=CAU"
      title="Top Programming Langauges"
      sname="Python"
      link="https://www.w3schools.com/python/python_intro.asp"
    />

    <Card
      imgsrc="https://i.ytimg.com/vi/wCZ5TJCBWMg/maxresdefault.jpg"
      title="Top Programming Langauges"
      sname="PHP"
      link="https://www.w3schools.com/php/"
    />
  </React.StrictMode>,
  document.getElementById("root")
);

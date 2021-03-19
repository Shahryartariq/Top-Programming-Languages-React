import React from "react";
import './Cards.css';

function Cards(props) {
    // console.log("Where are here in card");
    console.log(props);
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card__img" />
            <div className="card__info">
              <span className="card_category">{props.title}</span>
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

export default Cards;

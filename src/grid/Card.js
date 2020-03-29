import React from "react";
import "./style.css";
import sendAnalitycs from '../analitycs'


export default function Card({ link, linkImg, title, fonte, date }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendAnalitycs({name: link, category: "NEWS", type: "CLICK"})}
    >
      <div className="card news">
        <div
          className="news-img"
          style={{ backgroundImage: `url('${linkImg}')` }}
        />

        <div className="card-body card-body-height">
          <p className="card-text">{title}</p>
        </div>

        <div className="card-footer bg-transparent text-footer-size">
          <div className="float-left news-fonte">{fonte}</div>
          <div className="float-right news-data">{date}</div>
        </div>
      </div>
    </a>
  );
}

import React from "react";

export default function Card(props){
    return (


        <div className="card">
            {props.openSpots===0 && <div className="card-badge">SOLDOUT</div>}
            <img src={`./${props.img}`} className="card--image"/>
            <div className="card--stats">
                <span className="card--star">⭐</span>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
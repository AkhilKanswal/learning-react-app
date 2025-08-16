import React from "react";

export default function Contacts(props){
    return(
        <div className="contact-card">
            <img src={props.img} alt="192"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>📞 {props.phone}</p>
            </div>
            <div className="info-group">
                <p>✉️ {props.email}</p>
            </div>
        </div>
    )
}
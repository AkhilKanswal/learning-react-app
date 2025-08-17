import React from "react";

export default function Card(){
    return (


        <div className="card">
            <img src="./logo192.png" className="card--image"/>
            <div className="card--stats">
                <span className="card--star">⭐</span>
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons from Kaite Zaffers</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
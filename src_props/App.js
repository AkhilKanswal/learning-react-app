import React from "react";
import Contacts from "./Contacts";
export default function App(){
    return(
        <div className="DivBox">
            <Contacts 
                img="logo192.png"
                name="Mr. Whiskerson"
                phone="+91 25167 46743"
                email="mr.whiskazReactLogo.icon"
            />
            <Contacts 
                img="spain.png"
                name="Fluffykins"
                phone="+91 45695 31756"
                email="fluff_spain@me.com"
            />
            <Contacts 
                img="Cherry-Blossom-Tree.jpg"
                name="Felix"
                phone="+91 74693 10843"
                email="tree@cherry.com"
            />
            <Contacts 
                img="CoolImage.png"
                name="Pumpkin"
                phone="+91 75315 96143"
                email="coolImg@gmail.com"
            />
        </div>
    )
}

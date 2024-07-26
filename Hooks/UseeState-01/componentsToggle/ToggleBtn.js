import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function ToggleBtn(key) {
    const [color, setColor] = useState("red");
    const colorChangerBox = (newColor) => {
        let card = document.querySelector(".card4")
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        let z = Math.floor(Math.random() * 100);
        console.log(x, y, z)
        let color = `rgb(${x},${y},${z})`;
        setColor(newColor = color)
        card.style.backgroundColor = newColor;

    }
    const colorChangerBody = (newColor2) => {
        let body = document.querySelector("#root")
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        let z = Math.floor(Math.random() * 100);
        console.log(x, y, z)
        setColor(newColor2 = `rgb(${x},${y},${z})`)
        document.body.style.backgroundColor = newColor2;

    }

    return (
        <>

            <div style={{ color: "red", fontSize: "30px", fontWeight: 800 }} >Color Changer (Toggle BTN) Project Using useState Hooks......................</div>
            <div className="card4" >

                <div className="card-body">
                    <h5 className="card-title">Color Changer</h5>
                    <p className="card-text">Color cahnge of card and body</p>
                </div>
                <a href="#" className="btn btn-primary" onClick={colorChangerBox}>Card-Color</a>
                <a href="#" className="btn btn-primary" onClick={colorChangerBody}>Body-Color</a>
            </div>
        </>
    );
}

export default ToggleBtn;

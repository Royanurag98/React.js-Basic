import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Togglebtn2(key) {
   const [color, setColor]=useState("black")
   var card=document.querySelector(".card6")

    const btnBlack=(newColor)=>{
        setColor(newColor="black")
        card.style.backgroundColor = newColor;
    }

    const btnGreen=(newColor)=>{
        setColor(newColor="green")
        card.style.backgroundColor = newColor;
    }

    const btnAqua=(newColor)=>{
        setColor(newColor="aqua")
        card.style.backgroundColor = newColor; 
    }

    const btnYellow=(newColor)=>{
        setColor(newColor="yellow")
        card.style.backgroundColor = newColor;
    }

    const btnOrange=(newColor)=>{
        setColor(newColor="orange")
        card.style.backgroundColor = newColor;
    }

    const btnRed=(newColor)=>{
        setColor(newColor="red")
        card.style.backgroundColor = newColor;
    }

    const btnBlue=(newColor)=>{
        setColor(newColor="blue")
        card.style.backgroundColor = newColor;
    }

    const btnPurple=(newColor)=>{
        setColor(newColor="purple")
        card.style.backgroundColor = newColor;
    }
    
    return (
        <div className="card6 " style={{color:"white", fontSize: "15px", fontWeight: 600, padding:"30px", marginTop:"20px" }}>
            <div className="card-header" style={{ color:"yellow", fontSize: "15px", fontWeight: 800 }}>
                FEATURED TO CHANGE THE COLOR ACCORDIN TO BUTTON
            </div>
            <div className="card-body">
                <h5 className="card-title" s>Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className='cBox'>

                    <span className='btn'style={{ backgroundColor: "black",color:"white", fontSize: "15px", fontWeight: 800 }} onClick={btnBlack}>Black</span>
                    <span className='btn'style={{ backgroundColor: "green",color:"white", fontSize: "15px", fontWeight: 800 }} onClick={btnGreen}>Green</span>
                    <span className='btn'style={{ backgroundColor: "aqua",color:"white", fontSize: "15px", fontWeight: 800 }}  onClick={btnAqua}>Aqua</span>
                    <span className='btn'style={{ backgroundColor: "yellow",color:"white", fontSize: "15px", fontWeight: 800 }} onClick={btnYellow}>Yellow</span>
                    <span className='btn'style={{ backgroundColor: "orange",color:"white", fontSize: "15px", fontWeight: 800 }} onClick={btnOrange}>Orange</span>
                    <span className='btn'style={{ backgroundColor: "red",color:"white", fontSize: "15px", fontWeight: 800 }} onClick={btnRed}>Red</span>
                    <span className='btn'style={{ backgroundColor: "blue",color:"white", fontSize: "15px", fontWeight: 800 }} onClick={btnBlue}>Blue</span>
                    <span className='btn'style={{ backgroundColor: "purple",color:"white", fontSize: "15px", fontWeight: 800 }} onClick={btnPurple}>Purple</span>
                </div>
            </div>
        </div>
    );
}

export default Togglebtn2;

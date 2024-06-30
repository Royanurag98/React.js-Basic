import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function CountCounter2(key) {
    let totalApple=10;
    const [rightApple, setRightApple]=useState(totalApple)
    const [leftApple, setleftApple]=useState(rightApple-totalApple)

    const  R_Fruits=()=>{
        setRightApple(rightApple-1)
        setleftApple(leftApple+1)
    }

    
    const  L_fruits=()=>{
        setRightApple(rightApple+1)
        setleftApple(leftApple-1)
    }



    return (
      
        
                <div className="card1">
                    <div className="card-header">Fruits Count</div>

                    <div className='count'>
                        <span> Count:{rightApple}</span>
                        <span> Count:{leftApple}</span>
                    </div>
                    <div className='fruits'>
                        <p>Fruits</p>    <p>Fruits</p>
                    </div>
                    <div className='img'>
                        <img src="https://i.pinimg.com/736x/57/df/44/57df4467ab058041dbfa8c53c170df67.jpg" onClick={R_Fruits}></img>
                        <img src="https://icon2.cleanpng.com/20210610/vtf/transparent-indicator-icon-art-studio-icon-left-arrow-icon-60c1a8b7aea596.7105680616233043757154.jpg" onClick={L_fruits}></img>
                    </div>
                    <a href="#" className="btn btn-primary ">Go somewhere</a>
                </div>

    );
}

export default CountCounter2;

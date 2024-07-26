import React, { useState } from 'react';
import './style.css';

function USObject() {
    // const obj = {
    //     Name: "Anurag Kumar",
    //     Age: 24,
    //     Roll: "Frontend Developer",
    //     isYoung: true
    // };

    const [info, setInfo] = useState( {Name: "Anurag Kumar", Age: 24, Roll: "Frontend Developer", isYoung: true});

    const showInfo = () => {
// We can update all the object value at once but can no directly update single value of object
        // setInfo({Name: "priti Singh", Age: 23, Roll: "Frontend Developer", isYoung: true})

// We can update single value of ubject this way
        setInfo((prev)=>{
            return {
                ...prev, Name:"Priti"
            }
        })
        // return (
        //     <tr>
        //         <td>{info.Name}</td>
        //         <td>{info.Age}</td>
        //         <td>{info.Roll}</td>
        //         <td>{info.isYoung ? "Yes" : "No"}</td>
        //     </tr>
        // );
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Role</th>
                        <th>isYoung</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                 <td>{info.Name}</td>
                 <td>{info.Age}</td>
                 <td>{info.Roll}</td>
                 <td>{info.isYoung ? "Yes" : "No"}</td>
             </tr>
                </tbody>
            </table>
            <button onClick={showInfo}>Update</button>
        </div>
    );
}

export default USObject;

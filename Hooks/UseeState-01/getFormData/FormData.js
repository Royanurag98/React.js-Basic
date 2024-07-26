import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Form.css'


function FormData() {
    // const [formData, setFormData] = useState([]);


    let arr=[]
    const handleSubmit = (e) => {
      e.preventDefault();
      let form = new FormData(e.target)
      let formObj = Object.fromEntries(form.entries());
      arr.push(formObj)
      console.table(arr)
      
    }

    return (

        <form action="#" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="full-name" id="label1">Full Name:</label>
          <input type="text" id="full-name" name="full-name" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="email" id="label1">Email:</label>
          <input type="email" id="email" name="email" required="" />
        </div>
        <div className="form-group2">
          <label htmlFor="mobile-number" id="label1">Mobile Number:</label>
          <input type="tel" id="mobile-number" name="mobile-number" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="duration" id="label1">Duration:</label>
          <select id="duration" name="duration" required="">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mode-of-payment" id="label1">Mode of Payment:</label>
          <select id="mode-of-payment" name="mode-of-payment" required="">
            <option value="cash">Cash</option>
            <option value="online">Online</option>
          </select>
        </div>
        <p className="head">Personal Training:</p>
        <div className="radio-container">
          <div className="b1">
            <input
              type="radio"
              id="option1"
              name="preference"
              defaultValue="option1"
            />
            <label htmlFor="option1" className="options1" id="label1">
              Required
            </label>
          </div>
          <div className="b2">
            <input
              type="radio"
              id="option2"
              name="preference"
              defaultValue="option2"
            />
            <label htmlFor="option2" className="options1" id="label1">
              Not Required
            </label>
          </div>
        </div>
        <div className="Agrement">
          <input
            type="checkbox"
            id="accept-terms"
            name="accept-terms"
            required="" style={{ display: 'block' }}
          />
          <label htmlFor="accept-terms" className="accept" id="label1" style={{ display: "block" }}>
            I accept all the terms and conditions
          </label>
        </div>
        <button type="submit" className='submit'>Buy Plan</button>
      </form>
 
  )}

 


export default FormData;

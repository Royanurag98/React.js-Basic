import React from 'react'
import {useState} from 'react'

function SigninForm() {

  const [Email, setEmail]=useState("")
  const [Password, setPassword]=useState("")
  const [RepetPassword, setRepetPassword] = useState("");
  const [Checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();

    // Email validation
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(Email)) {
      setError('Invalid email address');
      return;
    }

    // Password match validation
    if (Password !== RepetPassword) {
      setError('Passwords do not match');
      return;
    }

    // Checkbox validation
    if (!Checked) {
      setError('You must agree to the terms and conditions');
      return;
    }
  
    
  }
  console.log(Email,Password);
  

 


  
 
  return (
    <>
       <div style={{ backgroundColor: "gray" }}>
        <div className="formContainer">
          <div className="Heading">
            SIGN IN <p></p>
          </div>
          <form action="">
            <div className="formELe">
              <label htmlFor="email" className="label">Email</label>
              <input className="input"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Name"
                autoComplete=""
                value={Email}
                onChange={(e)=>{
                  setEmail( e.target.value)
                
                }}

               

               
              />
               {error && <p className="text-red-500">{error.Email}</p>}
          
            </div>

            <div className="formELe">
              <label htmlFor="password"  className="label">Password</label>
              <input  className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                value={Password}
                onChange={(e)=>{
                  setPassword( e.target.value)
                }}
               
              />
               {error && <p className="text-red-500">{error.Password}</p>}
            </div>

            <button className="btn" type="submit" onClick={handleSubmit}>Sign in</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SigninForm

import React from 'react'

function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
    
        console.log(data); 
    }
  return (
    <>
         <div style={{ backgroundColor: "gray" }}>
        <div className="formContainer">
          <div className="Heading">
            SIGN IN <p></p>
          </div>
          <form action="" onSubmit={handleSubmit}>
          <div className="formELe">
              <label htmlFor="fname" className="label">First Name</label>
              <input className="input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter your First Name"
                autoComplete=""   
              />
            </div>

            <div className="formELe">
              <label htmlFor="lname" className="label">Last Name</label>
              <input className="input"
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter your Last  Name"
                autoComplete=""   
              />
            </div>

            <div className="email">
              <label htmlFor="lname" className="label">Email</label>
              <input className="input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Last email"
                autoComplete=""   
              />
            </div>
            <div className="formELe">
              <label htmlFor="password"  className="label">Password</label>
              <input  className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password" 
              />
            </div>

            <div className="ConfirmPas">
              <label htmlFor="password"  className="label">Confirm Password</label>
              <input  className="input"
                type="password"
                id="ConfirmPas"
                name="ConfirmPas"
                placeholder="Enter your Password" 
              />
            </div>

            <button className="btn" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm

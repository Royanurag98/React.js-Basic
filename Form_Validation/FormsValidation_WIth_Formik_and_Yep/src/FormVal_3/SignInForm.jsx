import React from "react";
import { useFormik } from "formik";
import { SigninSchama} from "./SignInSchama";

function SignInForm() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, getFieldProps,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(values);
    },
    validationSchema:SigninSchama
  });

  return (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <div className="formContainer">
          <div className="Heading">
            SIGN IN <p></p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="formELe">
              <label htmlFor="email" className="label">Email</label>
              <input className="input"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Name"
                autoComplete="name"
                {...getFieldProps("email")}
              />
              {errors.email&&touched.email?(<p style={{ color: "red" }}>{errors.email}</p>):null}
            </div>

            <div className="formELe">
              <label htmlFor="password"  className="label">Password</label>
              <input  className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                {...getFieldProps("password")}
              />
                  {errors.password&&touched.password?(<p style={{ color: "red" }}>{errors.password}</p>):null}
            </div>

            <button className="btn" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInForm;

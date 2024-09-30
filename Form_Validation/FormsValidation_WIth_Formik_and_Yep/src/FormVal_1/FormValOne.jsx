import React from "react";
import {useFormik} from 'formik'
import { SignupSchama } from "./FormValSchma";



function FormValOne() {


  // handleBlure() track the information of particular field is  visited or not and store the information in object  called tuched.
    const {values, errors,  touched, handleBlur, handleChange, handleSubmit, getFieldProps }=useFormik({
        initialValues:{
          name:'',
          email:'',
          password:"",
          confirmPassword:'' 
        },

    
        onSubmit:(values)=>{
            console.log(values)
        },
         validationSchema:SignupSchama,
         
    })
    
  return (
    <>
    <div className="flex max-h-full w-[450px] bg-gray-200 flex-col justify-center px-3 py-2 rounded-xl">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2  text-center text-xl font-bold tracking-tight text-gray-900 ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action="#" method="POST" onSubmit={handleSubmit}>

          <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Full Name 
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  // value={values.name}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  {...getFieldProps("name")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.name && touched.name?
              (<p className="text-red-900">{errors.name}</p>):null
              }
            </div>


            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  // value={values.email}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  {...getFieldProps("email")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && touched.email?
              (<p className="text-red-900">{errors.email}</p>):null
              }
             
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  // value={values.password}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  {...getFieldProps("password")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            
              {errors.password && touched.password ?
              (<p className="text-red-900">{errors.password}</p>):null
              }
            
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  // value={values.confirmPassword}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // we can do  same thing with getFildProps() . it is use to set all the value or method at once.
                  {...getFieldProps("confirmPassword")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.confirmPassword && touched.confirmPassword?
              (<p className="text-red-900">{errors.confirmPassword}</p>):null
              }
            </div>


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default FormValOne;

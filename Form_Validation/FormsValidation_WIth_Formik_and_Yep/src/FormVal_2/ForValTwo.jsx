import React from "react";
import {useFormik} from 'formik'
import { validationSchema } from "../FormVal_2/FormValSchama";


const initialValues={
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
    gender:'',
    interests:[],
    dob:'',
    Age:''

}

function FormvalidationTwo() {

    const { values, errors,touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema:validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });
  

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        const { interests } = values;

        if (checked) {
            // Add interest if checked
            setFieldValue("interests", [...interests, value]);
        } else {
            // Remove interest if unchecked
            setFieldValue(
                "interests",
                interests.filter((interest) => interest !== value)
            );
        }
    };

  return (
    <>
      <form  onSubmit={handleSubmit} className="w-[600px] border p-5 bg-gray-300 rounded-md shadow-2xl mx-auto">
        <div className="mb-5">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First Name:
          </label>
          <input
            id="firstName"
            name="firstName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your first name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            <p className="text-red-900">{errors.firstName}</p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last Name:
          </label>
          <input
            id="lastName"
            name="lastName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your last name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur} />
             <p className="text-red-900">{errors.lastName}</p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone Number:
          </label>
          <input
             id="phoneNumber"
            name="phoneNumber"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your phone number"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}/>
             <p className="text-red-900">{errors.phoneNumber}</p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
            Email:
          </label>
          <input
             id="email"
            name="email"
            type="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}/>
             <p className="text-red-900">{errors.email}</p>
        </div>

      

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           <p className="text-red-900">{errors.password}</p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Confirm Password:
          </label>
          <input
           id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your confirm password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           <p className="text-red-900">{errors.confirmPassword}</p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
            Gender:
          </label>
          <select
            as="select"
            name="gender"
            placeholder='Select Gender'
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
           
           <option value="" disabled hidden>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p className="text-red-900">{errors.gender}</p>
        </div>

        <div className="mb-5">
                    <label
                        htmlFor="interests"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Interests:
                    </label>
                    <div className="space-x-7">
                        <label>
                            <input
                                id="interests-coding"
                                type="checkbox"
                                name="interests"
                                value="Coding"
                                className="mr-1"
                                checked={values.interests.includes("Coding")}
                                onChange={handleCheckboxChange}
                            /> Coding
                        </label>
                        <label>
                            <input
                                id="interests-sport"
                                type="checkbox"
                                name="interests"
                                value="Sport"
                                className="mr-1"
                                checked={values.interests.includes("Sport")}
                                onChange={handleCheckboxChange}
                            /> Sport
                        </label>
                        <label >
                            <input
                                id="interests-reading"
                                type="checkbox"
                                name="interests"
                                value="Reading"
                                className="mr-1"
                                checked={values.interests.includes("Reading")}
                                onChange={handleCheckboxChange}
                            /> Reading
                        </label>
                    </div>
                    <p className="text-red-900">{errors.interests}</p>
                </div>

        <div className="mb-5">
          <label
            htmlFor="Age"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Age:
          </label>
          <input
           id="Age"
            name="Age"
            type="number"
            placeholder="Enter your Age"
            value={values.Age}
                onChange={handleChange}
                onBlur={handleBlur}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
           <p className="text-red-900">{errors.Age}</p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="dob"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date of Birth:
          </label>
          <input
          id="dob"
            name="dob"
            type="date"
            value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
           <p className="text-red-900">{errors.dob}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold p-2 rounded-md" >
          Submit
        </button>
      </form>
    </>
  );
}

export default FormvalidationTwo;

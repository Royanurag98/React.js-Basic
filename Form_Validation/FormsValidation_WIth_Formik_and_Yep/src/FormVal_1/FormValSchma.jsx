
import * as Yup from 'yup'

export const SignupSchama=Yup.object({
    name:Yup.string().min(3).max(20).required(' Name is required'),

    email:Yup.string().email().required(' Email is required'),
    
    password:Yup.string().min(6)
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special character" )
    .required("Password is required"),

    confirmPassword:Yup.string().oneOf([Yup.ref("password"), null], " Confrm Password dose not match").required(' Password is required'),
})

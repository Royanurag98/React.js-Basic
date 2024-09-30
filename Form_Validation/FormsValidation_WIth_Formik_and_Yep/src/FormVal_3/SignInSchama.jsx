import * as Yup from 'yup'
export const SigninSchama=Yup.object({
    email:Yup.string().email()
    .required("Email is required"),

    password:Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special character" )
    .required("Password is required")
})
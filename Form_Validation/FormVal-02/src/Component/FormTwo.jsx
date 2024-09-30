import React,{useState} from 'react'


const HomePage = () => {
  return <h1>Welcome to my home page</h1>;
};


function FormTwo() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RepetPassword, setRepetPassword] = useState("");
  const [Checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [IsLogedIn, setIsLogedIn]=useState(false)
  // const [Store, setStore]=useState(Email,Password)  
    // console.log(Store)

    const CheckPass = (e) => {
        e.preventDefault();
        sessionStorage.setItem('Email', Email);
        if (sessionStorage.getItem('Email') === Email) {
          console.log('User is Logged in');
          setIsLogedIn(true);  // Update the state to reflect that the user is logged in
        }
    }  
// setTimeout(()=>{
//   console.log(Email)
//   console.log(Password)
// },5000)
   
  
   
  
 
  return (
    <div>
      {!IsLogedIn ? (
      <div className="bg-gray-600 h-[100vh] flex justify-center items-center">
        <form className="w-[400px]  border p-5 bg-gray-300 rounded-md shadow-2xl">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
                  }}/>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div> 
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={CheckPass}>
            Register new account
          </button>
        </form>
      </div>
      ):(  <HomePage /> )}
    </div>
  )
}

export default FormTwo

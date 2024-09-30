import React, { useState } from "react";
import Welcome from "./Welcome";
import "./App.css";
import HomePage from "./HomePage";

function App() {
  const [Data, setData] = useState("");
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <>
      {/* //////////////////////////// */}
      <h1>{Data || "hellow"}</h1>


      {/* /////////////////////////////////// */}
      <div className="flex space-x-3">
        <div className="bg-black w-[400px] p-5">
          {Data || (
            <>
              <h1 className="text-white font-bold text-[20px]">
                User is Logine
              </h1>
              <h1 className="text-white font-bold text-[20px]">
                Welcome to home Page
              </h1>
            </>
          )}
        </div>

        <div className="bg-black w-[400px] p-5"> 
          {Data && (
            <>
              <h1 className="text-white font-bold text-[20px]">
                User is Logine
              </h1>
              <h1 className="text-white font-bold text-[20px]">
                Welcome to home Page
              </h1>
            </>
          )}
             <h1 className="text-white font-bold text-[20px]">
                User is not logine
              </h1>
        </div>
      </div>


      {/* /////////////////////////////////// */}
      {/* If a user is logged in, we want to greet them by rendering <Welcome />. 
      If the user isn't logged in, we don't want to show anything. */}
           
    <div>
      {showWelcome &&
      <>
       <Welcome />
       <HomePage/>
      </>
       }
    </div>
    </>
  );
}

export default App;

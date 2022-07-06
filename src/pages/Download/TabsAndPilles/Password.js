import React, { useRef, useState } from "react";
import MyAccountTable from "./MyAccountTable";

const Password = (props) => {
  const tabsRef = useRef();
  const [password, setpassword] = useState("");
  const [fillpass, setfillpass] = useState(false);

  const handleSeeCompleteList = () => {
        const tabs = tabsRef.current;
    if (tabs) {
      tabs.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const CheckPassword = () => {
    if(validate(password)){
       setfillpass(validate(password));
    }else{
   props.setcurrentTab(true); 
   localStorage.setItem("pass",password)}
  }

  const validate = (values) => {
    let errors 
    if (!values) {
      errors = "Cannot be blank";
    } else if (values.length < 8) {
      errors = "Password must be more than 8 characters";
    }
    return errors;
  };
   

  return (
    <>
      <div className="border back-forword-btn w-[40%] mx-auto rounded-2xl px-6 py-6 ">
        <div className="font-medium text-lg text-center  py-4 text-[#0A2A4A]">
          To access your Account enter password & Proceed
        </div>
        <div className="relative z-0 w-full mb-2 group">
          <input
            type="password"
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={(e)=>{
            console.log("🚀 ~ file: Password.js ~ line 32 ~ Password ~ e", e)
                setpassword(e.target.value)
            }}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-md font-medium text-[#0A2A4A] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password:
          </label>
        </div>
        {fillpass&&<div className="text-red-500">
        {fillpass}
        </div>}
        <div
          className=" font-medium underline text-[#3491FF] text-md text-end ml-12 my-4"
          onClick={()=>{props.setcurrentTab("changepassword")}}

        >
          Change Password
        </div>
        <div className=" text-center  my-4">
          <button
            onClick={()=>{;CheckPassword()}}

            type="submit"
            className="text-white text-lg  bg-[#3491FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {" "}
            Proceed
          </button>
        </div>
      </div>
      <div ref={tabsRef} className=" text-center px-5 py-5 align-center">
        <h2 className=" text-md  font-semibold  pt-8 text-[#3D3D3D]">
        If you {" "}
          <strong className="underline text-[#3491FF] text-md font-medium">
          do not remember the password,
          </strong>{" "}
          An Email will be sent to you on your registered email id shortly.
        </h2>
      </div>
    </>
  );
};

export default Password;

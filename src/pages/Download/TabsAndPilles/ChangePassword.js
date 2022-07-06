import React, { useState } from "react";

const ChangePassword = (props) => {

   const [fillpass, setfillpass] = useState();
   const [pass,setPass]= useState({
    first:"",
    second:""
   })



   onchange=(e)=>{
    let Obj ={...pass};
    Obj[e.target.name]= e.target.value;
    setPass({...Obj})
   }

const CheckPassword = () => {
  if(validate(pass)){
   setfillpass(validate(pass));
  }else{
    setfillpass('');
  }
}
const validate = (values) => {
console.log("🚀 ~ file: ChangePassword.js ~ line 36 ~ validate ~ values", values)
  let errors 
  if (!values.first || !values.second) {
    errors = "Cannot be blank";
  } else if (values.first.length < 8||values.second.length<8) {
    errors = "Password must be more than 8 characters";
  }else if(values.first!==values.second){
    errors = "Password must be same";
  }
    return errors;
};


  return (
    <>
      <div
        id="Change Password"
        className="border back-forword-btn w-[40%] mx-auto rounded-2xl px-10 py-10 mb-6 "
      >
        <div className="flex justify-start cursor-pointer	"onClick={()=>{
        if(props.flag){
          props.setcurrentTab(props.flag)
        }else{
        props.setcurrentTab("change");}
      }}>
        <div className="text-base flex text-[#2563eb]"><svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb" xmlns="http://www.w3.org/2000/svg">
<path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2563eb" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4999 12H3.66992" stroke="#2563eb" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Back</div>
      </div>
        <div className="font-medium text-lg text-left  py-4 text-[#0A2A4A]">
          Change Password
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="first"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="first"
            className="peer-focus:font-medium absolute text-md font-medium text-[#0A2A4A] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password:
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="second"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={onchange}

          />
          <label
            htmlFor="second"
            className="peer-focus:font-medium absolute text-md font-medium text-[#0A2A4A] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            New Password:
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={onchange}

          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-md font-medium text-[#0A2A4A] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password Hint:
          </label>
        </div>
        {fillpass && <div className="text-red-500 mx-2" >{fillpass}</div>}
        <div className=" text-center  my-4">
          <button
            onClick={CheckPassword}
            type="submit"
            className="text-white text-lg  bg-[#3491FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {" "}
            Change
          </button>
        </div>
      </div> 
      <div className="flex justify-end mb-6 mr-12" onClick={()=>{
        if(props.flag){
          props.setcurrentTab(props.flag)
        }else{
        props.setcurrentTab("change");}
      }}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="50" rx="8" fill="#3491FF" />
          <path
            d="M22.57 18.9297L16.5 24.9997L22.57 31.0697"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.4999 25H16.6699"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default ChangePassword;

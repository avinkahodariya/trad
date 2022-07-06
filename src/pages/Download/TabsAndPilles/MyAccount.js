import React, { useState, useRef, useEffect } from 'react'
import AccountDescription from './AccountDescription'
import ChangePassword from './ChangePassword'
import MyAccountCard from './MyAccountCard'
import MyAccountTable from './MyAccountTable'
import Password from './Password'

const MyAccount = () => {

    // const [currentTab, setcurrentTab] = useState(false)
    const [invoice, setinvoice] = useState(false)

    useEffect(()=>{
        // {currentTab && <MyAccountTable />}
    })

    const tabs = [
        {name:"Change Password",componnent:<ChangePassword />},
        {name:"Billing Table",componnent:<MyAccountTable />},
        {name:"Account Details",componnent:<MyAccountCard />},
        {name:"Invoice",componnent:<AccountDescription />}  , 
    ]
    return (
        <>        
           
        {/* <MyAccountTable setinvoice={setinvoice}/>
        <MyAccountCard/>
        <AccountDescription setinvoice={setinvoice}/> */}
        {invoice?<AccountDescription setinvoice={setinvoice}/>:<><MyAccountTable setinvoice={setinvoice}/><MyAccountCard/></>}
            
            {/* {currentTab=="changepassword" ? <ChangePassword setcurrentTab={setcurrentTab}/> : currentTab ? <><MyAccountTable /><MyAccountCard /><AccountDescription /></>:<></>} */}
            {/* {currentTab=="changepassword" ? <ChangePassword setcurrentTab={setcurrentTab}/> : currentTab ? <><MyAccountTable /><MyAccountCard /></>:<Password setcurrentTab={setcurrentTab}/>} */}
           
             {/* <ChangePassword /> */}
            {/* <MyAccountTable />
            <MyAccountCard />   
            <AccountDescription />  */}
            </>
        
  )
}

 export default MyAccount

// const tabsRef = useRef()
    // const handleSeeCompleteList = () => {
    //     const tabs = tabsRef.current
    //     if (tabs) {
    //       tabs.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start',
    //       })
    //     }
    //   }

    // const [isCPForm, setIsCPForm] = useState(false);
    // const [Change, setChange] = useState(false);
    // const ProceedHandler = () => {
    //     setChange(false);
    // };
    // const ChangeHandler = () => {
    //     setChange(true);
    // };

    // const _Proceed = () => {
    //     const section = document.querySelector( '#Proceed' );
    //     section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    //   }; */}

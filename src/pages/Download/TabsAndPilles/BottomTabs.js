import React,{useState}from 'react'
import CommexTable from './CommexTable'
import CrossTable from './CrossTable'
import EstroTable from './EstroTable'
import MyProfileForm from './MyProfileForm'
import ProductTable from './ProductTable'

const BottomTabs = () => {
    const [TabsButton, setTabsButton] = useState("Trade Plus")

    const tabs = [
        {name:"Trade Plus",components:<MyProfileForm />},
        {name:"Commex",components:<MyProfileForm />},
        {name:"Cross",components:<MyProfileForm />},
        {name:"Estro",components:<MyProfileForm />},
    ]
  return (
    <div>
    <div className='w-full'>
    <ul className=' border rounded-lg w-full flex mb-6'>  
       {tabs.map((data)=>{
        return (<div class="mr-2 w-1/4">
                    <div 
                    className={`inline-block py-3 px-4 rounded-lg m-1.5 w-full text-center text-lg cursor-pointer ${TabsButton==data.name ? 'active bg-[#3491FF] text-white':'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'}`}  aria-current="page" onClick={()=>{setTabsButton(data.name)}} >{data.name}</div>
                </div>)
       })}  
    </ul>
  </div>
  <div>
  <div>
  {/* {TabsButton=="Trade Plus"?<ProductTable />:TabsButton=="Commex"?<CommexTable />:TabsButton=="Cross"?<CrossTable />:TabsButton=="Estro"?<EstroTable/> :<></>}   */}
</div>
  </div>
</div>
  )
}

export default BottomTabs
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import ChangePassword from './ChangePassword'
import CommexDownload from './CommexDownload'
import CrossnetDownload from './CrossnetDownload'
import EsignDownload from './EsignDownload'
import EstroNetDownload from './EstroNetDownload'
import LicenceKey from './LicenceKey'
import MyAccount from './MyAccount'
import MyAccountCard from './MyAccountCard'
import MyAccountTable from './MyAccountTable'
import MyProfileForm from './MyProfileForm'
import MyQuery from './MyQuery'
import Password from './Password'
import PmsDownload from './PmsDownload'
import SliderCard from './SliderCard'
import TradePluseDownload from './TradePluseDownload'

const TabsAndPilles = () => {
  const [TabsButton, setTabsButton] = useState("Downloads");
  const [CardCompo, setCardCompo] = useState("");
  const [currentTab, setcurrentTab] = useState("change")

  const params = useParams();

  const Components = [
    { name: "Trade Plus X", components: <TradePluseDownload index="0"/> },
    { name: "Estro & EstroNet", components: <EstroNetDownload index="1"/> },
    { name: "Cross & Crossnet", components: <CrossnetDownload index="0"/> },
    { name: "Commex", components: <CommexDownload index="1"/> },
    { name: "e-sign", components: <EsignDownload index="0"/> },
    { name: "PMS", components: <PmsDownload index="1"/> },
  ];

  const tabs = [
    { name: "Downloads", components: <></> },
    { name: "My Profile", components: <MyProfileForm setcurrentTab={setcurrentTab} /> },
    { name: "My Account", components: <MyAccount /> },
    { name: "My Queries", components: <MyQuery /> },
    { name: "Licence Key", components: <LicenceKey /> },
  ];
  useEffect(() => {
    setCardCompo(params.id);
  }, [params.id]);

  useEffect(()=>{
   let pass = localStorage.getItem("pass")
   console.log("🚀 ~ file: Index.js ~ line 45 ~ useEffect ~ pass", pass)
   pass ? setcurrentTab(true) : setcurrentTab("change")
  },[TabsButton])
  return (
    <div>
      <div>
        <ul class="flex flex-wrap text-lg font-normal text-center text-[#9E9E9E]  m-8 justify-center">
          {tabs.map((data) => {
            return (
              <li class="mr-2">
                <div
                  className={`inline-block py-3 px-4 rounded-lg cursor-pointer  ${TabsButton == data.name
                      ? "active bg-[#3491FF] text-white"
                      : "hover:text-gray-900 hover:bg-gray-100  "
                    }`}
                  aria-current="page"
                  onClick={() => {
                    setTabsButton(data.name);
                  }}
                >
                  {data.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {TabsButton=="Downloads" && Components.map((data) => {
            return <div>{data.components}</div>;
        })}
      </div>
{          console.log("🚀 ~ file: Index.js ~swordsetcurrentTab={setcurrentTab}/>:currentTab?<>{tabs.map ~ currentTab", currentTab)
}
      {currentTab=="changepassword" ? <ChangePassword setcurrentTab={setcurrentTab}/> : 
      currentTab=="changepasswordprofile" ? <ChangePassword flag={"My Profile"} setcurrentTab={setcurrentTab}/>:
      
      currentTab=="change" && TabsButton!=="Downloads" ?<Password setcurrentTab={setcurrentTab}/>:<> {tabs.map((data) => {
          if (data.name === TabsButton) {
            return <div className="">{data.components}</div>;
          }
        })}</>}
</div>
  );
};

export default TabsAndPilles;

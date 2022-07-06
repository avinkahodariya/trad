import React from 'react';
import Header from '../components/common/Header/';
import Footer from "../components/common/Footer/index";
const Layout = (props) => {
    return ( < >

            <Header/>
                <div className="" >
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}
export default Layout;
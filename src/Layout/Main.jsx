import {Outlet} from 'react-router-dom'

import Navbar from './../SharedPages/Navbar/Navbar';
import{Toaster} from 'react-hot-toast'
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Toaster/>
        </div>
    );
};

export default Main;
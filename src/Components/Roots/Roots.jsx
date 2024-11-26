import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Roots = () => {
    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;
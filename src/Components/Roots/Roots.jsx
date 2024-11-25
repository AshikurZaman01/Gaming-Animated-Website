import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Roots = () => {
    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;
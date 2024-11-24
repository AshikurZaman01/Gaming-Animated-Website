import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden">
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;
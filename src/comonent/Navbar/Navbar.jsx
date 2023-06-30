import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80 mx-8">
                        <li className="mx-auto text-xl font-bold"><a>Marketplace</a></li>
                        <li className="mx-auto text-xl font-bold"><a>Resource</a></li>
                        <li className="mx-auto text-xl font-bold"><a>About</a></li>

                        <div className="">
                        <a className="btn btn-primary m-1 w-full rounded-full normal-case text-base-100">Upload</a>
                        <a className="btn w-full m-1 btn-outline rounded-full hover:bg-primary hover:text-base-100 text-primary normal-case">Connect Wallet</a>
                    </div>
                    </ul>
                    </div>
                    <div className="text-center hidden lg:flex">
                        <a className="btn btn-ghost normal-case font-bold text-primary ml-14 text-3xl">NFters</a>
                        </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal mt-5 px-1">
                    <li><Link className="font-bold">Marketplace</Link></li>
                    <li><Link className="font-bold">Resource</Link></li>
                    <li><Link className="font-bold">About</Link></li>
                    <li className=""><input type="text" placeholder="Sarch" className="input input-bordered w-full max-w-xs rounded-full" /></li>
                    </ul>
                </div>
                <div className="navbar-center mr-32 mt-5 ">
                    <div className="navbar-center hidden lg:flex">
                        <a className="btn btn-primary mx-2 rounded-full normal-case">Upload</a>
                        <a className="btn mx-2 btn-outline rounded-full hover:bg-primary text-primary normal-case">Connect Wallet</a>
                    </div>
                         
                </div>

                <div className="nabvar-end">
                <a className=" btn btn-ghost text-primary normal-case text-xl font-bold lg:hidden">NFters</a>
                </div>
                </div>

        </div>
    );
};

export default Navbar;
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import UseDiscover from "../hock/UseDiscover";
import { BsFilter } from "react-icons/bs";
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"
import Icon3 from "../../assets/icon3.png"
import Icon4 from "../../assets/icon4.png"
// import Card from "../hock/Card";



const Discover = () => {
    const[card, setCard]=UseDiscover();

    return (
        <div className="">
            <h1 className=" text-4xl mt-8 font-bold mx-24">Discover more NFTs</h1>
            <div className="mx-24 my-8">
            <ul className=" menu bg-base-200 lg:menu-horizontal rounded-box ">
                <li>
                    <Link className="bg-primary text-white hover:border-primary-focus">All Categories</Link>
                </li>
                <li>
                    <Link>Art</Link>
                </li>
                <li>
                    <Link>Celebrities</Link>
                </li>
                <li>
                    <Link>Gaming</Link>
                </li>
                <li>
                    <Link>Sport</Link>
                </li>
                <li>
                    <Link>Music</Link>
                </li>
                <li>
                    <Link>Crypto</Link>
                </li>
                <li>
                    <Link><BsFilter className="w-8 h-auto lg:ml-80"/>All Filters</Link>
                </li>
                </ul>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-2 mx-20">
                {
                   card.map(data=><div key={data.id}>

                <div className=" card lg:w-66 bg-base-100 shadow-2xl ">
                    <div className="reletive">
                    <figure><img src={data.photo} alt="Shoes" className=" w-full h-auto" /></figure>

                    <div className="avatar-group -space-x-6 absolute">
                    <div className="avatar">
                        <div className="w-12">
                        <img src={Icon1} />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src={Icon2} />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src={Icon3} />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src={Icon4} />
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                        {data.name}
                        
                        </h2>
                        <div className="card-actions justify-center w-100">
                        <div className="">
                            <span className="mx-3 text-blue-500">0.25 ETH</span>
                            <span className="mx-3">1 of 321</span>
                        </div> 
                        
                        <div className="">
                            <span className="badge ">3h 50m 2s left</span>
                            <span className=" mx-2">Place a bid</span>
                        </div> 
                        
                        </div>
                    </div>
                    </div>

                   </div>)
                    
                }
    </div>
    <div className="text-center m-8">
    <button className=" btn btn-outline rounded-full hover:bg-primary text-primary normal-case">More NFts</button>
    </div>
        </div>
    );
};

export default Discover;
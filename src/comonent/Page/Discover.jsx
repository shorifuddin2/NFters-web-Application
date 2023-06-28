// import { useEffect } from "react";
import UseDiscover from "../hock/UseDiscover";
// import Card from "../hock/Card";



const Discover = () => {
    const[card, setCard]=UseDiscover();

    return (
        <div>
            <h1 className="text-2xl font-bold">Discover more NFTs</h1>
            
            <div className="grid lg:grid-cols-4 gap-2 mx-20">
                {
                   card.map(data=><div key={data.id}>

                <div className=" card lg:w-60 bg-base-100 shadow-2xl">
                    <figure><img src={data.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {data.name}
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div> 
                        <div className="badge badge-outline">Products</div>
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
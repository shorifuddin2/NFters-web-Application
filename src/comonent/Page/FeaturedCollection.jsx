
import Pic1 from"../../assets/pic1.png"
const FeaturedCollection = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-2 lg:mx-20 ">
                <div>
                <div className="grid grid-cols-2 bg-base-100 mx-8 w-full h-auto ">
                    <figure>
                        <img src={Pic1} alt="Album"/>
                        <h1>Hello</h1>
                        </figure>
                    <div className="">
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <button className="btn btn-outline">Listen</button>
                        
                    </div>
                    </div>
                </div>

                <div>
                <div className="grid grid-cols-2 bg-base-100 mx-8 w-full h-auto">
                    <figure>
                        <img src={Pic1} alt="Album"/>
                        <h1>Hello</h1>
                        </figure>
                    <div className="">
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <button className="btn btn-outline">Listen</button>
                        
                    </div>
                    </div>
                </div>

                <div>
                <div className="grid grid-cols-2 bg-base-100 mx-8 w-full h-auto">
                    <figure>
                        <img src={Pic1} alt="Album"/>
                        <h1>Hello</h1>
                        </figure>
                    <div className="">
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <img className="w-14 h-auto m-1" src={Pic1} alt="" />
                        <button className="btn btn-outline">Listen</button>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCollection;
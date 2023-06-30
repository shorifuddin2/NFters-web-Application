
import banner1 from"../../assets/banner1.png"
import banner4 from"../../assets/banner4.png"
import Pic1 from"../../assets/pic1.png"
import Picture1 from"../../assets/picture1.png"
import Picture2 from"../../assets/picture2.png"
import Picture3 from"../../assets/picture3.png"
import Picture4 from"../../assets/picture4.png"
import Picture5 from"../../assets/picture5.png"
import Picture6 from"../../assets/picture6.png"
const FeaturedCollection = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-2 lg:mx-20 my-8 ">
                <div>
                <div className="grid grid-cols-2 bg-base-100 mx-8 w-full h-auto ">
                    <figure>
                        <img src={Pic1} alt="Album"/>
                        
                        </figure>
                    <div className="">
                        <img className="w-20 h-auto m-1" src={Picture1} alt="" />
                        <img className="w-20 h-auto m-1" src={Picture2} alt="" />
                        <img className="w-20 h-auto m-1" src={Picture3} alt="" />
                        
                     </div>
                     <div className="flex ">
                        <h1>Hello</h1>
                        <button  className="badge badge-outline  border mx-3 normal-case rounded-full">Total 54 Items</button>
                        </div>
                    </div>
                </div>

                <div>
                <div className="grid grid-cols-2 bg-base-100 mx-8 w-full h-auto">
                    <figure>
                        <img className="" src={banner1} alt="Album"/>
                        
                        </figure>
                    <div className="">
                        <img className="w-20 h-auto m-1" src={Picture2} alt="" />
                        <img className="w-20 h-auto m-1" src={Picture4} alt="" />
                        <img className="w-20 h-auto m-1" src={Picture1} alt="" />
                        
                    </div>
                    <div className="flex ">
                        <h1>Hello</h1>
                        <button  className="badge badge-outline  border mx-3 normal-case rounded-full">Total 54 Items</button>
                        </div>

                    </div>
                </div>

                <div>
                <div className="grid grid-cols-2 bg-base-100 mx-8 w-full h-auto">
                    <figure>
                        <img src={banner4} alt="Album"/>
                       
                        </figure>
                    <div className="">
                        <img className="w-20 h-auto m-1" src={Picture6} alt="" />
                        <img className="w-20 h-auto m-1" src={Picture5} alt="" />
                        <img className="w-20 h-auto m-1" src={Picture1} alt="" />
                        
                    </div>
                        <div className="flex ">
                        <h1>Hello</h1>
                        <button  className="badge badge-outline  border mx-3 normal-case rounded-full">Total 54 Items</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCollection;
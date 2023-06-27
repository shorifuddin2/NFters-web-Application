
import Banner1 from"../../assets/banner1.png"
import Banner2 from"../../assets/banner2.png"
import Banner3 from"../../assets/banner3.png"
import Icon from"../../assets/Icon.png"
const Banner = () => {
    return (
        <div>
            <div className="grid mx-10  lg:mx-20 lg:grid-cols-2 gap-2">
                <div>
                    <h1 className="text-5xl lg:mt-10 font-bold">Discover, and collect Digital Art  NFTs </h1>
                    <p className="text-xl py-5">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    <button className="btn btn-primary">Explore Now</button>

                    <div>
                        <span className="text-3xl font-bold">98K+</span>
                        <span className="text-3xl font-bold">12K+</span>
                        <span className="text-3xl font-bold">15K+</span>
                    </div>
                </div>
                
                <div className="relative ml-8">
                    <img className="sm:w-100 w-24 h-24 z-20 rounded-50 absolute -left-5 top-48 lg:top-5npo0" src={Icon} alt="" />
                    <div className="stack  ">
                        <img src={Banner1} alt="Image 1" className="rounded" />
                        <img src={Banner2} alt="Image 2" className="rounded" />
                        <img src={Banner3} alt="Image 3" className="rounded" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
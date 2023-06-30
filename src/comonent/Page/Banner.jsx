
import Banner1 from"../../assets/banner1.png"
import Banner2 from"../../assets/banner2.png"
import Banner3 from"../../assets/banner3.png"
import Icon from"../../assets/Icon.png"
const Banner = () => {
    return (
        <div>
            <div className="grid mx-10  lg:mx-20 lg:grid-cols-2 gap-2 flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl lg:mt-10 font-bold">Discover, and collect Digital Art  NFTs </h1>
                    <p className="text-xl py-5 w-96">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    <button className="btn btn-primary rounded-full">Explore Now</button>

                    <div className="flex">
                        <div className="">
                        <span className="text-3xl font-bold">98K+</span>
                            <h1>Artwork</h1>
                        </div>
                        <div className="mx-3">
                        <span className="text-3xl font-bold">12K+</span>
                            <h1>Auction</h1>
                        </div>
                        <div className="">
                        <span className="text-3xl font-bold">15K+</span>
                        <h1>Artist</h1>
                        </div>
                    </div>
                </div>
                
                <div className="relative  w-full lg:ml-24">
                    <img className="sm:w-100 lg:w-24 h-auto z-20 rounded-50 absolute -left-8 top-32 lg:top-60" src={Icon} alt="" />

                    <div className="flex glass px-4 w-72 rounded absolute z-20 top-80 left-8">
                            <div className="mx-5">
                                <h1>Current Bid</h1>
                                <span>0.25 ETH</span>
                            </div>
                            <div className="mx-5">
                                <h1>Ends in</h1>
                                <span>12h  43m  42s</span>
                            </div>
                        </div>
                    <div className="stack ">
                    
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
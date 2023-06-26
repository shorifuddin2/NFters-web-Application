
import Banner1 from"../../assets/banner1.png"
import Banner2 from"../../assets/banner2.png"
import Banner3 from"../../assets/banner3.png"
import Icon from"../../assets/Icon.png"
const Home = () => {
    return (
        <div>
            <div className="grid mx-10 lg:mx-24 lg:grid-cols-2 gap-2">
                <div>
                    <h1 className="text-3xl">Discover, and collect Digital Art  NFTs </h1>
                    <p>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    <button className="btn btn-primary">Explore Now</button>

                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div className="relative">
                    <img className="sm:w-100 w-24 h-24 z-20 rounded-50 absolute -left-5 top-48 lg:top-50" src={Icon} alt="" />
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

export default Home;
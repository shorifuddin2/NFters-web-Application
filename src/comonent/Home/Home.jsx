import Banner from "../Page/Banner";
import AmazingPart from "../Page/Amazing";
import OverCollection from "../Page/OverCollection";
import FeaturedCollection from "../Page/FeaturedCollection";
import CreateSell from "../Page/CreateSell";
import Discover from "../Page/Discover";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AmazingPart></AmazingPart>
            <OverCollection></OverCollection>
            <FeaturedCollection></FeaturedCollection>
            <CreateSell></CreateSell>
            <Discover></Discover>
        </div>
    );
};

export default Home;
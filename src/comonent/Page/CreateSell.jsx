import Pic2 from "../../assets/pic2.png"
import Pic1 from "../../assets/pic1.png"

const CreateSell = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 mx-8">
                <div className="grid lg:grid-cols-2">
                    <div className=" p-5">
                    <img className="w-[250px] h-auto p-5" src={Pic2} alt="" />
                    <img className="w-[150px] h-auto p-5 ml-10" src={Pic2} alt="" />
                    </div>
                    <div>
                    <img className="w-[150px] h-auto my-20" src={Pic1} alt="" />
                    </div>
                </div>
                <div className="mr-8 pr-8">
                    <h1 className="text-1xl font-bold">Create and sell your NFTs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                    <button className="btn btn-primary rounded-full">Sign Up Now</button>
                </div>
            </div>
        </div>
    );
};

export default CreateSell;
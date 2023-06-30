import Pic2 from "../../assets/pic2.png"
import Pic1 from "../../assets/pic1.png"
import banner3 from "../../assets/banner3.png"

const CreateSell = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 mx-8 lg:my-10">
                <div className="grid grid-cols-2">
                    <div className=" p-5">
                    <img className="lg:w-[250px] w-[200px] h-auto lg:p-5 p-2" src={Pic2} alt="" />
                    <img className="lg:w-[150px] w-[120px] h-auto lg:p-5 p-2 ml-8 lg:ml-24" src={banner3} alt="" />
                    </div>
                    <div>
                    <img className="lg:w-[150px] w-[120px] h-auto mt-32" src={Pic1} alt="" />
                    </div>
                </div>
                <div className="mr-8 pr-8">
                    <h1 className="text-3xl font-bold">Create and sell your NFTs</h1>
                    <p className="w-80 my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                    <button className="btn btn-primary rounded-full">Sign Up Now</button>
                </div>
            </div>
        </div>
    );
};

export default CreateSell;
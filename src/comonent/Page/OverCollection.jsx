import Pic1 from "../../assets/pic1.png"

const OverCollection = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-3 mx-20">
                <div>
                <div className="card w-80 bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src={Pic1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="grid grid-cols-2 card-body items-center text-center">
                       
                     <span>1</span>
                     <span><2/span>
                    </div>
                </div>
                </div>
                <div>2

                </div>
                <div>3

                </div>
            </div>
        </div>
    );
};

export default OverCollection;
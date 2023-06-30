import Pic1 from "../../assets/pic1.png"
import Pic2 from "../../assets/pic2.png"
import Pic3 from "../../assets/pic3.png"
import Pic4 from "../../assets/pic4.png"
import IconMan from "../../assets/iconMan.png"
import Frame from "../../assets/Frame 6.png"


const OverCollection = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-2 lg:mx-24">
                <div>
                <div className="card lg:w-80 bg-base-100 ">
                    <figure className="mx-8 my-2">
                        <img src={Pic1} alt="photo" className="rounded-xl" />
                    </figure>
                    <div className="grid grid-cols-2 card-body items-center text-center">
                       
                     <span>
                        <h1>The Futr Abstr</h1>
                        <p>10 in the stock</p>
                     </span>
                     <span>
                        <p>Highest Bid</p>
                        <p>0.25 ETH</p>
                     </span>
                    </div>
                </div>
                </div>

                <div className="w-52 h-auto">

                <div className="grid grid-cols-2 bg-base-100  w-80 h-32 mx-auto ">
                    <figure>
                        <img className="w-[100px] h-auto" src={Pic2} alt="Album"/>   
                    </figure>
                    <div className="">
                        <h2 className="">The Futr Abstr</h2>
                        <div className="flex">
                          <img className="m-2" src={IconMan} alt="" />
                          <img className="m-2" src={Frame} alt="" />
                        </div>
                        <button className="btn btn-primary rounded-full">Place a bid</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 bg-base-100  w-80 h-32 mx-auto">
                    <figure>
                        <img className="w-[100px] h-auto" src={Pic3} alt="Album"/>   
                    </figure>
                    <div className="">
                        <h2 className="">The Futr Abstr</h2>
                        <div className="flex">
                          <img className="m-2" src={IconMan} alt="" />
                          <img className="m-2" src={Frame} alt="" />
                        </div>
                        <button className="btn btn-primary rounded-full">Place a bid</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 bg-base-100 w-80 h-32 mx-auto">
                    <figure>
                        <img className="w-[100px] h-auto" src={Pic4} alt="Album"/>   
                    </figure>
                    <div className="">
                        <h2 className="">The Futr Abstr</h2>
                        <div className="flex">
                          <img className="m-2" src={IconMan} alt="" />
                          <img className="m-2" src={Frame} alt="" />
                        </div>
                        <button className="btn btn-primary rounded-full">Place a bid</button>
                    </div>
                </div>

                </div>
                <div>

                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Avator</th>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
      <th className="w-5 h-5">1</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={IconMan} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
            <div>
              
              <div className="text-sm opacity-50">United States</div>
            </div>
    
      </tr>
    
    </tbody>
    <tbody>
      {/* row 1 */}
      <tr>
      <th className="w-5 h-5">1</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={IconMan} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
            <div>
              
              <div className="text-sm opacity-50">United States</div>
            </div>
    
      </tr>
    
    </tbody>
    <tbody>
      {/* row 1 */}
      <tr>
      <th className="w-5 h-5">2</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={IconMan} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
            <div>
              
              <div className="text-sm opacity-50">United States</div>
            </div>
    
      </tr>
    
    </tbody>
    <tbody>
      {/* row 1 */}
      <tr>
      <th className="w-5 h-5">3</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={IconMan} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
            <div>
              
              <div className="text-sm opacity-50">United States</div>
            </div>
    
      </tr>
    
    </tbody>
  </table>
</div>

                </div>
            </div>
        </div>
    );
};

export default OverCollection;
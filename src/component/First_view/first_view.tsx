import image1 from "../assets/image_1.jpg";
import imgae_2 from "../assets/image_2.jpg";
import "boxicons";

function First_view() {
  const infor = [
    ["APP ", "Broke a Glass of somthing else than"],
    ["GAMES ", "This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube."],
    ["EDITOR PICK", "For Families of Teens at Microsoft Surface"],
    ["EDITOR PICK ", "Why Netflix shares are down 10%"],
  ]

  return (
    <>
      <div className="bg-gradient-to-t from-[#F5F5F5]" >
        <div className="mx-auto max-w-7xl pb-5 px-2 ">
          <div className="flex justify-between px-8">
            <div
              className=" relative flex flex-[3] h-[550px] w-full bg-cover bg-center  items-end"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className=" flex flex-col justify-between p-12 text-white relative z-10">
                <div className="text-m font font-medium my-4">SOFTWARE</div>
                <div className="text-4xl font-bold mb-3">
                  Running macOS and Windows 10 on the Same Computer
                </div>
                <div className="text-sm mb-3">
                  <span>
                    <i className="bx bxs-user"></i> akbarh
                  </span>
                  <span>
                    <i className="bx bxs-calendar"></i> July 7, 2021
                  </span>
                  <span>
                    <i className="bx bxs-comment"></i> No Comments
                  </span>
                </div>
                <div className="text-lg mb-">
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet ...
                </div>
              </div>
            </div>

            <div className=" flex justify-start items-start h-auto flex-[1] bg-blue ml-9 mr-2">
              <div>
                <img
                  src={imgae_2}
                  alt=""
                />
                <div className=" flex flex-col ">
                  {infor.map((item, i) => (
                    <div
                      className=" mt-5"
                      key={i}
                    >
                      <div className="text-purple-500 text-sm font-medium">
                        {item[0]}
                      </div>
                      <div className=" text-lg font-bold ">{item[1]}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default First_view
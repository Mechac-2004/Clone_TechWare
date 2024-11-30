import "boxicons";
import site_logo from "./assets/site_logo.svg";

function Footer() {
  const Info_Footer = [
    ["Company", "About", "Contact", "Our Stuff", "Advertise"],
    ["Tech News", "Technology", "Gadget", "Software", "Games"],
    [
      "Legal",
      "Privacy Policy",
      "Terms of service",
      "Extra Crunch Term",
      "Code of Product",
    ],
  ];
  return (
    <>
      <div className="w-full border-b border-white ">
        <div className="mx-auto max-w-7xl py-5 px-2">
          <div className="justify-between px-8 w-full py-11">
            <div className="  grid grid-cols-4 w-full pb-3 ">
              <div className="">
                <img
                  src={site_logo}
                  alt=""
                  className="mb-9"
                />
                <div className=" text-purple-400 ">
                  <i className="text-xl bx bxl-instagram-alt hover:text-purple-600"></i>
                  <i className="text-xl bx bxl-facebook-circle mx-5 hover:text-purple-600"></i>
                  <i className="text-xl bx bxl-twitter hover:text-purple-600"></i>
                </div>
              </div>
              {Info_Footer.map((item, t) => (
                <div>
                  <div
                    className="font-bold text-xl  mb-6"
                    key={t}
                  >
                    {item[0]}
                  </div>
                  <div className="mb-0.5 text-base text-lg text-gray-500">{item[1]}</div>
                  <div className="mb-0.5 text-lg text-gray-500">{item[2]}</div>
                  <div className="mb-0.5 text-lg text-gray-500">{item[3]}</div>
                  <div className="mb-0.5 text-lg text-gray-500">{item[4]}</div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
      <div className="w-full border-b border-white ">
        <div className="mx-auto max-w-7xl py-5 px-2">
          <div className="justify-between px-8 w-full py-5">
            
            <div className="flex items-center justify-center text-base">
              Copyright &copy; 2024 Tech News 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer
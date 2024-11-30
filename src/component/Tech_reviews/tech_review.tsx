import "boxicons";
import image_6 from "../assets/image_6.jpg";
import image_7 from "../assets/image_7.jpg";

import image_8 from "../assets/image_8.jpg";
import image_9 from "../assets/image_9.jpg";
import Tech_items from "./tech_review_2";
import Social_link from "./social_link";
function Tech_review() {
  const Info_Tech = [
    [
      image_6,
      "G A D G E T",
      "iPad Pro M1 Chip: Bringing The MacBook Pro Power",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
    ],
    [
      image_7,
      "G A D G E T",
      "Dell XPS 13 2021: The best Windows laptop now with OLED",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
    ],
    [
      image_8,
      "R E VI E W S",
      "Watching Their Dust: Photographing Players in Pollination",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
    ],
  ];
  const Media = [
    [
      " font-bold text-2xl bx bxl-facebook text-blue-600",
      "TechWire News",
      "2M+ Followers",
    ],
    [
      "text-2xl bx bxl-twitter text-blue-300",
      "@techwirenews",
      "1.4M+ Followers",
    ],
    [
      "text-2xl bx bxl-youtube text-red-600",
      "TechWire",
      "4M+ Subscribers",
    ],
  ];
  return (
    <>
      <div className="mx-auto max-w-7xl py-5 px-2">
        <div className="justify-between px-8 w-full">
          <div className="  grid grid-cols-4 w-full ">
            {/* left side*/}
            <div className=" border-b col-span-3 mr-5 pb-11 ">
              {/* En tete*/}

              <div className="w-full flex justify-between py-9">
                <div className="font-bold text-4xl ">Tech Reviews </div>
                <div>
                  <button className="text-purple-600 font-semibold text-lg">
                    <span className="flex ">
                      {" "}
                      More in tech reviews{" "}
                      <i className=" pt-1 bx bx-right-arrow-alt"></i>{" "}
                    </span>{" "}
                  </button>
                </div>
              </div>
              {/*Body */}
              <div className="grid grid-cols-2 w-full border-red-700 gap-4 ">
                {Info_Tech.map((item, i) => (
                  <Tech_items
                    key={i}
                    img={item[0]}
                    title={item[1]}
                    head={item[2]}
                    text={item[3]}
                  />
                ))}
              </div>
            </div>
            {/*rigth side */}
            <div className=" flex flex-col ">
              <div className="border-b">
                <img
                  className="mb-9"
                  src={image_9}
                  alt=""
                />
              </div>
              <div>
                <div className="text-xl font-bold my-5">Stay Connected</div>
                {Media.map((item, i) => (
                  <Social_link
                    key={i}
                    icons={item[0]}
                    title={item[1]}
                    followers={item[2]}
                  />
                ))}

                
              </div>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tech_review
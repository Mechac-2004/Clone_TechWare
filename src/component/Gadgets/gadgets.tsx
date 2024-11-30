import "boxicons";
import image_16 from "../assets/image_16.jpg";
import image_17 from "../assets/image_17.jpg";
import image_18 from "../assets/image_18.jpg";
import image_20 from "../assets/image_20.jpg";
import image_21 from "../assets/image_21.jpg";
import image_22 from "../assets/image_22.jpg";
import Cards from "../Multi_gadget/cards";
function Gadgets() {
  const Gadget = [
    [
      image_16,
      "How a Gadget Drives Human Creativity",
      "akbarh July 7, 2021",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
    ],
    [
      image_17,
      "An IoT Failure Worst Nightmare",
      "July 7, 2021",
      "Cursus iaculis etiam in In nullam donec sem sed consequat ...",
    ],
    [
      image_18,
      "Scientists, Feeling Under Siege, March Against Trump Policies",
      "akbarh July 7, 2021",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
    ],
  ];
  const Software = [
    [
      image_20,
      "Scientists Fear Climate Data Gap as Trump Aims at Satellites",
      "akbarh July 7, 2021",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
    ],
    [
      image_21,
      "Life on CAD: Get to Know the Shortcut",
      "July 7, 2021",
      "Cursus iaculis etiam in In nullam donec sem sed consequat ...",
    ],
    [
      image_22,
      "Why You Shouldn’t Walk on Escalators",
      "akbarh July 7, 2021",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
    ],
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 px-2 border-b mb-5">
        <div className="justify-between px-8 w-full">
          <div className="grid grid-cols-2 w-full gap-5">
            <div>
              {" "}
              <div className="w-full flex justify-between py-9">
                <div className="font-bold text-3xl ">Gadgets </div>
                <div>
                  <button className="text-purple-600 font-semibold text-lg">
                    <span className="flex ">
                      More in Gadgets
                      <i className=" pt-1 bx bx-right-arrow-alt"></i>{" "}
                    </span>{" "}
                  </button>
                </div>
              </div>
              <div className="  grid grid-cols-2 w-full gap-5">
                {Gadget.map((item, t) => (
                  <Cards
                    key={t}
                    style={`${t === 0 ? "col-span-2" : " "}`}
                    img={item[0]}
                    tile={item[1]}
                    date={item[2]}
                    text={item[3]}
                  />
                ))}
              </div>
            </div>

            <div>
              {" "}
              <div className="w-full flex justify-between py-9">
                <div className="font-bold text-3xl ">Gadgets </div>
                <div>
                  <button className="text-purple-600 font-semibold text-lg">
                    <span className="flex ">
                      More in Gadgets
                      <i className=" pt-1 bx bx-right-arrow-alt"></i>{" "}
                    </span>{" "}
                  </button>
                </div>
              </div>
              <div className="  grid grid-cols-2 w-full gap-5">
                {Software.map((item, t) => (
                  <Cards
                    key={t}
                    style={`${t === 0 ? "col-span-2" : " "}`}
                    img={item[0]}
                    tile={item[1]}
                    date={item[2]}
                    text={item[3]}
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
export default Gadgets
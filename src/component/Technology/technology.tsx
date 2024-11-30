import "boxicons";
import image_25 from "../assets/image_25.jpg";
import image_26 from "../assets/image_26.jpg"
import image_27 from "../assets/image_27.jpg";
import Card2 from "../Multi_gadget/cards";
export default function Technology() {
  const App = [
    [
      image_25,
      "Antarctic Ice Reveals Earth’s Accelerating Plant Growth",
      "akbarh July 7, 2021",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
    ],
    [
        image_26,
        "Photos of Jupiter From NASA Spacecraft, Both Near and Far",
        "akbarh July 7, 2021",
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
    ],
    [
        image_27,
        "Hans Dehmelt, Nobel Laureate for Isolating Electrons, Dies at 94",
        "akbarh July 7, 2021",
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
    ],
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 px-2">
        <div className="justify-between px-8 w-full">
          <div className="w-full flex justify-between py-9">
            <div className="font-bold text-3xl ">Apps </div>
            <div>
              <button className="text-purple-600 font-semibold text-lg">
                <span className="flex ">
                  More in Apps
                  <i className=" pt-1 bx bx-right-arrow-alt"></i>{" "}
                </span>{" "}
              </button>
            </div>
          </div>
          <div className="  grid grid-cols-3 w-full gap-5">
          {App.map((item, i) => (
              <Card2
                key={i}
                img={item[0]}
                tile={item[1]}
                date={item[2]}
                text={item[3]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

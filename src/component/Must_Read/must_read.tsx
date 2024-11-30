import "boxicons";
import image_11 from "../assets/image_11.jpg";
import image_12 from "../assets/image_12.jpg";
import Card1 from "../Multi_gadget/card1";
export default function Must_read() {
  const Read = [
    [
      image_11,
      "G A D G E T",
      "Spend a Dollar on Upcoming iPhone 13, and How to Save More",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
    ],
    [
      image_12,
      "MUST READ",
      "No Longer a Dream: Silicon Valley Takes On the Flying Car",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
    ],
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 px-2">
        <div className="justify-between px-8 w-full">
          <div className="w-full flex justify-between py-9">
            <div className="font-bold text-4xl ">Must Read </div>
            <div>
              <button className="text-purple-600 font-semibold text-lg">
                <span className="flex ">
                  View
                  <i className=" pt-1 bx bx-right-arrow-alt"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="  grid grid-cols-2 w-full ">
            {Read.map((item, i) => (
              <Card1
                key={i}
                bg={item[0]}
                head={item[1]}
                title={item[2]}
                text={item[3]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

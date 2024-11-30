import "boxicons";
import image_23 from "../assets/image_23.jpg";
import image_24 from "../assets/image_24.jpg";
import Card1 from "../Multi_gadget/card1";
export default function Games() {
  const Read = [
    [
      image_23,
      "",
      "After Badger Buries Entire Cow Carcass, Scientists Go to the Tape",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
    ],
    [
      image_24,
      "",
      "A Genetic Oddity May Give Octopuses and Squids Their Smarts",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
    ],
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 px-2">
        <div className="justify-between px-8 w-full">
          <div className="w-full flex justify-between py-9">
            <div className="font-bold text-4xl ">Games</div>
            <div>
              <button className="text-purple-600 font-semibold text-lg">
                <span className="flex ">
                  More in Games
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

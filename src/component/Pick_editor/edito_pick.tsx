import "boxicons";
import image_3 from "../assets/image_3.jpg";
import image_4 from "../assets/image_4.jpg";
import { propsPE,Pick_item } from "./pick_item";
import image_5 from "../assets/image_5.jpg";

export default function Editor() {
  const Edit2: propsPE[] = [
    {
      image: image_3,
      overtext: "Editors Pick",
      content: "For Families of Teens at Microsoft Surface",
    },
    {
      image: image_4,
      overtext: "Editors Pick",
      content: "Why Netflix shares are down 10%",
    },
    {
      image: image_5,
      overtext: "APP",
      content: "6 Bots That Deliver Science and Serendipity on Twitter",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 px-2">
        <div className="justify-between px-8 w-full">
          <div className="  grid grid-cols-4 w-full ">
            <div className=" border-b col-span-3 mr-5 pb-11 ">

              <div className="w-full flex justify-between py-3">
                <div className="font-bold text-xl ">Editor's Pick</div>
                <div>
                  <button className="text-purple-600 font-semibold">
                    <span className="flex ">
                      {" "}
                      View All <i className=" pt-1 bx bx-right-arrow-alt"></i>{" "}
                    </span>{" "}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 w-full border-red-700 gap-4">
                {Edit2.map((item, i) => (
                  <Pick_item
                    key={i}
                    image={item.image}
                    overtext={item.overtext}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
            <div className="border flex flex-col px-5">
              <div className="pb-5 ">
                <i className="bx bx-envelope text-xl bg-purple-600 px-2  text-white py-1"></i>
              </div>
              <div className="font-bold text-xl pb-5 ">
                Subscribe to Our Newsletter
              </div>
              <div className="font-bold text-base pb-5">
                gravida aliquet vulputate faucibus tristique odio.
              </div>
              <div className="pb-5">
                <form action="">
                  <input
                    type="mail"
                    className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    placeholder="Email Adress"
                  />
                </form>
              </div>
              <button className="bg-purple-600 px-9 py-2  text-white rounded-3xl font-bold  w-40 text-center ">
                Subsribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

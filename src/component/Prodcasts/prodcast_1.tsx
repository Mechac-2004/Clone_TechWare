import "boxicons";
import image_10 from "../assets/image-10.png";
export default function Prodcast_1() {
  return (
    <>
      <div className="mx-auto max-w-7xl py-5 px-2 ">
        <div className="justify-between px-8 w-full py-11 mx-auto">
          <div className="grid grid-cols-4 w-full relative h-52 rounded-xl bg-green-300">
            <div className="">
              <img
                className=" absolute z-10  bottom-0"
                src={image_10}
                alt=""
              />
            </div>
            <div className="col-span-2">
              {" "}
              <div className="text-purple-600 font-bold my-6">TechWire Podcast</div>
              <div className="text-3xl font-bold  mb-3 "> Listen to daily tech News Podcast</div>
              <div className="">
                Maecenas potenti non, turpis eget turpis gravida maecenas
              </div>{" "}
            </div>
            <div className="flex items-center justify-end ">
                <button className="mr-8 py-2 px-8 rounded-3xl text-white bg-purple-600 text-lg font-bold" >
                    Listen Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

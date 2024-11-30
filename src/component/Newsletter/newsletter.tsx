import "boxicons";

export default function Newsletter() {
  return (
    <>
      <div className="w-full  bg-gradient-to-l to-[#7AF6D1] from-[#B3F9E3]">
      <div className="mx-auto max-w-7xl py-5 px-2">
        <div className="justify-between px-8 w-full py-11">
          <div className="  grid grid-cols-2 w-full ">
            <div>
              <div className="font-bold  text-4xl  pb-3">
                Sign up for Newsletter
              </div>
              <div>Maecenas potenti ultrices, turpis eget turpis gravida.</div>
            </div>
            <div className="">
              <div className="flex">
                <form action="" className="flex-grow">
                  <input
                    type="mail"
                    className="w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    placeholder="Email Adress"
                  />
                </form>
                <button className="bg-purple-600 ml-3 px-9 py-2  text-white rounded-3xl font-bold  w-40 text-center ">
                Subsribe
              </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
         
      </div>
    </>
  );
}

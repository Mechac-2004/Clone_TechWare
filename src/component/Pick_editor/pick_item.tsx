export interface propsPE {
  image: string;
  overtext: string;
  content: string;
}

export function Pick_item(props: propsPE) {
  return (
    <>
      <div className=" relative">
        <img
          src={props.image}
          alt=""
          className={`w-full h-44 `}
        />
        <div className="absolute top-2 left-2 bg-white  text-sm px-2 py-1 rounded">
          {props.overtext}
        </div>
        <div className="text-2xl font-bold">{props.content} </div>
      </div>
    </>
  );
}

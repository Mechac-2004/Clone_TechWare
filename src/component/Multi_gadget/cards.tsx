import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Cards(props: { style: string | undefined; img: string | undefined; tile: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; date: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; text: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
      <>
        <div className={props.style}>
              <img
                src={props.img}
                alt=""
              />
              <div className="text-xl   font-bold py-3">
                {props.tile}
              </div>
              <div className=" pb-2">{props.date}</div>
              <div className="text-base">
                {props.text}
              </div>
            </div>
      </>
    );
  }
  
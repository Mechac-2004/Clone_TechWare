import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

 function Media(props: { icons: string | undefined; title: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; followers: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  return (
    <>
      <div className="flex pb-5">
        <i className={props.icons} ></i>
        <div className=" ml-2">
          <div className="text-xl font-bold">{props.title}</div>
          <div>{props.followers}</div>
        </div>
      </div>
    </>
  );
}
export default Media
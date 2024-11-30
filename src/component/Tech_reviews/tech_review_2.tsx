import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

 function Tech_review_2(props: { img: string | undefined; title: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; head: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; text: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  return (
    <>
      <div className="">
                  <img
                    src={props.img}
                    alt=""
                  />
                </div>
                <div>
                  <div className="my-2 text-purple-600">{props.title}</div>
                  <div className="text-2xl font-bold mb-3">{props.head}</div>
                  <div className="text-lg mb-1">
                    {props.text}
                  </div>
                  <div>
                    <span className="mr-2 ">
                      <i className="bx bxs-user"></i>arkham
                    </span>
                    <span>
                      <i className="bx bxs-calendar"></i>july 7,2021
                    </span>
                  </div>
                </div>
    </>
  );
}
export default Tech_review_2
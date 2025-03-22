import { useState } from "react";
import ShareLinks from "./ShareLinks";
import UserProfile from "./UserProfile";

export default function Article() {
  const [isShareOpenMobile, setIsShareOpenMobile] = useState(false);
  const [isShareOpenDesktop, setIsShareOpenDesktop] = useState(false);

  return (
    <section className="bg-white mx-6 rounded-2xl overflow-hidden shadow-lg flex flex-col max-w-[550px] md:flex-row md:max-w-[730px]">
      <div className="h-50 w-full md:h-auto md:w-2/3">
        <img
          className="w-full h-full object-cover object-[50%_20%] md:object-left"
          src="/drawers.jpg"
          alt="Image of Drawers"
        />
      </div>
      <div className="md:w-full">
        <div className="p-8 pb-0 md:px-9">
          <h2 className="text-very-dark-grayish-blue text-[17px] leading-6 md:leading-7 md:text-[22px]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="text-desaturated-dark-blue text-[13.3px] my-4 leading-5 md:text-sm md:mb-0">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div
          className={`${
            isShareOpenMobile && "bg-very-dark-grayish-blue"
          } flex items-center justify-between px-8 h-16 md:my-3`}
        >
          {!isShareOpenMobile ? <UserProfile /> : <ShareLinks />}
          <div
            onClick={() => {
              setIsShareOpenMobile(!isShareOpenMobile);
            }}
            className={`${
              !isShareOpenMobile
                ? "bg-light-grayish-blue"
                : "bg-desaturated-dark-blue"
            } rounded-full grid place-items-center aspect-square w-8 md:hidden`}
          >
            <svg
              className={`w-[14px] h-[14px] ${
                !isShareOpenMobile
                  ? "fill-desaturated-dark-blue"
                  : "fill-light-grayish-blue"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 13"
            >
              <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
            </svg>
          </div>
          <div
            onClick={() => {
              setIsShareOpenDesktop(!isShareOpenDesktop);
            }}
            className={`${
              isShareOpenDesktop
                ? "bg-light-grayish-blue"
                : "bg-desaturated-dark-blue"
            } hidden rounded-full place-items-center aspect-square w-8 md:grid`}
          >
            <svg
              className={`w-[14px] h-[14px] ${
                isShareOpenDesktop
                  ? "fill-desaturated-dark-blue"
                  : "fill-light-grayish-blue"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 13"
            >
              <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

import ShareLinks from "./ShareLinks";
import UserProfile from "./UserProfile";

export default function Article() {
  return (
    <section className="bg-white mx-6 my-auto rounded-2xl overflow-hidden shadow-lg min-h-[510px]">
      <div className="h-[40%] w-full">
        <img
          className="w-full h-full object-cover object-[50%_20%]"
          src="/drawers.jpg"
          alt="Image of Drawers"
        />
      </div>
      <div className="p-[32px] pb-5">
        <div>
          <h2 className="text-very-dark-grayish-blue text-[17px] leading-6">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="text-desaturated-dark-blue text-[13.3px] mt-4 mb-6 leading-5">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div>
          <UserProfile />
          {/* <ShareLinks /> */}
        </div>
      </div>
    </section>
  );
}

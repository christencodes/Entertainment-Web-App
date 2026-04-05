import Logo from "/public/assets/logo.svg";
import Avatar from "/public/assets/image-avatar.png";

import { HomeIcon } from "./Icons";
import { MovieIcon } from "./Icons";
import { TVIcon } from "./Icons";
import { BookmarkIcon } from "./Icons";
// fill="#5A698F" <----------- inactive color
export default function Navbar() {
  return (
    <div
      className="flex items-center justify-between  h-14 bg-blue900 px-4 md:mt-4 md:mx-4 md:rounded-[10px]  lg:grid
    lg:grid-rows-[auto_auto_1fr] lg:sticky lg:top-0 lg:left-0 lg:h-fit lg:min-h-240 lg:px-4 lg:py-8 lg:justify-none lg:gap-18  "
    >
      <section className="logo">
        <img src={Logo} alt="" />
      </section>
      <section className="navigation flex items-center justify-center gap-6 lg:flex-col ">
        <div>
          <HomeIcon
            width={20}
            height={20}
            viewBox={"0 0 20 20"}
            fill={"white"}
          ></HomeIcon>
        </div>
        <div>
          <MovieIcon
            width={20}
            height={20}
            viewBox={"0 0 20 20"}
            fill={"white"}
          ></MovieIcon>
        </div>
        <div>
          <TVIcon
            width={20}
            height={20}
            viewBox={"0 0 20 20"}
            fill={"white"}
          ></TVIcon>
        </div>
        <div>
          <BookmarkIcon
            width={20}
            height={20}
            viewBox={"0 0 20 20"}
            fill={"white"}
          ></BookmarkIcon>
        </div>
      </section>
      <section className="avatar lg:place-self-end">
        <img
          src={Avatar}
          className="h-6 w-6 md:h-8 md:w-8 border rounded-full border-white  "
          alt="avatar"
        />
      </section>
    </div>
  );
}

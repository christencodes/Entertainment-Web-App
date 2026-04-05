import Logo from "/public/assets/logo.svg";

import { HomeIcon } from "./Icons";
import { MovieIcon } from "./Icons";
import { TVIcon } from "./Icons";
import BookmarkIcon from "/public/assets/icon-nav-bookmark.svg";
// fill="#5A698F" <----------- inactive color
export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full min-h-14 bg-blue900">
      <section className="logo"></section>
      <section className="navigation flex items-center justify-center gap-6">
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
          <img src={BookmarkIcon} className="w-4 h-4" alt="" />
        </div>
      </section>
      <section className="avatar"></section>
    </div>
  );
}

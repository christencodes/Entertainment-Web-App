import Logo from "/public/assets/logo.svg?react";
import HomeIcon from "/public/assets/icon-nav-home.svg?react";

export default function Navbar() {
  return (
    <div className="w-full min-h-14 bg-blue900">
      <section className="logo">
        <Logo fill="#ffffff"></Logo>
      </section>
      <section className="navigation">
        <div>
          <HomeIcon fill="white"></HomeIcon>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section className="avatar"></section>
    </div>
  );
}

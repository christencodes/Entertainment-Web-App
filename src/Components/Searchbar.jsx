import { SearchIcon } from "./Icons";

export default function Searchbar() {
  return (
    <div className="Searchbar flex items-center justify-start gap-4 md:gap-6 w-full lg:px-8    ">
      <SearchIcon
        width={24}
        height={24}
        viewBox={"0 0 32 32"}
        fill={"white"}
      ></SearchIcon>
      <input
        className="text-preset-2-mobile md:text-preset-2-light text-white  focus:outline-0 caret-red500 lg:border-b lg:border-b-blue500 lg:w-full lg:pb-2 placeholder:text-white/50 lg:px-4 w-full  "
        type="search"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

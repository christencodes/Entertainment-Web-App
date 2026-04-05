import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Trending from "./Components/Trending";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full lg:relative lg:flex lg:w-full lg:flex-row">
        <Navbar></Navbar>
        <div className="h-full bg-blue950 flex flex-col px-4 pt-6 md:py-8  lg:px-0 w-full gap-6 ">
          <Searchbar></Searchbar>
          <Trending></Trending>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

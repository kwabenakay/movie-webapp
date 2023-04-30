import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import SideBar from "./components/SideBar";
import SearchOutput from "./components/SearchOutput";
import Home from "./pages/Home";
import Filter from "./components/Filter";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" bg-teal-blue h-fit max-w-[1440px] mx-auto text-white mini-pc:flex">
        <div className=" mini-pc:pr-24">
          <SideBar />
        </div>
        <div className=" pl-4 tablet:pl-6 mini-pc:pl-12 mini-pc:max-w-[95%]">
          <Filter />
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/tv-series" element={<TvSeries/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import SideBar from "./components/SideBar";
import SearchOutput from "./components/SearchOutput";
import Home from "./pages/Home";
import Filter from "./components/Filter";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import { Navigate, Route, Routes } from "react-router-dom";
import Bookmark from "./pages/Bookmark";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div className=" bg-teal-blue h-fit max-w-[1440px] mx-auto text-white mini-pc:flex">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {!(path.includes("login") || path.includes("signup")) && (
          <div className=" mini-pc:pr-24">
            <SideBar />
          </div>
        )}
        {!(path.includes("login") || path.includes("signup")) && (
          <div className=" pl-4 pb-6 tablet:pl-6 tablet:pb-8 mini-pc:pl-12 mini-pc:pb-14 mini-pc:w-[95%]">
            <Filter setSearch={setSearch}/>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv-series" element={<TvSeries />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/search" element={<SearchOutput searchValue={search} />} />
            </Routes>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

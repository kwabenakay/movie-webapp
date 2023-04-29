import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import SideBar from "./components/SideBar";
import SearchOutput from "./components/SearchOutput"
import Home from "./pages/Home";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <div className=" bg-teal-blue h-fit text-white mini-pc:flex">
        <div>
          <SideBar />
        </div>
        <div className=" w-full px-4 tablet:px-6 mini-pc:px-12">
          <Filter page="home"/>
          <Home/>
        </div>
      </div>
    </>
  );
}

export default App;

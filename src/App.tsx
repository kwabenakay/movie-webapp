import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import SideBar from "./components/SideBar";
import SearchOutput from "./components/SearchOutput"

function App() {
  return (
    <>
      <div className=" bg-teal-blue h-screen text-white mini-pc:flex">
        <div>
          <SideBar />
        </div>
        <div>
          <SearchOutput/>
        </div>
      </div>
    </>
  );
}

export default App;

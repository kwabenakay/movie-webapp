import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className=" bg-teal-blue text-white mini-pc:flex">
        <div>
          <SideBar />
        </div>
        <div>
          <MovieCard />
        </div>
      </div>
    </>
  );
}

export default App;

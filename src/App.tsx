import Carousel from "./components/Carousel";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className=" bg-teal-blue text-white mini-pc:grid mini-pc:grid-cols-2">
        <div className=" w-fit border">
          <SideBar />
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default App;

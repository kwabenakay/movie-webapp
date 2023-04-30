import { useLocation, useNavigate } from "react-router-dom";

export default function Filter() {
  let loctation = useLocation();
  let navigate = useNavigate();
  let isSwitched = false;
  let myString: string = loctation.pathname;
  let regex: RegExp = /\/([^/]+)$/;
  let match: RegExpMatchArray | null = myString.match(regex);
  let currentPage = match ? match[1] : "";
  function pageType() {
    switch (currentPage) {
      case "home": {
        return "Search for movies or TV series";
      }
      case "movies": {
        return "Search for movies";
      }
      case "tv-series": {
        return "Search for TV series";
      }
      case "bookmark": {
        return "Search for bookmarked shows";
      }
      default:
        return "";
    }
  }
  return (
    <div className=" text-white w-full flex gap-4 pt-3 pr-4 tablet:pr-6 mini-pc:pr-12">
      <div>serch logo</div>
      <input
        type="text"
        placeholder={ pageType()}
        className=" bg-transparent outline-none w-full focus:border-b-2 focus:border-b-white"
        onChange={(e) => {
          if (currentPage!=="search") {
            navigate("/search");
          } 
          else if ( e.target.value.trim().length === 0||!e.target.value) {
            navigate(-1);
          } 
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

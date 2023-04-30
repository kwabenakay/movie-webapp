import { useLocation } from "react-router-dom";

export default function Filter() {
  let loctation = useLocation();
  const myString: string = loctation.pathname;
  const regex: RegExp = /\/([^/]+)$/;
  const match: RegExpMatchArray | null = myString.match(regex);

  function pageType() {
    switch (match ? match[1] : "") {
      case "home": {
        return "movies or TV series";
      }
      case "movies": {
        return "movies";
      }
      case "tv-series": {
        return "TV series";
      }
      case "bookmark": {
        return "bookmarked shows";
      }
      default:
        return "movies or TV series";
    }
  }
  return (
    <div className=" text-white w-full flex gap-4 pt-3">
      <div>serch logo</div>
      <input
        type="text"
        placeholder={"Search for " + pageType()}
        className=" bg-transparent outline-none w-full"
        onChange={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
}

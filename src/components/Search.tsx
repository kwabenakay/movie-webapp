
export default function Filter(searchType:string) {
  function pageType(searchType:string) {
    switch(searchType){
      case 'home':{
        return 'movies or TV series'
      }
      case 'movie':{
        return 'movies'
      }
      case 'tv-series':{
        return 'TV series'
      }
      case 'bookmark':{
        return 'bookmarked shows'
      }
    }
  }
  return (
    <div className=' text-white w-full flex gap-4 pt-3'>
        <div>serch logo</div>
      <input 
        type="text"
        placeholder={'Search for '+pageType(searchType)}
        className=' bg-transparent outline-none'
        onChange={(e)=>{console.log(e)}}
     />
    </div>
  )
}

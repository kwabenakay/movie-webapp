
export default function Filter(searchType:string) {
  return (
    <div className=' text-white w-full flex gap-4 pt-3'>
        <div>serch logo</div>
      <input 
        type="text"
        placeholder={'Search for '+searchType}
        className=' bg-transparent outline-none'
        onChange={(e)=>{console.log(e)}}
     />
    </div>
  )
}

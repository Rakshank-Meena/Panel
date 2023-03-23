
const SidePane = (props:{typeSetter:any}) => {
    const categories=[{title:'cinematography',dataType:'addCinemaClient',store:"cinemaStore"},{title:'photography',dataType:'addClient',store:'photographyStore'},{title:'videography',dataType:'addVideoClient',store:'videoStore'},{title:'Content-creation',dataType:'addContentClient',store:'contentStore'},{title:'Direction',dataType:'addDirectionClient',store:'directionStore'},{title:'posters',dataType:'addPosterClient',store:'posterStore'}]
  return (
    <div className={`relative items-center bg-[#738a5c] h-full flex flex-col justify-evenly w-[18%] transition `}>
        <div className='w-full overflow-hidden h-[inherit]'>
        <div className='flex px-5 mx-auto flex-row rounded-md capitalize text-xl justify-start items-center text-black h-[20%] shadow-sm border-2 w-[96%]  bg-[#336600]'>
            <div className='bg-stone-800 rounded-full h-[3.5vw] w-[3.5vw]'></div>
            <div className='h-auto w-3/4'>
                <div style={{textShadow:"black 0px 0px 20px"}} className='text-2xl font-semibold text-white capitalize mx-3'>Digvijay</div>
                <div style={{textShadow:"black 0px 0px 20px"}} className='text-md text-white  capitalize mx-3 overflow-hidden w-auto whitespace-nowrap overflow-ellipsis '>Photography Portfolio</div>
            </div>    
        </div>
        <div className='w-full items-center h-[80%] flex flex-col justify-evenly '>
        {categories.map((category:{title:string,dataType:string,store:string})=>{
            return(<div onClick={()=>props.typeSetter(category)} key={categories.indexOf(category)} className='cursor-pointer rounded-md capitalize flex text-lg justify-center items-center text-black h-[15%] shadow-sm border-2 w-[96%]  bg-[#f8f8f8]'>{category.title}</div>)
        })}
        </div>
        </div>
    </div>
  )
}

export default SidePane

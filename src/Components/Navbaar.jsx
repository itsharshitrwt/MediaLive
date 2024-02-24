const Navbaar = ({setCategory}) =>{
    const scrollToPosition = (position) => {
        window.scrollTo({top: position , behavior:'smooth'});
      };
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme = "dark">
            <div className="container-fluid">
                <a className="navbar-brand"><span className="font-bold text-7xl mb-8 ml-2">Media<span className="text-orange-500" >Live</span></span></a>
                <div className="flex flex-wrap gap-8">
                    <div className="text-white text-2xl ml-2 mt-3 cursor-pointer hover:bg-orange-500 px-1 py-1 rounded-md" onClick={()=>{setCategory("general"); scrollToPosition(950);}}>All</div>

                    <div className="text-white ml-2 mt-3 text-2xl cursor-pointer  hover:bg-orange-500 px-1 py-1 rounded-md" onClick={()=>{setCategory("technology"); scrollToPosition(1200);}}>Technology</div>
                    <div className="text-white text-2xl ml-22 mt-3 cursor-pointer hover:bg-orange-500 px-1 py-1 rounded-md" onClick={()=>{setCategory("health"); scrollToPosition(950);}}>Healthcare</div>
                    <div className="text-white text-2xl ml-22 mt-3  cursor-pointer hover:bg-orange-500 px-1 py-1 rounded-md" onClick={()=>{setCategory("sports"); scrollToPosition(950);}}>Sports</div>
                    <div className="text-white text-2xl ml-2 mt-3 cursor-pointer hover:bg-orange-500 px-1 py-1 rounded-md" onClick={()=>{setCategory("entertainment"); scrollToPosition(950);}}>Entertainment</div>

                </div>
                
            </div>
            
        </nav>
        <div className="line border-b border-white"></div>        </>
    )
}

export default Navbaar

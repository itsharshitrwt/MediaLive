import image from '../assets/img.png'
const Newsitem = ({title , desciption , src , url}) =>{
    return(
        <div className="card bg-white border border-orange-500 border-thick mt-5 text-dark font-semibold mb-5 d-inline-block mx-16 px-2 py-2" style= {{ maxWidth: "360px"}}>
            <img src= {src?src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0aIm1NkTs4DsiHC9B8JJlxyl0_TrSvKQ7z5INMfOKqzEk11LIJm3I6qTZBXnnIwql5s&usqp=CAU"} style= {{height:"250px" , width:"400px"}} className="card-img-top" alt="..."/>
            <div className="card-body ">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{desciption? desciption.slice(0,90):"Latest news updates. Click below to watch live & detailed reports on current events."}</p>
                <a href= {url} className="btn btn-primary bg-orange-500 mt-2 hover:bg-blue-600">See more</a>
            </div>
        </div>
        )
    }
    
    export default Newsitem



    //img for error img:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0aIm1NkTs4DsiHC9B8JJlxyl0_TrSvKQ7z5INMfOKqzEk11LIJm3I6qTZBXnnIwql5s&usqp=CAU
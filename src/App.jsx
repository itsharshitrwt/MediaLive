import { useState } from "react"
import Navbaar from "./Components/Navbaar"
import NewsFeed from "./Components/NewsFeed"
import Footer from "./Components/Footer"
import Image from "./Components/Image"


const App = ()=> {
  const [category , setCategory] = useState("general")
  return (
       <div>
         <Navbaar setCategory ={setCategory}/>
         <div className="flex">
          <h1 className="text-4xl text-white font-bold  mt-20 ml-16  gap-y-0">MediaLiveIndia</h1>
         </div>
         <div className="flex flex-wrap mx-5 mt-4 justify-between">
         <p className="text-xl text-center font-medium mb-16 border border-[#2B3034] text-white bg-orange-500 px-1 py-1 rounded-xl hover:bg-[#2B3034] md:w-1/2 md:mb-0">
            <span style={{ display: 'block', textAlign: 'left', maxWidth: '100%' }}>
                Unveiling stories that captivate, enlighten, and inspire. Our news platform delivers more than headlines, unveiling the diverse tapestry of our world, one story at a time. Your window to the world's happenings, one click away.
            </span>
            <span style={{ display: 'block', textAlign: 'left', maxWidth: '100%' }}>
                Discover captivating stories on our news platform. Enlighten and inspire with diverse perspectives. Stay informed, stay inspired with MediaLive.
            </span>

            {/* Additional paragraph text for larger screens */}
            <span className="hidden md:inline" >
                MediaLiveIndia, your go-to destination for the latest and most comprehensive news coverage. At MediaLiveIndia, we are committed to delivering breaking news, insightful analyses, and thought-provoking stories from around the globe. Whether you're interested in technology, entertainment, sports, health, politics, or more, our dedicated team of journalists works tirelessly to bring you accurate and up-to-date information. Stay informed and empowered with our diverse range of news articles, opinion pieces, and multimedia content. Explore, engage, and embark on a journey of discovery with MediaLiveIndia. Share MediaLive.
            </span>
        </p> 
          <Image className = "w-full md:w-auto"/>
         </div><br></br><br></br>
         <div style={{
                position: 'relative',
                width: '100%',
                height: '20px', // Adjust height as needed
                backgroundColor: '#F97315',
                paddingBottom:'5px',
                overflow: 'hidden',
                margin: '1px',
                display: 'flex',
                alignItems:'center'
            }}>
                <div style={{
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    animation: 'moveRight 15s linear infinite', // Adjust animation duration as needed
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'white',
                    left: 0,
                }}>
                    Fresh Updates: The latest updates on technology, entertainment, sports, health and more. Stay tuned for exclusive coverage and breaking stories that matter  :)
                </div>
            </div>
            <style>
                {`
                    @keyframes moveRight {
                        0% { left: -100%; }
                        100% { left: 100%; }
                    }
                    @media (max-width: 768px) {
                        /* Adjust animation speed for smaller screens */
                        @keyframes moveRight {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(100%); }
                        }
                    }

                    @media (min-width: 769px) {
                        /* Adjust animation speed for larger screens */
                        @keyframes moveRight {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(50%); }
                        }
                    }
                `}
            </style><br></br><br></br>
         <NewsFeed category={category}/>
         <Footer/>
       </div>
      
   
  )
}

export default App

{/* <img className = "mt-14" src="https://irp.cdn-website.com/1b796ddc/dms3rep/multi/MEDIA-LIVE_logozero_verisonefinale.png" style={{height:"80px" , width: "110px"}}/> */}
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1ls-t9kJh2d1Ma4v39c1SbC00tq6N6Jukx6i4fCqSm2J2ZTY2x0ktpfpU5ttMQlkdTQ&usqp=CAU
//img not available error img: 
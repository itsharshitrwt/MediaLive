import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const NewsFeed = ({category}) =>{

    const [articles , setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    } , [category])

    return(
            <div>
                <h2 className="text-center text-5xl font-bold mb-4"><span className="text-white-500  bg-white hover:bg-blue-600 rounded-lg px-2 py-2 ">Top Articles</span></h2>
                {articles && articles.length > 0 && articles.map((news , index)=>{
                    console.log(news)
                    return <Newsitem key={index} title = {news.title} desciption ={news.desciption} src = {news.urlToImage} url = {news.url} />
                })}
            </div>
        )
    }
    
    export default NewsFeed
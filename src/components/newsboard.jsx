import { useEffect, useState } from "react"
import NewsList from "./newslist";


const NewsBoard = ({category}) => {
   const[articles,setArticles] =useState([]);

 useEffect(()=>{
  let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

  fetch(url).then(response=>response.json()).then (data=> setArticles(data.articles));

},[category]);
 return (
  <div className="container-fluid px-3">
    <h2 className="text-center my-3">
      Latest <span className="badge bg-danger">News</span>
    </h2>
    
   <div className="row gx-3 gy-4">
    {articles.map((news, index) => (
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex" key={index}>
        <NewsList
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
    
    </div>
    ))}
  </div>
</div>
 )
};
export default NewsBoard

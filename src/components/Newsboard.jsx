import { useState, useEffect } from "react";
import News_Items from "./News_Items";

const Newsboard = ({category}) =>{
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
        
            const cat = category ? category.toLowerCase() : "general";
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${import.meta.env.VITE_API_KEY}`;
            fetch(url)
              .then((response) => response.json())
              .then((data) => setArticles(data.articles || []))
              .catch((err) => {
                console.error("Failed to fetch articles:", err);
                setArticles([]);
              });
    },[category])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      <div className="container">
        <div className="row">
          {articles.map((news, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={index}>
              <News_Items
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Newsboard;


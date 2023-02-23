import { useState, useEffect } from 'react';
import NewsList from './NewsList';
import "./News.scss"
// import NewsGrid from './NewsGrid';

// my api key:
// ee2dfd3ce9424af9b9f53d5aef2574bb
// eff431ba17c54b439dfa3fed8d4c90a1


const News = () => {
    
    const [newsArray, setNewsItems] = useState([]);
     const [active, setActive] = useState([1]);
    const [category, setCategory] = useState("general");
 

    useEffect(() => {
        const fetchNewsList = async () => {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=&apiKey=eff431ba17c54b439dfa3fed8d4c90a1");
            const data = await response.json();
            setNewsItems(data.articles);
            // console.log(newsArray)
        };
        
        fetchNewsList()
    }, [category]);
  
        
    
    const newsElement = newsArray.map((item) => {
        return (
            <NewsList key={item.name}
                title={item.title}
                url={item.url}
                description={item.description}
                urlToImage={item.urlToImage}
                source={item.source}
                publication={item.publishedAt}
            ></NewsList>
        )
    });
        
    return (
        <>
            <div> 
            <ul> {newsElement}  </ul>
            </div>
        </>
    )
}

export default News;
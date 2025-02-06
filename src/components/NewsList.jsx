import React from 'react'
import NewsCard from './NewsCard';
import { useState,useEffect } from 'react';
import "./NewsList.css"

const NewsList = () => {
    const [category, setCategory] = useState('general');
    const [newsData, setNewsData] = useState([]);

    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    
    const getData = async () => {
        console.log("data Fatching.....")
        await fetch(`https://newsapi.org/v2/everything?q=${category}&from=2025-01-06&sortBy=publishedAt&apiKey=bc036bed1ac34546bfb90ffaf315a531`)
            .then((responce) => responce.json())
            .then((json) => {
                setNewsData(json.
                    articles)
                    console.log("data fatched")
            })
    }
    useEffect(() => {
        getData();
    }, [category])
    
    return (
        <>
        <nav className='navbar'>
        <ul>
            {categories.map((item,i)=>(
                <li key={i} onClick={(e)=>setCategory(e.target.value)}>
                    {item}
                </li>
            ))}
        </ul>
        </nav>
        <div className='news-list'>
            {newsData.map((item, i) => (
                <NewsCard key={i} title={item.title} image={item.urlToImage} readMoreUrl={item.url} />
            ))}
        </div>
        </>
        
    )
}

export default NewsList

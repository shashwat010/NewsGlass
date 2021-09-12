import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Articles from './Articles';
import Spinner from './Spinner';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [urlToImage, setUrlToImage] = useState()
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(true)
    const pageSize = 6;

    const updateArticles = async () => {
        const category = props.category ? props.category : 'news'
        setLoading(true)
        props.setProgress(10)
        let toImage= await fetch(`https://source.unsplash.com/514x288?${category}`)
        props.setProgress(20)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`
        let data = await fetch(url);
        props.setProgress(40)
        let parsedData = await data.json();
        props.setProgress(60)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)
        setUrlToImage(toImage.url)
        props.setProgress(100)
        setLoading(false)
    }

    const fetchData =async ()=>{
        let category = props.category?props.category:'general'
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${pageSize}`
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        const category = props.category ? props.category[0].toUpperCase() + props.category.slice(1) : 'Home'
        document.title = `${category} | NewsGlass`
        updateArticles();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <h1 className="text-center" style={{margin:'100px 0 25px 0',fontSize: '2.2rem'}}>NewsGlass - Breaking News</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}>
            
            <div className="container">
                <div className="row">
                    {articles.map((element, idx) => {
                        return (
                            <div className="col-md-4 my-3" key={idx}>
                                <Articles title={element.title ? element.title : ""} desc={element.description ? element.description : ""} imgsrc={element.urlToImage ? element.urlToImage : urlToImage} newsUrl={element.url} />
                            </div>
                        )
                    })}
                </div>
            </div>
            </InfiniteScroll>
        </>
    )
}

export default News

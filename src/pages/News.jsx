import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../components/Loading/Loading'
import NewsItem from '../components/NewsItem'

const News = (props) => {

    const { category, setProgress } = props;
    const [page, setPage] = useState(1)
    const [articles, setArticles] = useState([])
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)

    useEffect(() => {

        const fetchArticles = async () => {
            setProgress(15)
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=700c2d4a5cdf4d9ba3dcf58f2221272d&page=${1}&pageSize=9`)
            setProgress(50)
            let data = await response.json()
            setProgress(70)
            setArticles(data.articles)
            setTotalResults(data.totalResults)
            setProgress(100)
        }
        fetchArticles()

    }, [category])

    const fetchMoreData = async () => {
        setPage(page + 1)
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=700c2d4a5cdf4d9ba3dcf58f2221272d&page=${page + 1}&pageSize=9`)
        let data = await response.json()
        setTotalResults(data.totalResults)
        setArticles(articles.concat(data.articles))
    }

    return (
        <div className='container mar-top'>
            <h3 className="h-100 d-flex align-items-center justify-content-center my-3">Top News</h3>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >

                <div className="row">
                    {articles.map((element) => {

                        return <div className="col-md-4 my-2" key={element.url}>

                            <NewsItem
                                title={element.title.length > 80 ? element.title.slice(0, 80) + "..." : element.title}
                                desc={element.description ? element.description.slice(0, 100) : ""}
                                url={element.url}
                                image={element.urlToImage}
                                source={element.source.name}
                                pub_date={element.publishedAt} />
                        </div>
                    })}
                </div>

            </InfiniteScroll>
        </div>
    )
}

export default News;

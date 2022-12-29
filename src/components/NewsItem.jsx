import React from 'react'

const NewsItem = (props) => {
    let { title, desc, url, image, source, pub_date } = props;
    return (
        <div>
            <div className="card" style={{ width: "22rem", height: "35rem" }} >
                <div className="card-header">
                    {source}
                </div>
                <div className="card-body">
                    {image?<img src={image} style={{ maxHeight: '225px' }} className="card-img-top" alt=".." />: ""}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}...</p>
                        <a href={url} className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    {new Date(pub_date).toLocaleTimeString()} : {new Date(pub_date).toDateString()}
                </div>
            </div>
        </div>
    )
}

export default NewsItem;

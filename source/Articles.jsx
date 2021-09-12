import React from 'react'

const Articles = (props) => {
    const {title,desc,imgsrc,newsUrl}=props
    return (
        <>
            <div className="card">
                <img src={imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-outline-info">Read News</a>
                </div>
            </div>
        </>
    )
}

export default Articles

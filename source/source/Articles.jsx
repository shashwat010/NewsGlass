import React from 'react'

const Articles = (props) => {
    const { title, desc, imgsrc, newsUrl, author, date, source } = props
    return (
        <>
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0',
                    fontSize: '1.1rem'
                }
                }>
                    <span className="badge bg-success"> {source} </span>
                </div>
                <img src={imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-success">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-outline-info">Read News</a>
                </div>
            </div>
        </>
    )
}

export default Articles

import React from 'react'
import {Link} from 'react-router-dom'

 const Articles = (props) => {
    
    
    const{img, category, title, body, id} = props.article
    

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <img className="img mb-4" src={img} alt="news"></img>
                    <h5>{title}</h5>
                    <p>Category: {category.map(item =>(item + " "))}</p>
                    <p className="card-text">{body}</p>
                    <Link className="btn btn-dark btn-block" to={`news/article/${id}`}>Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default Articles
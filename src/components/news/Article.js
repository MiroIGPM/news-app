 import React, { Component } from 'react';
 import { Consumer } from '../../context';
 import { Link } from 'react-router-dom'

 
 let article = []
 var today = new Date(),
     date = today.getFullYear() + '-' + today.getDate() + '-' + (today.getMonth() + 1);

  class Article extends Component {
     render() {
         return (
            <Consumer>
            {value => {

                const { news_list } = value;
                news_list.forEach(element => {
                        if(element.id === parseInt(this.props.match.params.id)){                          
                            article.push(element)                          
                       }
                });
                return <React.Fragment>
                        
                            {article.map(item => (
                                <div className="article">
                                    <img src={item.img} alt="news" className="article__img mb-5"></img>
                                    <div className="card">
                                        <h5 className="card-header">
                                            {item.title}
                                        </h5>
                                        <div className="card-body">
                                            <p className="card-text">{item.body}</p>
                                            <p className="card-text">date: {date}</p>
                                        </div>    
                                    </div>    
                                    <div> 
                                        <Link to='/' className="btn btn-dark btn-sm mt-4 mb-5 pl-3 pr-3">Go Back</Link>
                                    </div>
                                </div>        
                            ))}
                            {article = []}
                           
                </React.Fragment>
            }}
         </Consumer>
         )
     }
 }
 
 export default Article;
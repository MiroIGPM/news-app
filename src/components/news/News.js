import React, { Component } from 'react'
import { Consumer } from '../../context'

import Spinner from '../layout/Spinner'
import Articles from './Articles'
import Pagination from './Pagination'

 class News extends Component {
    render() {
        return (
            <Consumer>
               {value => {
                   const { news_list, heading, currentPage, postsPerPage, dispatch } = value;
                

                    const indexOfLastPost = currentPage * postsPerPage;
                    const indexOfFirstPost = indexOfLastPost - postsPerPage;
                    const currentPosts = news_list.slice(indexOfFirstPost , indexOfLastPost, );

                    console.log(currentPosts)

                    const paginate = (pageNumber) =>{
                        console.log(pageNumber)
                        dispatch({
                            type: 'CHANGE_PAGE',
                            payload: pageNumber
                        })
                        
                    }
                    
                    
                   if(news_list === undefined || news_list.length === 0){
                       return <Spinner />
                   } else{
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-5">{heading}</h3>
                                <div className="row">
                                     {currentPosts.map(item =>(
                                         <Articles key={item.id} article={item} news_list={currentPosts}/>
                                     ))}  
                                </div>
                                <Pagination postsPerPage={postsPerPage} totalPosts={news_list.length} paginate={paginate}/>
                            </React.Fragment>    
                        )
                   }
                   
               }}
            </Consumer>
        )
    }
}

export default News
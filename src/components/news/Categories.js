import React, { Component } from 'react'
import { Consumer } from '../../context';

class Categories extends Component {

    resetAll = (dispatch, reset_list) =>{
        dispatch({
            type: 'RESET_DATA',
            payload: reset_list,      
        })
    }

    changeCategorie = (dispatch, news_list, reset_list, e) =>{ 
        const result = []
        reset_list.map(item=>{
         return item.category.map(elem=>{
                if(elem === e.target.textContent.toLowerCase()){
                    result.push(item)
                }
            })
        })
       dispatch({
           type: 'CHANGE_CATEGORIE',
           payload: result,
           category: e.target.textContent
       }) 
    }

    
    render() {
        return (
            <Consumer>
                {value =>{
                    const { dispatch, news_list, reset_list } = value;

                    return(
                        <div className="card card-body mb-4 p-4">
                            <h5 className="text-center">Filter by category</h5>
                            <div className="categories">
                                <p onClick={this.resetAll.bind(this, dispatch, reset_list)}>All</p>
                                <p onClick={this.changeCategorie.bind(this, dispatch, news_list, reset_list)}>Press</p>
                                <p onClick={this.changeCategorie.bind(this, dispatch, news_list, reset_list)}>News</p>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Categories;
import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext(); 

const reducer = (state, action) =>{
    switch(action.type){
        case 'RESET_DATA':
            return{
                ...state,
                news_list: action.payload,
                heading: "Top News"
            }
        case 'CHANGE_CATEGORIE':
        return{
            ...state,
            news_list: action.payload,
            heading: action.category
        };
        case 'CHANGE_PAGE':
        return{
            ...state,
            currentPage: action.payload,
        };    
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        news_list: [],
        reset_list: [],
        heading: 'Top news',
        dispatch: action => this.setState(state => reducer(state, action)),
        currentPage: 1,
        postsPerPage: 5
    }

    componentDidMount(){
        axios.get("https://my-json-server.typicode.com/dragan-rakita/json-placeholder/blob/master/press-news")
            .then(res => {
                this.setState({news_list: res.data, reset_list: res.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
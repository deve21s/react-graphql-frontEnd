import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import { getBooksQuery } from '../query/query'
import BookDetails  from './bookDetails';

class BookList extends Component {
    constructor(props){
        super(props)
        this.state ={
            selected : null
        }
    }
    displayBooks(){
        let data = this.props.data;
        if(data.loading){
            return (<div>Lodding Books...</div>)
        }else{
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={(e) =>{this.setState({selected : book.id})}}>{book.name}</li>
                )
            })
        }
    }
    render() {
        return (
            <div>
             <ul id="book-list">
                   { this.displayBooks() }
               </ul>
               <BookDetails bookid = {this.state.selected} />
           </div>
        )
    }
}

// function BookList() {
//     return (
//       <div>
//           <ul id="book-List">
//               <li>booklist</li>
//           </ul>
//       </div>
//     );
//   }
  
 export default graphql(getBooksQuery)(BookList);
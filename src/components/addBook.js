import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import{ flowRight as compose } from 'lodash'
import { getAuthorQuery, getBooksQuery } from '../query/query'
import { addBookMutation } from '../query/query'

class AddBook extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "",
            genre: "",
            authorId: ""
        }
    }
    displayAuthor(){
        

        let data = this.props.getAuthorQuery
        if(data.loading){
            return (<option>Loading Authours..</option>)
        }else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }
    submitForm(e){
        e.preventDefault()
        this.props.addBookMutation({
            variables : {
                name: this.state.name,
                genre : this.state.genre,
                authorid : this.state.authorid
            },
            refetchQueries : [{query : getBooksQuery}]
        })
        
    }

    render() {
        return (
           <form id = "add-book" onSubmit={ this.submitForm.bind(this) }>
               <div className='field'>
                    <label>Book Name:</label>
                    <input type='text' onChange={ (e) => this.setState({name:e.target.value}) } />
               </div>

               <div className='field'>
                    <label>Genre:</label>
                    <input type='text' onChange={ (e) => this.setState({genre:e.target.value}) } />
               </div>

               <div className='field'>
                    <label>Author:</label>
                    <select onChange={ (e) => this.setState({authorid:e.target.value}) }>
                        <option>select Author</option>
                        {this.displayAuthor()}
                    </select>  
               </div>
            <button>+</button>

           </form> 
        )
    }
}
  
 export default compose(
    graphql(getAuthorQuery, {name : "getAuthorQuery"}),
    graphql(addBookMutation,{name : "addBookMutation"})
 )(AddBook);
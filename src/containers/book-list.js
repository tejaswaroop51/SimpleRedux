/**
 * Created by tvankada on 5/12/16.
 */
import React, {Component} from 'react';

import { connect } from 'react-redux';

import { selectBook} from '../actions/index';

import { bindActionCreators} from 'redux'; // takes the action and it will flow across all reducers

class BookList extends Component{

   renderList(){

       return this.props.books.map( (book) => {

           return(

              <li
                  key={book.title}
                  className="list-group-item"
                  onClick={ () => this.props.selectBook(book)}>
                  {book.title}
              </li>
           );

       });
   }


    render(){

        return(

            <ul className="list-group col-sm-4">

                {this.renderList()}

            </ul>

        );
    }
}

// Here state is the Application State not Component State

function mapStateToProps(state){

    //whatever is returned from here will show up as props inside of BookList

    return{

      books: state.books // We are mapping Application State to Container State and passing it as props to it

    };
}

// Anything returned from this function will end up as props on the BookList container

function mapDispatchToProps(dispatch){

    // Whenever selectBook is called, the result should be passed to all of our reducers

    return bindActionCreators({selectBook:selectBook}, dispatch);


}

// Promote BookList component to container - it needs to know about this new method , selectBook. Make it available as a prop

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
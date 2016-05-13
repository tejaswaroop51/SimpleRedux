/**
 * Created by tvankada on 5/12/16.
 */

import React , {Component} from 'react';

import { connect } from 'react-redux';

 class BookDetail extends Component {

    render(){

        if(!this.props.book){

            return <div>Select a Book to get started.</div>;
        }

        return(

            <div><h3>Details for: {this.props.book.title}</h3></div>
        );
    }

}

// Here state is the Application State not Component State

function mapStateToProps(state){

    //whatever is returned from here will show up as props inside of BookList

    return{

        book: state.activeBook // We are mapping Application State to Container State and passing it as props to it

    };
}

export default connect(mapStateToProps)(BookDetail);
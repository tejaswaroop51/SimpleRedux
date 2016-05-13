/**
 * Created by tvankada on 5/12/16.
 */
import React, {Component} from 'react';

import BookList from '../containers/book-list';
 import BookDetail from  '../containers/book-detail';


export  default class App extends Component{

    render(){

        return(


            <div>

                <BookList/>
                <BookDetail />

            </div>

        );
    }

}

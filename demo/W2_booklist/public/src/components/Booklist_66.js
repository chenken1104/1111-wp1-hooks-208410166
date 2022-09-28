import React from 'react'
import {data} from './data';

const BookList_66 = () => {
    return (
        <section className='bookList'>
          { data.map( (book, index) => {
            const {id, img, title, author} = book;
            return<Book_66 key={id} img={img} title={title} author={author}/>;
          })}
        </section>
      );
} 

export default BookList_66;
import React from 'react'


const Category_66 = ({ categories, filterItems }) => {
    // console.log('categories', Categories);
    return (
      <div className='btn-container'>
        { categories.map((category, index) => {
          return (
            <button key={index} type="button"
            className="filter-btn" onClick={() =>
            filterItems(category) }>{category}</button>
          )
        })}
      </div>
        // <div className="btn-container">
        //   { categories.map( (item) => {
        //     const {id, category} = item;
        //     return (
        //         <button key={id}
        //         type="button" 
        //         className="filter-btn" 
        //         data-id={category}>
        //         {item}
        //         </button>
        //     )
        // })}
        // </div>
  );
};


export default Category_66;

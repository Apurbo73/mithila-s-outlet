import React, { useEffect, useState } from 'react';

const FilterPage = (props) => {
    const [category,setcategory]=useState('');

    useEffect(()=>{
    props.onFilter(category)
    },[props,category]);
    
    return (
        <div className='mt-2'>
            <button onClick={()=>{setcategory("grocery")}} className='btn btn-outline-dark m-1' value="Grocery">Grocery</button>
            <button onClick={()=>{setcategory("mobile")}} className='btn btn-outline-dark m-1' value="Grocery">Mobile</button>
            <button onClick={()=>{setcategory("fashion")}} className='btn btn-outline-dark m-1' value="Grocery">Fashion</button>
            <button onClick={()=>{setcategory("electronics")}} className='btn btn-outline-dark m-1' value="Grocery">Electronics</button>
            <button onClick={()=>{setcategory("appliences")}} className='btn btn-outline-dark m-1' value="Grocery">Appliences</button>
            <button onClick={()=>{setcategory("top deal")}} className='btn btn-outline-dark m-1' value="Grocery">Top Deal</button>
            <button onClick={()=>{setcategory("baby's")}} className='btn btn-outline-dark m-1' value="Grocery">Baby's</button>
            <button onClick={()=>{setcategory("home")}} className='btn btn-outline-dark m-1' value="Grocery">Home</button>


        </div>
    );
};

export default FilterPage;
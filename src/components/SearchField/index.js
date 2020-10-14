import React from 'react';

const SearchField =({ search, searchChange})=>{
    return(
        <div>
            <input
            type='search'
            placeholder='search by name'
            onChange= {searchChange}/> 
        </div>
    )

}
export default SearchField;
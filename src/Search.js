import React from 'react'

function Search({search,setSearch})
{
    return(
        <form>
            <input 
                 type="text"
                 placeholder='search'
                 value={search}
                 onChange={(e)=> setSearch(e.target.value)}
                 >
            </input>
        </form>
    )
}
export default Search;
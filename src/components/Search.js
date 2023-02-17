import React from 'react'

function Search(props) {
    const {searchText,setSearchText}=props
  return (
    <div>

        <input type="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search' />
    </div>
  )
}

export default Search
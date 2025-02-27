import React from 'react'
import {FaPlus} from 'react-icons/fa'

function Additems({newitems,setNewitems,handleSubmit})
{
    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add items'
                required
                value={newitems}
                onChange={(e) => setNewitems(e.target.value)}
            />
            <button type='submit'>
                <FaPlus />
            </button>
        </form>
    )
}

export default Additems;
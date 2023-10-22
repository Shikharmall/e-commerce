import React, { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'

export const SortButtons = () => {
  const [ gridView, setGridView ] = useState(true);

  return (
    <>
    <div className='btn-container'>
      <button
        type='button'
        className={gridView ? 'active' : undefined}
      >
        <BsFillGridFill />
      </button>
      <button
        type='button'
        className={!gridView ? 'active' : undefined}
      >
        <BsList />
      </button>
    </div>
    </>
  )
}

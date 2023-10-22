import React from 'react'

export const SortMenu = () => {
  return (
    <form>
      <label htmlFor='sort'>sort by{` `}</label>
      <select name='sort' id='sort'>
        <option value='price-lowest'>price (lowest)</option>
        <option value='price-highest'>price (highest)</option>
        <option value='name-a'>name (a-z)</option>
        <option value='name-z'>name (z-a)</option>
      </select>
    </form>
  )
}

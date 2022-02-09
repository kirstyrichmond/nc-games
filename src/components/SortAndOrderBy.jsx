import React, { useState } from 'react'
import { getAllReviews } from '../utils/api'

const SortAndOrderBy = ({ updateReviews, category }) => {

    const [sortBy, setSortBy] = useState(undefined)
    const [order, setOrder] = useState()

    const handleSortBy = (event) => {
        setSortBy(event.target.value)
    }

    const handleOrder = (event) => {
        setOrder(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        getAllReviews(category, sortBy, order).then((sortedReviews) => {
            updateReviews(sortedReviews)
        })
    }

  return (
      <>
    <div className='sort-by'>
        <form onSubmit={handleSubmit}>
            <label>Sort by:
            <select value={sortBy} onChange={handleSortBy}>
                <option value='created_at'>Date</option>
                <option value='title'>Title</option>
                <option value='category'>Category</option>
                <option value='votes'>Votes</option>
            </select>
            </label>
            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
    <div>
    <form onSubmit={handleSubmit}>
            <label>Order by:
            <select value={order} onChange={handleOrder}>
                <option value='asc'>ASC</option>
                <option value='desc'>DESC</option>
            </select>
            </label>
            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
    </>
  )
}

export default SortAndOrderBy
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getAllReviews } from '../utils/api'

const SortAndOrderBy = ({ updateReviews, category }) => {

    const [sortBy, setSortBy] = useState('created_at')
    const [order, setOrder] = useState('desc')

    const handleSortBy = (event) => {
        setSortBy(event.target.value)
    }

    const handleOrder = (event) => {
        setOrder(event.target.value)
    }

    useEffect(() => {
        getAllReviews(category, sortBy, order).then((sortedReviews) => {
            updateReviews(sortedReviews)
        }
    )}, [category, sortBy, order])

    // const handleSubmit = (event) => {
    //     event.preventDefault()
        
        // getAllReviews(category, sortBy, order).then((sortedReviews) => {
        //     updateReviews(sortedReviews)
        // })
    // }

    

  return (
      <>
      <div>
      <Box sx={{ m: 1, minWidth: 80 }}>
      <FormControl fullWidth>
  <InputLabel id="sort-by-option">Sort by</InputLabel>
  <Select
    labelId="sort-by-option"
    id="sort-by"
    value={sortBy}
    label="Sort by"
    // autoWidth
    onChange={handleSortBy}
  >
    <MenuItem value='created_at'>Most recent</MenuItem>
    <MenuItem value='title'>Title</MenuItem>
    <MenuItem value='category'>Category</MenuItem>
    <MenuItem value='votes'>Votes</MenuItem>
    <MenuItem value='comment_count'>Comment Count</MenuItem>
  </Select>
</FormControl>
</Box>
    <Box sx={{ m: 1, minWidth: 80 }}>
      <FormControl fullWidth>
  <InputLabel id="order-by-option">Order by</InputLabel>
  <Select
    labelId="order-by-option"
    id="order-by"
    value={order}
    label="Order by"
    onChange={handleOrder}
  >
    <MenuItem value='asc'>ASC</MenuItem>
    <MenuItem value='desc'>DESC</MenuItem>
  </Select>
</FormControl>
</Box>
    </div>
    </>
  )
}

export default SortAndOrderBy
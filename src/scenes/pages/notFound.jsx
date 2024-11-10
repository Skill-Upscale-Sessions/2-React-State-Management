import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div>notFound</div>
    <Box component="span" m={1} sx={{
        display: 'flex',
        flexDirection: 'column',
    }}>
    <Link to="/">Go back to the homepage from link</Link>
    <a href="/">Go back to the homepage from a</a>
    </Box>
    </>
  )
}

export default NotFound
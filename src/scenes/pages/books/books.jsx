import { Box, Divider, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import withDelete from '../../../HOC/withDelete';

function Books() {

  // const [books, setBooks] = React.useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:4000/books")
  //     const data = await res.json()
  //     console.log(data)
  //     setBooks(data)
  //   }
  //   fetchData()
  // }, [])

  const books = useLoaderData()
  return (
    <Box sx={{marginTop: "30px"}}>
    <h1>Books</h1>
    <List sx={{ minWidth: '100wv',marginTop: '10px' }}>
      {books?.map((book) => (
        <ListItem 
        sx={{
          alignItems: 'flex-start',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
          marginBottom: '8px',
        }} 
        key={book.id}
      >
        <ListItemText 
          primary={
            <Link to={book.id.toString()} style={{ textDecoration: "underline" }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
              {book.title}
            </Typography>
            </Link>
          } 
          secondary={
            <Box sx={{ marginLeft: "20px", color: '#555' }}>
              <Typography variant="body2" sx={{ fontSize: '0.9rem', marginBottom: '4px' }}>
                <strong>Author:</strong> {book.author}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                <strong>Year Published:</strong> {book.year}
              </Typography>
            </Box>
          }
          />
          {/* {canDelete && <Typography variant="body2" sx={{ fontSize: '0.9rem', color: 'red' }}>Delete</Typography>} */}
      </ListItem>
      ))}
    </List>
    </Box>

  )
}

// const DeletableBooks = withDelete(Books)

export default Books

export const booksLoader = async () => {
  const res = await fetch("http://localhost:4000/books")
  const data = await res.json()
  return data
}
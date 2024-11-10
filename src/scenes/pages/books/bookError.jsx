import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function BookError() {
    const error = useRouteError()
  return (
    <div>
        <h1>Book not found</h1>
        <p>{error.message}</p>
        <Link to="/books">Go back to books</Link>
    </div>
  )
}

export default BookError
import React from 'react'

const withAuth = (Component) => {
    const isAuthenticated = false
  return function(props) {
    if (isAuthenticated) {
      return <Component {...props} />
    } else {
      return <h1>You are not authorized to view this page</h1>
    }
  }
}

export default withAuth;
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorBoundery = () => {
    const error = useRouteError();
    console.log("error", error.message)
  return (
    <div><p style={{color: "red"}}>{error.message}</p></div>
  )
}

export default ErrorBoundery
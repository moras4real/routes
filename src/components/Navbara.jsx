import React from 'react'
import { Link } from 'react-router-dom'

const Navbara = () => {
  return (
    <>
    <div className="container mx-auto">
        <Link to="/" className="btn btn-danger">Go to Sign Up</Link>
        <Link to="/signina" className="btn btn-success">Go to Sign In</Link>  
        <Link to="/dashboarda" className="btn btn-warning">Go to Dashboard</Link>      
    </div>
    </>
  )
}

export default Navbara
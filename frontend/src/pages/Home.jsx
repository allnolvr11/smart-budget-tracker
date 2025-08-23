import { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {

  const BACKENDURL = import.meta.env.BACKEND_URL;

  const showRoles = () => {
    axios.get(`${BACKENDURL}/api/get`)
    .then(function(response){
      console.log("roles: ")
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
  }

  return (
    <div>
      Hello tanan
      <button onClick={showRoles}>show roles</button>
    </div>
  )
}

export default Home;

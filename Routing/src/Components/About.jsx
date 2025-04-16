import React from 'react'
import { useParams } from 'react-router'
function About() {
    const {name,id} = useParams();
    
  return (
    <div>About:{name},id:{id}</div>
  )
}

export default About
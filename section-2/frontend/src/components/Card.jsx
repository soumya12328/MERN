import React from 'react'

const Card = ({title, description}) => {
  return (
    <div className='bg-blue-700 p-10 w-1/2 mx-auto mb-5 rounded-2xl hover:bg-fuchsia-600 transition-all duration-1000 ease-out'>
        <h1 className= 'text-4xl'>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Card

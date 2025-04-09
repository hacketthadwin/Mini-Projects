import React from 'react'

const Cards = (props) => {
  return (
    <div>
        <div className='border-2 border-gray-300 rounded-lg p-8 m-4 max-w-[20rem]'>
            <h2 className='text-4xl font-bold mb-4 text-white'>{props.text}</h2>
            <p className='text-gray-400'>{props.price}</p>
            <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900 hover:scale-110 transition duration-300'>Click Me</button>
        </div>
    </div>
  )
}

export default Cards
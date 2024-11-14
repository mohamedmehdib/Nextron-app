import React from 'react'

export default function Score({score}) {
    function reload(){
        window.location.reload(false)
    }
  return (
    <div className='text-center text-4xl px-14 py-24 bg-gray-600 rounded-lg flex justify-center flex-col space-y-7'>
        Congratulations ! <br />Your score is : {score}
        <button className='bg-gray-300 rounded-full p-1 text-3xl' onClick={reload}>Repete</button>
    </div>
  )
}

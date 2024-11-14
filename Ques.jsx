import React, { useState } from 'react'
import qBank from './data'

export default function Ques({id,receiveId,receiveScore}) {

  const[score,setScore]=useState(0)
  function sendId(){
    receiveId(prev=>prev+1)
  }
  function add(){
    id=id+1
    sendId()
    console.log(score)
    receiveScore(score)
  }
  const verif = (e) => {
    if (qBank[id].answer===(e)){
      setScore(prev=>prev+1)
      console.log("True")
    }else{
      console.log("False")
    }
  }
  return ( 
    <div className='space-y-3'>
      <h1 className='text-5xl'>QUIZ APP</h1>
      <h1 className='text-3xl'>Question {id+1}</h1>
      <p>{qBank[id].question}</p>
      <div>
        <input type="radio" name="one" onClick={(e)=>verif(e.target.value)} value={qBank[id].options[0]}/> <span>{qBank[id].options[0]} </span>
      </div>
      <div>
        <input type="radio" name="one" onClick={(e)=>verif(e.target.value)} value={qBank[id].options[1]}/> <span>{qBank[id].options[1]} </span>
      </div>
      <div>
        <input type="radio" name="one" onClick={(e)=>verif(e.target.value)} value={qBank[id].options[2]}/> <span>{qBank[id].options[2]} </span>
      </div>
      <div>
        <input type="radio" name="one" onClick={(e)=>verif(e.target.value)} value={qBank[id].options[3]}/> <span>{qBank[id].options[3]} </span>
      </div>


      <button className='bg-blue-600 rounded-full p-3' onClick={add}>Submit</button>
    </div>
  )
}

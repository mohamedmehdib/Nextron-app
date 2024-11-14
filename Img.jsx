"use client"
import React from 'react'
import Ques from './Ques'
import { useState } from 'react'
import Score from './Score'

export default function Img() {
  const[score,setScore]=useState(0)
  const[num,setNum]=useState(0)
  function receiveId(){
    setNum(prev=>prev+1)
  }
  function receiveScore(data){
    setScore(data)
  }
  return (
    <div className='grid place-content-center h-screen'>
      {(num<5)?(<Ques id={num} receiveId={receiveId} receiveScore={receiveScore} />):(<Score score={score}/>)}
    </div>
  )
}

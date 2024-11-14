"use client"
import React, { useRef, useState } from 'react'

export default function RatingApp() {
  const inputRef = useRef()
  const[typed,setTyped]=useState("")
  const upper = () => {
    let oldStr = inputRef.current.value;
    let newStr = oldStr.toUpperCase();  // Corrected here
    inputRef.current.value = newStr;
  }
  
  const lower = () => {
    let oldStr = inputRef.current.value;
    let newStr = oldStr.toLowerCase();
    inputRef.current.value = newStr;
  }  
  
  const clear = () => {
    inputRef.current.value=""
  }

  const clearSpaces = () => {
    let newStr = ""
    const oldStr = inputRef.current.value
    for (let i =0; i<typed.length;i++){
      if(oldStr[i]!==" "){
        newStr = newStr+oldStr[i]
      }
      inputRef.current.value=newStr
    }
  }
  const reverseWord = () => {
    let newStr = ""
    const oldStr = inputRef.current.value
    for (let i=0;i<oldStr.length;i++){
      newStr=oldStr[i]+newStr
    }
    inputRef.current.value=newStr
  }
  return (
    <div className='w-screen h-screen flex justify-center pt-20'>
      <div className='w-2/3 h-1/2 space-y-4'>
        <h1 className='text-4xl font-semibold'>Enter your Text</h1>
        <textarea onChange={(e)=>setTyped(e.target.value)} ref={inputRef} type="text" className='w-full h-full text-black flex text-2xl p-3' placeholder='Enter your text...'></textarea>
        <div className='w-full justify-center flex space-x-6'>
          <button onClick={upper} className='rounded-lg p-3 bg-red-500'>Upper Case</button>
          <button onClick={lower} className='rounded-lg p-3 bg-yellow-500'>Lower Case</button>
          <button onClick={clear} className='rounded-lg p-3 bg-green-500'>Clear All</button>
          <button onClick={clearSpaces} className='rounded-lg p-3 bg-blue-500'>Clear Space</button>
          <button onClick={reverseWord} className='rounded-lg p-3 bg-orange-500'>Reverse Word</button>
        </div>
      </div>
    </div>
  )
}

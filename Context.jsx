"use client"
import {useState , createContext} from 'react'
import User from './User'

export const UserContext = createContext(null)

export default function Context() {

  const [name, setName] = useState("5adawi")
  const values = {name, setName}
  
  return (
    <UserContext.Provider value={values}>
      <User/>
    </UserContext.Provider>
  )
}
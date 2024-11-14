import React , {useContext} from 'react'
import Current from './CurrentUser'
import { UserContext } from './Context'


export default function User() {

  const {setName} = useContext(UserContext)

  return (
    <div>
      <Current/>
      <button onClick={()=>{setName("Basas")}}>Push</button>
    </div>
  )
}

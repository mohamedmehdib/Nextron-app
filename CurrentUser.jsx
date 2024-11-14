import React , {useContext} from 'react'
import { UserContext } from './Context'


export default function CurrentUser() {

  const {name} = useContext(UserContext)

  return (
    <div>
        {name}
    </div>
  )
}

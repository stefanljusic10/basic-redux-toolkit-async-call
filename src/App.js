import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserThunk } from './redux/thunks/getUserThunk'

// dispatch actions using useDispatch hook
// get access to store using useSelector and extracting state
// pass random id as a parameter to thunk function

function App() {
  const dispatch = useDispatch()
  const { user, loading } = useSelector(state => state.user)
  
  useEffect(() => {
    const randomId = Math.ceil(Math.random()*10);
    dispatch(getUserThunk(randomId))
  }, [dispatch])

    if(loading)
      return(
        <div>
          <b>{user.name}</b> lives in <b>{user.address.city}</b>
        </div>
      )
    else 
      return <div>Loading...</div>
}

export default App

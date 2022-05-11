import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Context } from '../..';
import { PriRoute, PubRoute } from './RoutePath/RoutePath'
import {useAuthState} from 'react-firebase-hooks/auth'

const RouteApp = () => {

  const {auth} = useContext(Context)
  const [user] = useAuthState(auth);

  return (
    <Routes>
      {
        !user
        ?
        PubRoute.map(obj => {
          return <Route key={obj.path} path={obj.path} element={obj.component} exect/>  
        })
        :
        PriRoute.map(obj => {
          return <Route key={obj.path} path={obj.path} element={obj.component} exect/>  
        })
      }
    </Routes>
  )
}

export default RouteApp
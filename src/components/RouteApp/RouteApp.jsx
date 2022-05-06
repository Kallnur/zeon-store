import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PriRoute, PubRoute } from './RoutePath/RoutePath'

const RouteApp = () => {
  return (
    <Routes>
      {
        PriRoute.map(obj => {
          console.log(obj);
          return <Route key={obj.path} path={obj.path} element={obj.component} exect/>  
        })
      }
    </Routes>
  )
}

export default RouteApp
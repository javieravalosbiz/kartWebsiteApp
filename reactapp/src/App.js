//? this is the main file of the app, we just have the routes in here
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import routes from './Router/Routes'

 const App = () => {
  return (
    <Router>
      <Routes>
        {
          routes.navRoutes.map((route, index) => {
            return <Route 
              key= {`router_${index}`} 
              path={route.path} 
              element={route.element} 
              loader={({params})=> { /* we will probably use a cool ass fetch here heheheheheh */ }}  
            />
          })
        }
        {
          routes.otherRoutes.map((route, index) => {
            return <Route 
              key= {`router_${index}`} 
              path={route.path} 
              element={route.element} 
              loader={({params})=> { /* we will probably use a cool ass fetch here heheheheheh */ }}  
            />
          })
        }
      </Routes>
    </Router>
  )
}

export default App
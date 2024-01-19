//?react routes config file
import Home from '../pages/home/Home'
import User from '../pages/users/User'

const mainRoutes = [
  { path: '/', element: <Home />, name: 'Home', icon: '🏠'},
  { path: '/user', element: <User />, name: 'User', icon: '👤' }
]

export default mainRoutes
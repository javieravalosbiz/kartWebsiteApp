//?react routes config file
import Home from '../pages/home/Home'
import User from '../pages/users/User'

//todo: the ignore key is a bad practice to ignore some routes at the moment of generating the banner, it is just a placeholder
const mainRoutes = {
  routes: [
    { path: '/', element: <Home />, name: 'Home', icon: '🏠'},
    { path: '/user/:user', element: <User />, name: 'User', icon: '👤' },
    { path: '/home', element: <Home />, name: 'Home', icon: '🏠'},
    { path: '/user', element: <User />, name: 'User', icon: '👤' }
  ],
  ignore : 2
}

export default mainRoutes
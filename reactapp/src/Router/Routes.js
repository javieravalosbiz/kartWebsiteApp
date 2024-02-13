//?react routes config file
import Home from '../pages/home/Home'
import User from '../pages/users/User'
import Maps from '../pages/maps/Maps'
import CompetitiveRuleset from '../pages/competitive-ruleset/CompetitiveRuleset'

//todo: the ignore key is a bad practice to ignore some routes at the moment of generating the banner, it is just a placeholder
const mainRoutes = {
  routes: [
    { path: '/', element: <Home />, name: 'Home', icon: '🏠'},
    { path: '/user/:user', element: <User />, name: 'User', icon: '👤' },
    { path: '/home', element: <Home />, name: 'Home', icon: '🏠'},
    { path: '/user', element: <User />, name: 'User', icon: '👤' },
    { path: '/maps', element: <Maps />, name: 'Maps', icon: '🗺️' },
    { path: '/ruleset', element: <CompetitiveRuleset />, name: 'Competitive Ruleset', icon: '🏆' }
  ],
  ignore : 2
}

export default mainRoutes
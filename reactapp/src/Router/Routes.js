//?react routes config file
import MainLayout from '../common/components/layouts/MainLayout'

import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import Maps from '../pages/maps/Maps'
import Tourneys from '../pages/tourneys/Tourneys'
import Leaderboard from '../pages/leaderboard/Leaderboard'
import CompetitiveRules from '../pages/ruleset/CompetitiveRules'

import {
  HomeOutlined,
  UserOutlined,
  FileImageOutlined,
  FileTextOutlined,
  FundProjectionScreenOutlined,
  CrownOutlined,
} from '@ant-design/icons'


//this just saves some typing, perhaps there will be new layout configurations in the future
const mainLayoutComponent = (component) =>{ 
  return <MainLayout>{component}</MainLayout>
}

const routes = {
  //nav routes are the ones that appear in the navigation bar
  navRoutes: [
    { path: '/home', element: mainLayoutComponent(<Home/>), name: 'Home', icon: <HomeOutlined />},
    { path: '/profile', element: mainLayoutComponent(<Profile/>), name: 'Profile', icon: <UserOutlined /> },
    { path: '/maps', element: mainLayoutComponent(<Maps/>), name: 'Maps', icon: <FileImageOutlined /> },
    { path: '/tourneys', element: mainLayoutComponent(<Tourneys/>), name: 'Tourneys', icon: <FundProjectionScreenOutlined />},
    { path: '/leaderboard', element: mainLayoutComponent(<Leaderboard/>), name: 'Leaderboard', icon: <CrownOutlined /> },
    { path: '/ruleset', element: mainLayoutComponent(<CompetitiveRules/>), name: 'Ruleset', icon: <FileTextOutlined /> }
  ],
  //other routes are the ones that are not in the navigation bar
  otherRoutes:[
    { path: '/', element: mainLayoutComponent(<Home/>)},
    { path: '/profile/:profile', element: mainLayoutComponent(<Profile/>) },
    { path: '/maps/:map', element: mainLayoutComponent(<Maps/>)},
    { path: '/tourneys/:tourney', element: mainLayoutComponent(<Tourneys/>)}
  ]
}

export default routes
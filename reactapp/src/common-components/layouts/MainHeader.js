//?this is the main header for the kart website
import { Menu, Layout } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
const { Header } = Layout

const MainHeader = ({routes, ignore}) => {

  const location = useLocation()
  const navigate = useNavigate()

  //todo: the slice(ignore) removes a bad practice from the routes.js config file
  const headerItems = routes.slice(ignore).map((route, index) => ({
    key: index,
    label: `${route.icon} ${route.name}`,
    path: route.path
  }))

  //default key gets the current path and finds the index of the path in the headerItems
  const defaultKey = headerItems.findIndex(item => item.path === location.pathname).toString()

  return(
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[defaultKey]}
        items={headerItems}
        onClick={({key}) => navigate(headerItems[key].path)}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  )
}

export default MainHeader
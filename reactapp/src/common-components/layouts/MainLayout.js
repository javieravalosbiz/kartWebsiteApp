//?this is the main layout of the page
import { Breadcrumb, Layout, theme } from 'antd'
import { useLocation, Link } from 'react-router-dom'
import mainRoutes from '../../Router/Routes'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

const { Content } = Layout

const MainLayout = (props) => {

  const location = useLocation()
  //this removes the first empty string
  const locationPath = location.pathname.split('/').slice(1) 
  //todo: this is a bad practice to replace the first empty string with home
  if (locationPath[0] === '') { locationPath[0] = 'home' }

  //this map function creates a breadcrumb for the current location using the current path
  const breadcrumbs = locationPath.map((path, index) => {
    let relativePath = ''
    locationPath.slice(0, index + 1).forEach((path) => {
      relativePath = relativePath + '/' + path
    })
    return { title: <Link to={relativePath}>{path}</Link> }
  })

  const { token: { colorBgContainer, borderRadiusLG }} = theme.useToken()

  //todo: the ignore prop is a bad practice to replace the routes that are not being used
  return (
    <Layout>
      <MainHeader routes={mainRoutes.routes} ignore={mainRoutes.ignore} />
      <Content style={{ padding: '0 48px' }} >
         <Breadcrumb
          style={{ margin: '16px 0' }}
          items={breadcrumbs}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG
          }}
        > 
          {props.children}
        </div>
      </Content>
      <MainFooter />
    </Layout>
  )
}

export default MainLayout
//?this is the main layout of the page
import { Breadcrumb, Layout, theme } from 'antd'
import mainRoutes from '../../Router/Routes'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

const { Content } = Layout

const MainLayout = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout>
      <MainHeader props={mainRoutes} />
      <Content style={{ padding: '0 48px' }} >
         <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[
            { title: 'Home' },
            { title: <a href="">Application Center</a> },
            { title: <a href="">Application List</a> },
            { title: 'An Application' }
          ]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG
          }}
        > 
          {children}
        </div>
      </Content>
      <MainFooter />
    </Layout>
  )
}

export default MainLayout
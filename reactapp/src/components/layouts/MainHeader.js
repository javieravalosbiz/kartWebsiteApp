//?this is da header
import { Menu, Layout } from 'antd'

const { Header } = Layout

const MainHeader = ({props}) => {

  const headerItems = props.map((route, index) => ({
    key: index + 1,
    label: `${route.icon} ${route.name}`,
  }))

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
        defaultSelectedKeys={['1']}
        items={headerItems}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  )
}

export default MainHeader
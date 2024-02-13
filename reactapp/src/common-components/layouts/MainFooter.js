//?da main footie for da kartie websitie
import { Layout } from 'antd'

const { Footer } = Layout

const MainFooter = () => {
  return(
    <Footer style={{ textAlign: 'center' }} >
      jelly design, probably mr. logan and dontu too 🥹 ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  )
}

export default MainFooter

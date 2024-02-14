//? page for the leaderboard of the server
import { Divider, Col, Row } from 'antd'
import Top10 from './components/Top10'

import './Leaderboard.css'

const Leaderboard = () => {

  //todo: this is a placeholder object for the user data, this will be replaced by a fetch
  const top10users = [
    { username: 'user1'},
    { username: 'user2'},
    { username: 'user3'},
    { username: 'user4'},
    { username: 'user5'},
    { username: 'user6'},
    { username: 'user7'},
    { username: 'user8'},
    { username: 'user9'},
    { username: 'user10'}
  ]


  //todo: center DIVS OH MY GOD 
  return (
    <div>
      <Row>
        <Col span={8}>
          <Divider orientation='left'>Server Leaderboard</Divider>
          <Top10 userData={top10users} />
        </Col>
        <Col span={8}>
        <Divider orientation='left'>Tournament Leaderboard</Divider>
          <Top10 userData={top10users} />
        </Col>
        <Col span={8}>
        <Divider orientation='left'>Record Attack Leaderboard</Divider>
          <Top10 userData={top10users} />
        </Col>
      </Row>
    </div>
  )
}

export default Leaderboard
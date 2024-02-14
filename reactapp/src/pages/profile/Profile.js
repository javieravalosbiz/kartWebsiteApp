//?users page
import { Divider, Col, Row } from 'antd'
import { useParams, useLocation } from 'react-router-dom'

import Usercard from '../../common/components/usercard/Usercard'
import Searcher from '../../common/components/search/Searcher'

const Profile = () => {

  //if there is no parameter in the url, we default to the logged in user
  //todo: logig for the NOT logged in user
  const location = useLocation()
  const pathname = `/${location.pathname.split('/')[1]}`
  const {profile} = useParams()
  const username = profile ? profile : 'me' 

  //todo: this is a placeholder object for the user data, this will be replaced by a fetch
  const userData = {
    username: username,
    races: 999,
    firsts: 997,
    seconds: 1,
    thirds: 1,
    podiums: 999,
  }

  return (
    <div>
      <h1>Kart Profiles</h1>
      <Row>
        <Col span={24}>
          <Divider orientation='left'>Search for a User</Divider>
          <Searcher url={'userapi'} path={pathname} placeholder={'Look for a specific user'} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Divider orientation='left'>User Stats</Divider>
          <Usercard userData={userData} />
        </Col>
        <Col span={12}>
          <Divider orientation='left'>User Achievements</Divider>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
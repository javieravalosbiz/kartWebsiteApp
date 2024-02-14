//? hub for tournaments (both results and signups) of the server
import { Divider, Row, Col } from 'antd'
import { useParams, useLocation } from 'react-router-dom'

import Searcher from '../../common/components/search/Searcher'


//todo: define tourneyapi
const Results = () => {

  const location = useLocation()
  const pathname = `/${location.pathname.split('/')[1]}`
  const {tourney} = useParams()
  const tourneyid = tourney ? tourney : 'none' 

  return (
    <div>
      <h1>Tournament History</h1>
      <Row>
        <Col span={24}>
          <Divider orientation='left'>Search</Divider>
          <Searcher url={'tourneyapi'} path={pathname} placeholder={'Look for a specific tournament'} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Divider orientation='left'>Past Events</Divider>
          <span>showing details for {tourneyid}</span>
        </Col>
        <Col span={12}>
          <Divider orientation='left'>Open Events</Divider>
        </Col>
      </Row>
    </div>
  )
}

export default Results
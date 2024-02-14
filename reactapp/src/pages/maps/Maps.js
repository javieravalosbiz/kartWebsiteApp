//? page for the maplist of the server
import { Divider, Row, Col } from 'antd'
import { useParams, useLocation } from 'react-router-dom'

import Searcher from '../../common/components/search/Searcher'

const Maps = () => {

  const location = useLocation()
  const pathname = `/${location.pathname.split('/')[1]}`
  const {map} = useParams()
  const mapid = map ? map : 'none' 

  return (
    <div>
      <h1>Map List</h1>
      <Row>
        <Col span={24}>
          <Divider orientation='left'>Map Search</Divider>
          <Searcher url={'mapapi'} path={pathname} placeholder={'Look for a specific map'} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation='left'>Map List</Divider>
          <span>showing details for {mapid}</span>
        </Col>
      </Row>
    </div>
  )
}

export default Maps
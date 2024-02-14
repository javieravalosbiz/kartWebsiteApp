//?component that displays a top 10 list of users, with links to their profile links

import { Avatar, List } from 'antd'
import { Link } from 'react-router-dom'

const Top10 = ({userData}) => {

  userData.map((user, index) => {

    switch (index) {
      case 0:
        user.rank = '🥇'
        break
      case 1:
        user.rank = '🥈'
        break
      case 2:
        user.rank = '🥉'
        break
      default:
        user.rank = index + 1
    }

    return {
      username: user.username,
      rank: user.rank
    }

  })

  //todo: remove inline style from the div
  //todo: figure out top 10 styles in general
  return(
    <div>
      <List
        itemLayout="horizontal"
        dataSource={userData}
        renderItem={(user, index) => (
          <List.Item>
            <div style={{ fontSize: '25px' }}>{user.rank}</div>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<Link to={`/profile/${user.username}`}>{user.username}</Link>}
              description='Profile'
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Top10
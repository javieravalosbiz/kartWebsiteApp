//?card that displays the user information, customizable or something i guess

import { Card } from 'antd'

const Usercard = ({userData}) => (
  <div>
    <Card
      size="small"
      title="Small size card"
      extra={<a href="/">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>👤 Name:          {userData.username}</p>
      <p>🏎️ Races:         {userData.races}</p>
      <p>🥇 First Places:  {userData.firsts}</p>
      <p>🥈 Second Places: {userData.seconds}</p>
      <p>🥉 Third Places:  {userData.thirds}</p>
      <p>🏁 Podiums:       {userData.podiums}</p>
    </Card>
    </div>
)

export default Usercard
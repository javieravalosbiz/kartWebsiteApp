//?users page
import { useParams } from 'react-router-dom'

import MainLayout from '../../common-components/layouts/MainLayout'
import Usercard from '../../common-components/usercard/Usercard'

const User = () => {

  const {user} = useParams()
  const params = user ? user : 'me'

  //todo: this is a placeholder object for the user data, this will be replaced by a fetch
  const userData = {
    username: params,
    races: 999,
    firsts: 997,
    seconds: 1,
    thirds: 1,
    podiums: 999,
  }

  return (
    <div>
      <MainLayout>
        <h1>this is the user page for {params}</h1>
        <Usercard userData={userData} />
      </MainLayout>
    </div>
  )
}

export default User
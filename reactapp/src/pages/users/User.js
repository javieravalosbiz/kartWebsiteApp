//?users page
import MainLayout from "../../components/layouts/MainLayout"

const prop = {
  name: 'User',
}

const User = () => {
  return (
    <div>
      <MainLayout props={prop}>
        <h1>this is the user page</h1>
      </MainLayout>
    </div>
  )
}

export default User
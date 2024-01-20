//? home page
import MainLayout from "../../components/layouts/MainLayout"

const prop = {
  name: 'Home',
}

const Home = () => {
  return (
    <div>
      <MainLayout props={prop}>
        <h1>this is the home page</h1>
      </MainLayout>
    </div>
  )
}

export default Home
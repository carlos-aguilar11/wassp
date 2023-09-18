import FSeries from './FSeries/FSeries'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'
import Title from './Title/Title'
import Welcome from './Welcome/Welcome'

export default function Home() {
  return (
    <main className="home-background">
      <Navbar />
      <Title />
      <Welcome />
      <FSeries />
      <Menu />
    </main>
  )
}

import FSeries from './fseries/page'
import Menu from './menu/page'
import Navbar from './navbar/page'
import Title from './title/page'
import Welcome from './welcome/page'

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

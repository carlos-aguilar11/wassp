import FSeries from './components/FSeries/FSeries'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import ScrollableMenu from './components/ScrollableMenu/ScrollableMenu'
import Title from './components/Title/Title'
import Welcome from './components/Welcome/Welcome'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Title />
      <Welcome />
      <FSeries />
      <Menu />
    </main>
  )
}

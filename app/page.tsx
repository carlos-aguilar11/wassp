import FSeries from './components/FSeries/FSeries'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Testimonial from './components/Testimonial/Testimonial'
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
      <Testimonial />
      <News />
      <Footer />
    </main>
  )
}

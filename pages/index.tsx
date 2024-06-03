import Search from '../components/Home/Search'
import GameList from '../components/Home/GameList'
import Hero from '../components/Home/Hero'

export default function Home() {
  return (
    <div className='px-5 sm:px-7 md:px-10 mt-9'>
      <Hero/>
      <Search/>
      <GameList/>
    </div>
  )
}
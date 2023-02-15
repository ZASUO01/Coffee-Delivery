import { Intro } from './components/Intro'
import { CoffeeList } from './components/CoffeeList'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}

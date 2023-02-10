import { Intro } from './Intro'
import { CoffeeList } from './CoffeeList'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}

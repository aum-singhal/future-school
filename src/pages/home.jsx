import { HomeInnovation } from "../components/home/innovation"
import { HomeLanding } from "../components/home/landing"
import { HomeRibbonStats } from "../components/home/ribbonStats"
import { HomeSpotlight } from "../components/home/spotlight"
import { HomeStats } from "../components/home/stats"

export const HomePage = () => {
  return <div className="home-page">
    <HomeLanding />
    <HomeRibbonStats />
    <HomeSpotlight />
    <HomeStats />
    <HomeInnovation />
  </div>
}
import { AboutMap } from "../components/about/aboutMap"
import { AboutAdvantages } from "../components/about/advantage"
import { AboutJoin } from "../components/about/join"
import { AboutLanding } from "../components/about/landing"
import { AboutTeam } from "../components/about/team"

export const AboutPage = () => {
  return <div className="about-page">
    <AboutLanding />
    <AboutTeam />
    <AboutAdvantages />
    <AboutMap />
    <AboutJoin />
  </div>
}
import { AboutMap } from "../components/about/aboutMap"
import { AboutAdvantages } from "../components/about/advantage"
import { AboutLanding } from "../components/about/landing"
import { AboutTeam } from "../components/about/team"

export const AboutPage = () => {
  return <div className="about-page">
    <AboutLanding />
    <AboutTeam />
    <AboutAdvantages />
    <AboutMap />
  </div>
}
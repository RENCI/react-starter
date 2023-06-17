import about from '../content/about/about.md'
import mission from '../content/about/mission.md'
import { Markdown } from '../components/markdown'
import classes from './about.module.css'

export const AboutView = () => {
  return (
    <div className={ classes.container }>
      <div className={ classes.columns }>
        <div className={ classes.main}>
          <Markdown>{ about }</Markdown>
        </div>
        <div className={ classes.aside}>
          <Markdown>{ mission }</Markdown>
        </div>
      </div>
    </div>
  )
}
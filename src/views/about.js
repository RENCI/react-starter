import content from '../content/about.md'
import { Markdown } from '../components/markdown'

export const AboutView = () => {
  return (
    <Markdown>{ content }</Markdown>
  )
}
import content from '../content/home.md'
import { Markdown } from '../components/markdown'

export const HomeView = () => {
  return (
    <Markdown>{ content }</Markdown>
  )
}
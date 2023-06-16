import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from './link'

/*
 * this object defines a map,
 *   DOM elements -> React components,
 * which allows us to map the HTML elements
 * that result from the markdown content
 * to the React components used in the rest
 * of the application.
 */
const componentMap = {
  // replace links (<a /> tags) with our "smart" Link component.
  a: ({ href, ...props }) => (
    <Link to={ href } { ...props } />
  ),
}

export const Markdown = props => {
  return (
    <ReactMarkdown
      { ...props }
      components={ componentMap }
      remarkPlugins={ [remarkGfm] }
    />
  )
}
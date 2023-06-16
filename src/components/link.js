import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link as ReactLink } from 'react-router-dom'
import { NavLink as ReactNavLink } from 'react-router-dom'

//

export const ExternalLink = ({ to, children }) => {
  return (
    <Fragment>
      <a
        href={ to }
        target="_blank"
        rel="noopener noreferrer"
      >{ children }</a>
      <ExternalLinkIcon />
    </Fragment>
  )
}

export const MailtoLink = ({ to, children }) => {
  return (
    <Fragment>
      <a href={ to }>{ children }</a>
      <MailtoLinkIcon />
    </Fragment>
  )
}

const BaseLinkPropTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

ExternalLink.propTypes = { ...BaseLinkPropTypes }
MailtoLink.propTypes = { ...BaseLinkPropTypes }

//

export const Link = ({ nav, to, children, ...props }) => {
  // if this is a navigation menu link, we can bail out now.
  if (nav) {
    return <ReactNavLink to={ to } { ...props }>{ children }</ReactNavLink>    
  }
  // otherwise, we'll to determine the type of link and
  // decorate it with an icon accordingly.
  const externalUrlPattern = new RegExp(/^https?:\/\//)
  const externalUrlMatch = externalUrlPattern.exec(to)
  const mailtoPattern = new RegExp(/^mailto:/)
  const mailtoMatch = mailtoPattern.exec(to)
  const LinkComponent = externalUrlMatch
    ? ExternalLink
      : mailtoMatch
        ? MailtoLink
        : ReactLink
  return <LinkComponent to={to} { ...props }>{children}</LinkComponent>
}

Link.propTypes = {
  nav: PropTypes.bool,
  ...BaseLinkPropTypes
}

Link.defaultProps = {
  nav: false,
}

//

const LinkIcon = ({ size, children }) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      width={ `${ size }px` }
      height={ `${ size }px` }
      style={{ marginLeft: '4px' }}
      fill="#789"
    >{ children }</svg>
  )
}
    
LinkIcon.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export const ExternalLinkIcon = ({ size = 10 }) => {
  return (
    <LinkIcon size={ size }>
      <path d="M 0,15.609374 V 7.2187491 H 5.1505597 10.30112 L 10.910188,6.6093432 11.519255,5.9999371 10.564316,5.044784 9.6093751,4.0896309 V 2.044815 -3.0028053e-7 H 16.804688 24 V 7.1953116 14.390624 h -2.044815 -2.044817 l -0.955152,-0.954941 -0.955154,-0.954939 -0.609406,0.609067 -0.609405,0.609069 V 18.84944 24 H 8.3906251 0 Z m 14.414062,3.246094 c 0,-1.514648 -0.0079,-2.753907 -0.01753,-2.753907 -0.0096,0 -0.821756,0.804184 -1.80471,1.787076 l -1.787189,1.787076 -3.2401772,-3.240177 -3.240177,-3.240177 1.7870754,-1.787191 c 0.9828914,-0.982954 1.7870754,-1.7950739 1.7870754,-1.8047105 0,-0.00961 -1.2392579,-0.017522 -2.7539062,-0.017522 H 2.3906249 v 6.0117185 6.011719 h 6.0117189 6.0117182 z m -0.01685,-6.146047 3.603002,-3.6030772 1.446496,1.4468272 1.446495,1.446828 h 0.358088 0.358085 V 7.1953116 2.3906241 H 16.804688 12 v 0.3577821 0.3577821 l 1.025391,1.028297 c 0.563964,0.5655636 1.209333,1.2172855 1.434153,1.4482713 L 14.8683,6.0027304 11.272086,9.5990023 7.675871,13.195274 9.2343514,14.753887 c 0.8571646,0.857237 1.5587886,1.558612 1.5591656,1.558612 3.77e-4,0 1.622035,-1.621385 3.603688,-3.603078 z" />
    </LinkIcon>
  )
}

export const MailtoLinkIcon = ({ size = 12 }) => {
  return (
    <LinkIcon size={ size }>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
    </LinkIcon>
  )
}

ExternalLinkIcon.propTypes = {
  size: PropTypes.number,
}

MailtoLinkIcon.propTypes = {
  size: PropTypes.number,
}

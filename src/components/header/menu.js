import PropTypes from 'prop-types'
import { Link } from '../link'
import classes from './menu.module.css'

//

export const Menu = ({ options }) => {
  return (
    <ul className={ classes.mainNavigation } role="navigation">
      {
        options.map(({ label, path }) => (
          <li key={ path }>
            <Link nav to={ path }>{ label }</Link>
          </li>
        ))
      }
    </ul>
  )
}

export const menuOptionsPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
).isRequired

Menu.propTypes = {
  options: menuOptionsPropTypes,
}

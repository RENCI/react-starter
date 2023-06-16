import PropTypes from 'prop-types'
import { Link } from '../link'
import renciLogo from '../../images/renci-logo.png'
import renciLogoDark from '../../images/renci-logo-dark.png'

const SIZES = {
  tiny: 40,
  small: 80,
  medium: 150,
  large: 200,
}

export const Brand = ({ size, dark }) => {

  return (
    <Link to="/">
      <img src={dark ? renciLogoDark : renciLogo} width={ SIZES?.[size] || SIZES.large } />
    </Link>
  )  
}

Brand.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  dark: PropTypes.bool,
}

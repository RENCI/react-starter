import classes from './footer.module.css'
import { Brand } from '../brand'

//

export const Footer = () => {
  return (
    <footer className={ classes.footer }>
      <Brand size="tiny" dark />
      <span>
        &copy; { new Date().getFullYear() }
      </span>
    </footer>
  )
}

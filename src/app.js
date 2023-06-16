import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  AboutView,
  HomeView,
  NotFoundView,
} from './views'

import { Header } from './components/header'
import { Footer } from './components/footer'

const menuOptions = [
  {
    path: '/',
    label: 'Home',
    view: <HomeView />,
  },
  {
    path: '/about',
    label: 'About',
    view: <AboutView />,
  },
]

//

export const App = () => {
  return (
    <Fragment>
      <Header menuLinks={ menuOptions } />
      
      <main>
        <Routes>
          {
            // we'll build the routes from the main menu items.
            // note this implementation only supports a flat,
            // one-level navigation structure.
            menuOptions.map(({ path, view, label }) => (
              <Route
                key={ `route-${ label }` }
                path={ path }
                element={ view }
              />
            ))
          }
          <Route path="*" element={ <NotFoundView /> } />
        </Routes>
      </main>

      <Footer />
    </Fragment>
  )
}

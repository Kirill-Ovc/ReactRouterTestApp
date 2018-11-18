import Home from './components/Home'
import BookList from './components/BookList'
import NewsContainer from './containers/NewsContainer'
import ProfileContainer from './containers/ProfileContainer'
import LoginContainer from './containers/LoginContainer'
import About from './components/About'

// App relative path only in propuction 
// Relative paths dont work properly. Its better to place App in root.
export const appProdPath = "/ReactRouterTestApp"

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'На главную',
    component: Home
  },
  {
    isNavBar: true,
    path: '/news',
    name: 'Новости',
    component: NewsContainer
  },
  {
    isNavBar: true,
    path: '/books',
    name: 'Книги',
    component: BookList
  },
  {
    isNavBar: true,
    path: '/movies',
    name: 'Фильмы',
  },
  {
    isNavBar: true,
    path: '/about',
    name: 'О приложении',
    component: About
  },
  {
    isNavBar: false,
    path: '/profile',
    name: 'Профиль',
    component: ProfileContainer,
    isPrivate: true,
  },
  {
    isNavBar: false,
    path: '/login',
    name: 'Войти',
    component: LoginContainer,
  },
]

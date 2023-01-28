import { HashRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import  Home  from './page/Home'
import Login from './page/Login'
import  NewsDetail from './page/NewsDetail'
import Favorites from './page/Favorites'
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/Container';
import Loader from './components/Loader'
import { useSelector } from 'react-redux'


function App() {

const isLoading = useSelector( state => state.isLoading )

  return (
    
    <HashRouter>
       <NavBar/>
       { isLoading && <Loader/>}
        
        <Container className='my-5'>
          <Routes>
            <Route
            path='/'
            element={<Home/>}
            />
            <Route
            path='/news/:id'
            element={<NewsDetail/>}
            />
            <Route
            path='/login'
            element={<Login/>}
            />
            <Route
            path='/favorites'
            element={<Favorites/>}
            />
          </Routes>
        </Container>
     
      </HashRouter>  
    
  )
}

export default App

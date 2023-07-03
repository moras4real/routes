import { Route, Routes} from 'react-router-dom'
import Signupa from './components/Signupa'
import Signina from './components/Signina'
import Navbara from './components/Navbara'
import Errorpageo from './components/pages/Errorpageo'
import Dashboarda from './components/Dashboarda'


const App = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<Signupa/>} />
       <Route path='/signina' element={<Signina/>} />
       <Route path='/navbara' element={<Navbara/>} />
       <Route path='/*' element={<Errorpageo/>} />
       <Route path='/dashboarda' element={<Dashboarda/>} />
    </Routes>
    </>
  )
}

export default App
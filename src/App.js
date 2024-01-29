import {Route, Routes,BrowserRouter} from 'react-router-dom'
import GamesHeader from './Components/GamesHeader'
import RpsRules from './Components/RPSComponents/RPSRules'

import './App.css'

const App = () => (
  // <BrowserRouter>
  // <Routes>
  //   <Route exact path="/" element={<Home/>} />
  //   <Route path="*" element={<NotFound/>} />
  // </Routes>
  // </BrowserRouter>
  <>
  {/* <GamesHeader/> */}
  <RpsRules/>

  </>
)

export default App
